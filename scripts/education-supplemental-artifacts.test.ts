import { expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import matter from "../.renderer/node_modules/gray-matter/index.js";
import { applySnapshot, hash, inventory, reconcile, supplementalArtworkArtifacts, validateReceipt, validateSupplementalArtifacts, type Receipt } from "./education-content-sync";

const owner = "wiki/education/concepts/example/lesson.md";
const artwork = "wiki/education/concepts/example/images/area-light.png";
const artifact = "wiki/education/concepts/example/images/prompts/area-light-01-args.json";
const publicOwner = Buffer.from("---\nsensitive: false\ntags: [education]\n---\n# Example\n<img src=\"./images/area-light.png\">\n");
function fixture(bytes = Buffer.from('{"tool":"image_gen.imagegen","arguments":{"prompt":"Original call"}}\n'), artifactPath = artifact) {
  const files: Record<string, Buffer> = { [owner]: publicOwner, [artwork]: Buffer.from("native fixture"), [artifactPath]: bytes };
  const entry = { path: artifactPath, sha256: hash(bytes), bytes: bytes.length, owner, ownerSha256: hash(publicOwner), artwork, artworkSha256: hash(files[artwork]), contentClass: "source-owned-public-custody" as const };
  const manifest = { version: 1, sourceRepository: "jasonLaster/diana-tnbc", reviewedSourceCommit: "a".repeat(40), artifacts: [entry] };
  const active = { [owner]: entry.ownerSha256, [artwork]: entry.artworkSha256 };
  const sourcePaths = Object.keys(files).map(p => "obsidian/" + p);
  return { files, entry, manifest, active, sourcePaths, read: (p: string) => files[p] };
}
const receipt = (files: Record<string, string>): Receipt => ({ version: 1, sourceRepository: "jasonLaster/diana-tnbc", sourceCommit: "a".repeat(40), sourcePrefix: "obsidian/", files });

test("explicit nonstandard calls copy exact original bytes without exporting neighboring files", () => {
  const f = fixture();
  f.files[artifact.replace("-01-args", "-private")] = Buffer.from("unreviewed neighbor");
  const selected = supplementalArtworkArtifacts(f.manifest, f.active, Object.keys(f.files).map(p => "obsidian/" + p), f.read, matter);
  expect(selected.map(x => x.entry.path)).toEqual([artifact]);
  expect(selected[0].bytes).toEqual(f.files[artifact]);
  expect(f.manifest.artifacts[0].path).toBe(artifact);
});

test("manifest rejects unrelated paths, owners, unsafe names, classes and oversized or duplicate entries", () => {
  const f = fixture();
  for (const change of [
    { path: "sources/private/area.json" }, { path: artifact.replace("prompts/", "prompts/../") },
    { path: artifact.replace("prompts/", "prompts/case-bundle/") }, { path: artifact.replace("area-", "other-") },
    { path: artifact.replace(".json", ".html") }, { owner: "sources/private.md" },
    { artwork: "wiki/education/concepts/other/images/area-light.png" },
    { sha256: "invalid" }, { bytes: 0 }, { bytes: 6 * 1024 * 1024 }, { contentClass: "third-party-source-body" },
  ]) expect(() => validateSupplementalArtifacts({ ...f.manifest, artifacts: [{ ...f.entry, ...change }] })).toThrow();
  expect(() => validateSupplementalArtifacts({ ...f.manifest, artifacts: [f.entry, f.entry] })).toThrow();
  expect(() => validateSupplementalArtifacts({ ...f.manifest, sourceRepository: "other/private" })).toThrow();
});

test("owner privacy and redaction are checked even when supplied hashes are otherwise valid", () => {
  for (const raw of ["---\nsensitive: true\n---\nPrivate", "---\ntags: [sensitive]\n---\nPrivate", "# Public\n<redact>private</redact>"]) {
    const f = fixture(); f.files[owner] = Buffer.from(raw); f.entry.ownerSha256 = hash(f.files[owner]); f.active[owner] = f.entry.ownerSha256;
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow();
  }
});

test("text and JSON custody reject restricted metadata, redactions, malformed JSON and LFS placeholders", () => {
  for (const text of ['{"sensitive":true}', '{"tags":["sensitive"]}', '{"sensitive-include":["private"]}', '{"prompt":"<redact>private</redact>"}', "not json", "version https://git-lfs.github.com/spec/v1\noid sha256:000"]) {
    const f = fixture(Buffer.from(text));
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow();
  }
  const f = fixture(Buffer.from("---\nsensitive: true\n---\nPrivate"), artifact.replace(".json", ".txt"));
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow();
});

test("missing source, changed owner, artwork, byte hash and byte size are all refused", () => {
  for (const field of ["owner", "artwork", "artifact", "size", "missing"] as const) {
    const f = fixture();
    if (field === "owner") f.files[owner] = Buffer.from(publicOwner.toString() + "Changed teaching\n");
    if (field === "artwork") f.active[artwork] = hash("different native artwork");
    if (field === "artifact") f.files[artifact] = Buffer.from('{"prompt":"different source"}');
    if (field === "size") f.entry.bytes++;
    if (field === "missing") f.sourcePaths = f.sourcePaths.filter(p => p !== "obsidian/" + artifact);
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow();
  }
  const f = fixture(Buffer.from("not a ZIP"), artifact.replace(".json", ".zip"));
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow("ZIP");
});

test("inactive artwork skips fresh export while prior custody retains its original source revision", () => {
  const f = fixture();
  expect(supplementalArtworkArtifacts(f.manifest, { [owner]: hash("revised lesson") }, [], () => { throw Error("Retired source must not be read"); }, matter)).toEqual([]);
  const base = receipt({ [owner]: f.entry.ownerSha256, [artwork]: f.entry.artworkSha256, [artifact]: f.entry.sha256 });
  const future = { [owner]: hash("revised lesson") };
  const plan = reconcile(base, future, base.files);
  expect(plan.retainedFiles[artifact]).toEqual({ hash: f.entry.sha256, sourceCommit: base.sourceCommit });
  const retired = { ...receipt(future), sourceCommit: "b".repeat(40), retainedFiles: plan.retainedFiles };
  const again = reconcile(retired, future, { ...future, [artifact]: f.entry.sha256, [artwork]: f.entry.artworkSha256 });
  expect(again.retainedFiles[artifact]).toEqual(plan.retainedFiles[artifact]);
  expect(again.removals).toEqual([]);
});

test("independent destination custody edits remain conflicts", () => {
  const f = fixture(), base = receipt({ ...f.active, [artifact]: f.entry.sha256 });
  const expected = { ...f.active, [artifact]: hash("reviewed new source call") };
  const actual = { ...f.active, [artifact]: hash("independent local custody edit") };
  expect(reconcile(base, expected, actual).conflicts.map(c => c.path)).toEqual([artifact]);
});

test("sidecar apply and repeat plan roundtrip preserves bytes and catches staged races before writes", () => {
  const f = fixture(), root = fs.mkdtempSync(path.join(os.tmpdir(), "supplemental-root-")), stage = fs.mkdtempSync(path.join(os.tmpdir(), "supplemental-stage-"));
  const write = (dir: string, p: string, b: Buffer) => { fs.mkdirSync(path.dirname(path.join(dir, p)), { recursive: true }); fs.writeFileSync(path.join(dir, p), b); };
  try {
    for (const p of [owner, artwork]) write(root, p, f.files[p]);
    for (const p of [owner, artwork]) write(stage, p, f.files[p]);
    const selected = supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter);
    write(stage, artifact, selected[0].bytes);
    const base = receipt(f.active), future = { ...receipt({ ...f.active, [artifact]: f.entry.sha256 }), sourceCommit: "b".repeat(40) };
    const actual = inventory(root), plan = reconcile(base, future.files, actual);
    write(stage, artifact, Buffer.from("changed after planning"));
    expect(() => applySnapshot(root, stage, base, future, plan, actual)).toThrow("Staged source changed");
    expect(fs.existsSync(path.join(root, artifact))).toBe(false);
    write(stage, artifact, selected[0].bytes); applySnapshot(root, stage, base, future, plan, actual);
    expect(fs.readFileSync(path.join(root, artifact)).equals(f.files[artifact])).toBe(true);
    const saved = validateReceipt(JSON.parse(fs.readFileSync(path.join(root, "content-sync.json"), "utf8")));
    const repeat = reconcile(saved, future.files, inventory(root));
    expect(repeat.additions).toEqual([]); expect(repeat.updates).toEqual([]); expect(repeat.conflicts).toEqual([]);
  } finally { fs.rmSync(root, { recursive: true, force: true }); fs.rmSync(stage, { recursive: true, force: true }); }
});
