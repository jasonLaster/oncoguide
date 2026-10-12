import { expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "../.renderer/node_modules/gray-matter";
import { applySnapshot, hash, inventory, MAX_SUPPLEMENTAL_ARTIFACTS, reconcile, sourceTreeFiles, supplementalArtworkArtifacts, validateReceipt, validateSupplementalArtifacts, type Receipt } from "./education-content-sync";

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

function jointFixture(text = '{"tool":"image_gen.imagegen","model":"unknown (not returned)"}', nested = true) {
  const p = "wiki/education/concepts/example/images/prompts/" + (nested ? "reviewed-calls/01-returned-metadata.json" : "joint-generation-receipt.json");
  const f = fixture(Buffer.from(text), p);
  const dark = artwork.replace("light", "dark");
  f.files[dark] = Buffer.from("dark native fixture");
  const { artwork: _artwork, artworkSha256: _artworkSha256, ...common } = f.entry;
  const entry = { ...common, artworks: [artwork, dark].map(path => ({ path, sha256: hash(f.files[path]) })) };
  const manifest = { ...f.manifest, version: 2, artifacts: [entry] };
  const active: Record<string, string> = { ...f.active, [dark]: hash(f.files[dark]) };
  const sourcePaths = Object.keys(f.files).map(p => "obsidian/" + p);
  return { ...f, entry, manifest, active, sourcePaths, dark };
}

test("v2 copies explicit nested calls and flat joint JSON without neighbors or invented fields", () => {
  for (const nested of [false, true]) {
    const f = jointFixture(undefined, nested);
    f.files[f.entry.path.replace(".json", "-neighbor.json")] = Buffer.from('{"sensitive":true}');
    const selected = supplementalArtworkArtifacts(f.manifest, f.active, Object.keys(f.files).map(p => "obsidian/" + p), f.read, matter, f.manifest.reviewedSourceCommit);
    expect(selected.map(x => x.entry.path)).toEqual([f.entry.path]);
    expect(selected[0].bytes).toEqual(f.files[f.entry.path]);
    expect(JSON.parse(selected[0].bytes.toString()).model).toBe("unknown (not returned)");
    expect(() => validateSupplementalArtifacts({ ...f.manifest, version: 1 })).toThrow();
  }
  const legacy = fixture();
  expect(validateSupplementalArtifacts({ ...legacy.manifest, version: 2 })).toEqual(legacy.manifest.artifacts);
});

test("joint JSON requires bounded namespace depth, identities, extension and committed review", () => {
  const f = jointFixture(), directory = "wiki/education/concepts/example/images/prompts/";
  for (const change of [
    { path: directory + "reviewed-calls/deeper/01.json" }, { path: directory + "../01.json" },
    { path: directory + ".hidden/01.json" }, { path: directory + "reviewed_calls/01.json" },
    { path: directory + "reviewed-calls/.hidden.json" }, { path: directory + "reviewed-calls/01.json\\escape" },
    { path: directory + "reviewed-calls/01.zip" }, { path: directory + "reviewed-calls/01.txt" },
    { path: "wiki/education/concepts/other/images/prompts/01.json" },
    { artworks: [f.entry.artworks[0]] }, { artworks: [] },
    { artworks: [f.entry.artworks[0], f.entry.artworks[0]] },
    { artworks: [...f.entry.artworks, { path: "sources/private.png", sha256: hash("private") }] },
    { artworks: [...f.entry.artworks, { path: "wiki/education/concepts/other/images/x.png", sha256: hash("x") }] },
    { artwork, artworkSha256: hash("mixed legacy binding") }, { bytes: 1024 * 1024 + 1 },
  ]) expect(() => validateSupplementalArtifacts({ ...f.manifest, artifacts: [{ ...f.entry, ...change }] })).toThrow();
  expect(() => validateSupplementalArtifacts({ ...f.manifest, reviewedSourceCommit: null })).toThrow();
});

test("joint owner, every active artwork, original file hash/size and committed paths must match", () => {
  for (const change of ["owner", "active-owner", "light", "dark", "file", "size", "missing-file", "missing-art", "missing-owner"] as const) {
    const f = jointFixture();
    if (change === "owner") f.files[owner] = Buffer.from("# Changed owner");
    if (change === "active-owner") f.active[owner] = hash("different active owner");
    if (change === "light") f.active[artwork] = hash("different active light");
    if (change === "dark") f.active[f.dark] = hash("different active dark");
    if (change === "file") f.files[f.entry.path] = Buffer.from('{}');
    if (change === "size") f.entry.bytes++;
    if (change.startsWith("missing")) {
      const missing = change === "missing-file" ? f.entry.path : change === "missing-art" ? f.dark : owner;
      f.sourcePaths = f.sourcePaths.filter(p => p !== "obsidian/" + missing);
    }
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow();
  }
});

test("joint custody rejects recursive privacy flags, raw base64, redactions and excessive nesting", () => {
  const invalid = [
    { call: { sensitive: true } }, { calls: [{ tags: ["sensitive"] }] }, { receipt: { "sensitive-include": ["case"] } },
    { result: { private: true } }, { result: { visibility: "restricted" } }, { result: { restricted: "yes" } }, { result: { private: "false", restricted: true } },
    { b64_json: "YWJj" }, { result: { imageBase64: "YWJj" } }, { result: "data:image/png;base64,YWJj" },
    { result: "A".repeat(1024) }, { prompt: "<redact>private</redact>" },
    Array.from({ length: 34 }).reduce(value => ({ child: value }), {}),
  ];
  for (const data of invalid) {
    const f = jointFixture(JSON.stringify(data));
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow();
  }
  const f = jointFixture('{"sensitive":false,"b64_json":null,"rawBase64":false,"model":"unknown (not returned)"}');
  expect(supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toHaveLength(1);
});

test("one inactive joint identity skips all fresh reads and keeps original custody provenance", () => {
  const f = jointFixture();
  const active = { ...f.active }; delete active[f.dark];
  expect(supplementalArtworkArtifacts(f.manifest, active, [], () => { throw Error("No retired source reads"); }, matter, f.manifest.reviewedSourceCommit)).toEqual([]);
  const base = receipt({ ...f.active, [f.entry.path]: f.entry.sha256 });
  const plan = reconcile(base, active, base.files);
  expect(plan.retainedFiles[f.entry.path]).toEqual({ hash: f.entry.sha256, sourceCommit: base.sourceCommit });
  const next = { ...receipt(active), sourceCommit: "b".repeat(40), retainedFiles: plan.retainedFiles };
  const repeated = reconcile(next, active, base.files);
  expect(repeated.retainedFiles[f.entry.path]).toEqual(plan.retainedFiles[f.entry.path]);
});

test("nested joint bytes apply once, repeat zero and refuse independent new/old destination edits", () => {
  const f = jointFixture(), root = fs.mkdtempSync(path.join(os.tmpdir(), "joint-root-")), stage = fs.mkdtempSync(path.join(os.tmpdir(), "joint-stage-"));
  const write = (dir: string, p: string, b: Buffer) => { fs.mkdirSync(path.dirname(path.join(dir, p)), { recursive: true }); fs.writeFileSync(path.join(dir, p), b); };
  try {
    for (const p of Object.keys(f.active)) write(root, p, f.files[p]);
    for (const p of Object.keys(f.files)) write(stage, p, f.files[p]);
    const selected = supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit);
    const base = receipt(f.active), future = receipt({ ...f.active, [f.entry.path]: hash(selected[0].bytes) });
    expect(reconcile(base, future.files, { ...base.files, [f.entry.path]: hash("unreceipted neighbor collision") }).conflicts.map(x => x.path)).toEqual([f.entry.path]);
    const actual = inventory(root); applySnapshot(root, stage, base, future, reconcile(base, future.files, actual), actual);
    expect(fs.readFileSync(path.join(root, f.entry.path)).equals(f.files[f.entry.path])).toBe(true);
    const saved = validateReceipt(JSON.parse(fs.readFileSync(path.join(root, "content-sync.json"), "utf8")));
    const repeat = reconcile(saved, future.files, inventory(root));
    expect([repeat.additions.length, repeat.updates.length, repeat.conflicts.length]).toEqual([0, 0, 0]);
    write(root, f.entry.path, Buffer.from("independent custody edit"));
    expect(reconcile(saved, future.files, inventory(root)).conflicts.map(x => x.path)).toEqual([f.entry.path]);
  } finally { fs.rmSync(root, { recursive: true, force: true }); fs.rmSync(stage, { recursive: true, force: true }); }
});

test("nested custody source symlinks and destination namespace symlinks are refused", () => {
  const f = jointFixture(), root = fs.mkdtempSync(path.join(os.tmpdir(), "joint-symlink-"));
  const git = (...args: string[]) => execFileSync("git", ["-C", root, ...args], { stdio: "pipe" });
  try {
    git("init"); git("config", "user.email", "fixture@example.invalid"); git("config", "user.name", "Fictional fixture");
    const target = path.join(root, "obsidian", f.entry.path); fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.symlinkSync("../unreviewed.json", target); git("add", "."); git("commit", "-m", "Fictional symlink fixture");
    expect(() => sourceTreeFiles(root, "HEAD")).toThrow("source mode 120000");
    const namespace = path.join(root, path.posix.dirname(f.entry.path)); fs.mkdirSync(path.dirname(namespace), { recursive: true });
    fs.symlinkSync(root, namespace);
    expect(() => inventory(root)).toThrow("Symlink");
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});


test("v2 export binding rejects absent or different committed source", () => {
  const f = jointFixture();
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow("exact committed export source");
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, "b".repeat(40))).toThrow("exact committed export source");
  expect(supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toHaveLength(1);
});


test("joint artwork count and whole-manifest entry/byte limits remain bounded", () => {
  const f = jointFixture();
  const artworks = Array.from({length: 9}, (_, i) => ({path: artwork.replace("area-light", "area-" + i), sha256: hash("image-" + i)}));
  expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: [{...f.entry, artworks}]})).toThrow();
  const entries = Array.from({length: MAX_SUPPLEMENTAL_ARTIFACTS + 1}, (_, i) => ({...f.entry, path: f.entry.path.replace("01-", i + "-")}));
  expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: entries})).toThrow("manifest");
  const full = entries.slice(0, 9).map(entry => ({...entry, bytes: 1024 * 1024}));
  expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: full})).toThrow("byte limit");
  expect(validateSupplementalArtifacts({...f.manifest, artifacts: full.slice(0, 8)})).toHaveLength(8);
});

test("flat joint ZIP keeps reviewed exact-byte acceptance and rejects nested or changed archives", () => {
  const f = jointFixture(undefined, false);
  const zip = f.entry.path.replace(".json", ".zip");
  const bytes = Buffer.concat([Buffer.from([0x50, 0x4b, 0x03, 0x04]), Buffer.from("fictional reviewed opaque ZIP fixture")]);
  f.files[zip] = bytes;
  f.entry.path = zip; f.entry.sha256 = hash(bytes); f.entry.bytes = bytes.length;
  f.sourcePaths.push("obsidian/" + zip);
  const selected = supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit);
  expect(selected[0].bytes).toEqual(bytes);
  expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: [{...f.entry, path: zip.replace("prompts/", "prompts/reviewed-calls/")}]})).toThrow();
  f.files[zip] = Buffer.from("changed reviewed archive");
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow("bytes changed");
  f.entry.sha256 = hash(f.files[zip]); f.entry.bytes = f.files[zip].length;
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow("ZIP");
});

// Version 3 proposal: exact selected ADC originals, not a directory discovery rule.
// These are fictional byte fixtures with the FOUR exact selected original TXT names.
// Actual selected byte fixtures are verified separately by the proposal's explicit driver.
const adcActualNames = ["route.light-01.actual-call.txt", "comparison.light-04.actual-call.txt",
  "route.dark-01.actual-call.txt", "comparison.dark-01.actual-call.txt"];
const adcOwner = "wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate.md";
const adcImages = path.posix.dirname(adcOwner) + "/images/";
const adcArtNames = ["adc-tdm1-processing-route-v1-light.png", "adc-tdm1-processing-route-v1-dark.png",
  "adc-local-bystander-and-dar-v1-light.png", "adc-local-bystander-and-dar-v1-dark.png"];
function adcFixture() {
  const files: Record<string, Buffer> = {[adcOwner]: publicOwner};
  const artworks = adcArtNames.map(name => {
    const p = adcImages + name; files[p] = Buffer.from("FICTIONAL active artwork: " + name);
    return {path: p, sha256: hash(files[p])};
  });
  const names = ["adc-executed-call-manifest-v1.json", ...adcActualNames.flatMap(n => [n.replace("actual-call.txt", "args.json"), n])];
  const artifacts = names.map(name => {
    const p = adcImages + "prompts/" + name;
    const args = {prompt: "Fictional test invocation for " + name, transparent_background: false, model: null};
    const bytes = Buffer.from((name.endsWith(".txt") ? "image_gen.imagegen\n" : "") + JSON.stringify(args) + "\n");
    files[p] = bytes;
    return {path: p, sha256: hash(bytes), bytes: bytes.length, owner: adcOwner,
      ownerSha256: hash(files[adcOwner]), artworks: structuredClone(artworks), contentClass: "source-owned-public-custody" as const};
  });
  const manifest = {version: 3, sourceRepository: "jasonLaster/diana-tnbc", reviewedSourceCommit: "a".repeat(40), artifacts};
  const active = Object.fromEntries([adcOwner, ...artworks.map(a => a.path)].map(p => [p, hash(files[p])]));
  const sourcePaths = Object.keys(files).map(p => "obsidian/" + p);
  const read = (p: string) => files[p];
  const select = () => supplementalArtworkArtifacts(manifest, active, sourcePaths, read, matter, manifest.reviewedSourceCommit);
  return { files, manifest, active, sourcePaths, read, select };
}
for (const name of adcActualNames) test("v3 exact selected-name ADC invocation TXT: " + name, () => {
  const f = adcFixture(); f.manifest.artifacts = f.manifest.artifacts.filter(e => path.posix.basename(e.path) === name);
  expect(f.manifest.artifacts).toHaveLength(1);
  const selected = f.select(), entry = f.manifest.artifacts[0];
  expect(selected[0].bytes).toEqual(f.files[entry.path]);
  expect(hash(selected[0].bytes)).toBe(entry.sha256);
  expect(selected[0].bytes.length).toBe(entry.bytes);
  expect(selected[0].entry.path).toBe(entry.path);
  expect(() => validateSupplementalArtifacts({...f.manifest, version: 2})).toThrow("joint");
  expect(() => validateSupplementalArtifacts({...f.manifest, version: 1})).toThrow("joint");
});

test("v3 exact nine ADC custody originals exclude unlisted neighboring private text", () => {
  const f = adcFixture(), p = f.manifest.artifacts[0].path.replace(".json", "-private.txt");
  f.files[p] = Buffer.from("unreviewed neighboring private call"); f.sourcePaths.push("obsidian/" + p);
  const reads: string[] = [];
  const selected = supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, p => {reads.push(p); return f.files[p];}, matter, f.manifest.reviewedSourceCommit);
  expect(selected).toHaveLength(9); expect(reads.includes(p)).toBe(false);
  expect(selected.map(x => x.entry.path)).toEqual(f.manifest.artifacts.map(e => e.path));
  expect(() => validateSupplementalArtifacts({...f.manifest, reviewedSourceCommit: null})).toThrow("manifest");
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter)).toThrow("exact committed");
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, "b".repeat(40))).toThrow("exact committed");
});

test("v3 TXT remains flat with no globs, unrelated owners, mixed art binding or larger permission", () => {
  const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
  for (const change of [
    {path: e.path.replace("prompts/", "prompts/calls/")}, {path: e.path.replace("prompts/", "prompts/../")},
    {path: e.path.replace("route.light", "*.light")}, {path: e.path.replace("route.light", ".route.light")},
    {path: e.path.replace(".txt", ".html")}, {path: e.path.replace(".txt", ".TXT")},
    {path: e.path + "\\escape"}, {owner: "sources/private.md"},
    {artworks: [e.artworks[0]]}, {artworks: [e.artworks[0], e.artworks[0]]},
    {artworks: [...e.artworks, {path: "wiki/education/other/images/x.png", sha256: hash("wrong owner")}]},
    {artwork: e.artworks[0].path, artworkSha256: e.artworks[0].sha256},
    {bytes: 1024 * 1024 + 1}, {bytes: 0}, {bytes: -1}, {bytes: null}, {sha256: "invalid"},
    {contentClass: "third-party-source-body"},
  ]) expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: [{...e, ...change}]})).toThrow();
  expect(() => validateSupplementalArtifacts({...f.manifest, artifacts: [e, e]})).toThrow();
});

test("v3 invocation TXT requires valid UTF8, literal wrapper and one valid argument object", () => {
  const invalid = [
    Buffer.from([0xc3, 0x28]), Buffer.from("plain original prose"),
    Buffer.from('other_tool\n{"prompt":"call"}'), Buffer.from('image_gen.imagegen\r\n{"prompt":"call"}'),
    Buffer.from('image_gen.imagegen\nnot JSON'), Buffer.from('image_gen.imagegen\n[]'),
    Buffer.from('image_gen.imagegen\nnull'), Buffer.from('image_gen.imagegen\n{}'),
    Buffer.from('image_gen.imagegen\n{"prompt":" "}'), Buffer.from('image_gen.imagegen\n{"prompt":1}'),
    Buffer.from('image_gen.imagegen\n{"prompt":"call"}\n{"prompt":"second"}'),
    Buffer.from('image_gen.imagegen\n{"prompt":"call"}\u0000'),
    Buffer.from("version https://git-lfs.github.com/spec/v1\noid sha256:000"),
  ];
  for (const bytes of invalid) {
    const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
    f.manifest.artifacts = [e]; f.files[e.path] = bytes; e.sha256 = hash(bytes); e.bytes = bytes.length;
    expect(f.select).toThrow();
  }
});

test("v3 TXT applies recursive privacy/redaction/base64 guards to decoded arguments", () => {
  const invalid = [
    {prompt: "call", nested: {sensitive: true}}, {prompt: "call", calls: [{tags: ["sensitive"]}]},
    {prompt: "call", nested: {"sensitive-include": ["case"]}}, {prompt: "call", nested: {private: true}},
    {prompt: "call", nested: {visibility: "restricted"}}, {prompt: "call", nested: {restricted: "yes"}},
    {prompt: "call", b64_json: "YWJj"}, {prompt: "call", nested: {imageBase64: "YWJj"}},
    {prompt: "data:image/png;base64,YWJj"}, {prompt: "A".repeat(1024)}, {prompt: "<redact>private</redact>"},
    {prompt: ":::redact\nprivate"},
    {prompt: "call", nested: Array.from({length: 34}).reduce(value => ({child: value}), {})},
  ];
  for (const args of invalid) {
    const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
    const bytes = Buffer.from("image_gen.imagegen\n" + JSON.stringify(args));
    f.manifest.artifacts = [e]; f.files[e.path] = bytes; e.sha256 = hash(bytes); e.bytes = bytes.length;
    expect(f.select).toThrow();
  }
  const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
  const bytes = Buffer.from('image_gen.imagegen\n{"prompt":"\\u003credact>private</redact>"}');
  f.manifest.artifacts = [e]; f.files[e.path] = bytes; e.sha256 = hash(bytes); e.bytes = bytes.length;
  expect(f.select).toThrow("Redacted");
});

test("v3 exact TXT rejects changed public owner, each active art, source bytes/size and missing paths", () => {
  for (const change of ["owner", "owner-private", "owner-redact", "active-owner", "file", "size", "missing-file", "missing-owner", "missing-art"] as const) {
    const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
    f.manifest.artifacts = [e];
    if (change === "owner") f.files[e.owner] = Buffer.from("# Changed owner");
    if (change === "owner-private" || change === "owner-redact") {
      f.files[e.owner] = Buffer.from(change === "owner-private" ? "---\nsensitive: false\ntags: [sensitive]\n---\nprivate" : "# Public\n<redact>private</redact>");
      e.ownerSha256 = hash(f.files[e.owner]); f.active[e.owner] = e.ownerSha256;
    }
    if (change === "active-owner") f.active[e.owner] = hash("changed active owner");
    if (change === "file") f.files[e.path] = Buffer.from('image_gen.imagegen\n{"prompt":"Changed"}');
    if (change === "size") e.bytes++;
    if (change.startsWith("missing")) {
      const missing = change === "missing-file" ? e.path : change === "missing-owner" ? e.owner : e.artworks[0].path;
      f.sourcePaths = f.sourcePaths.filter(p => p !== "obsidian/" + missing);
    }
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active, f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow();
  }
  for (let i = 0; i < 4; i++) {
    const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
    f.active[e.artworks[i].path] = hash("changed art " + i); expect(f.select).toThrow("changed");
    const inactive = {...f.active}; delete inactive[e.artworks[i].path];
    expect(supplementalArtworkArtifacts(f.manifest, inactive, [], () => {throw Error("Must not read retired artifacts");}, matter, f.manifest.reviewedSourceCommit)).toEqual([]);
  }
});

test("v3 TXT scratch apply repeats zero and all four independent edits remain conflicts", () => {
  const f = adcFixture(); f.manifest.artifacts = f.manifest.artifacts.filter(e => e.path.endsWith("actual-call.txt"));
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "adc-txt-root-")), stage = fs.mkdtempSync(path.join(os.tmpdir(), "adc-txt-stage-"));
  const write = (dir: string, p: string, b: Buffer) => {fs.mkdirSync(path.dirname(path.join(dir, p)), {recursive: true}); fs.writeFileSync(path.join(dir, p), b);};
  try {
    for (const p of Object.keys(f.active)) write(root, p, f.files[p]);
    for (const p of Object.keys(f.files)) write(stage, p, f.files[p]);
    const selected = f.select(), base = receipt(f.active), next = {...base, sourceCommit: "b".repeat(40), files: {...f.active, ...Object.fromEntries(selected.map(x => [x.entry.path, x.entry.sha256]))}};
    const actual = inventory(root), plan = reconcile(base, next.files, actual), first = selected[0];
    write(stage, first.entry.path, Buffer.from("changed after planning"));
    expect(() => applySnapshot(root, stage, base, next, plan, actual)).toThrow("Staged source changed");
    expect(fs.existsSync(path.join(root, first.entry.path))).toBe(false);
    write(stage, first.entry.path, first.bytes); applySnapshot(root, stage, base, next, plan, actual);
    const saved = validateReceipt(JSON.parse(fs.readFileSync(path.join(root, "content-sync.json"), "utf8")));
    const repeat = reconcile(saved, next.files, inventory(root));
    expect([repeat.additions.length, repeat.updates.length, repeat.conflicts.length]).toEqual([0, 0, 0]);
    for (const {entry, bytes} of selected) {
      expect(fs.readFileSync(path.join(root, entry.path)).equals(bytes)).toBe(true);
      expect(reconcile(saved, next.files, {...next.files, [entry.path]: hash("independent destination edit")}).conflicts.map(x => x.path)).toEqual([entry.path]);
      expect(reconcile(base, next.files, {...base.files, [entry.path]: hash("unreceipted collision")}).conflicts.map(x => x.path)).toEqual([entry.path]);
    }
  } finally {fs.rmSync(root, {recursive: true, force: true}); fs.rmSync(stage, {recursive: true, force: true});}
});

test("v3 TXT destination path symlinks are refused before custody writes", () => {
  const f = adcFixture(), root = fs.mkdtempSync(path.join(os.tmpdir(), "adc-txt-symlink-"));
  try {
    const e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!, file = path.join(root, e.path);
    fs.mkdirSync(path.dirname(file), {recursive: true}); fs.symlinkSync("unreviewed.txt", file);
    expect(() => inventory(root)).toThrow("Symlink");
  } finally {fs.rmSync(root, {recursive: true, force: true});}
});

// Genuine peer R1: raw JSON-escaped keys must be checked after decoding, too.
for (const position of ["root", "nested", "array-object"] as const) test("v3 decoded redaction keys rejected at " + position, () => {
  for (const key of ["\\u003credact>", "\\u003a\\u003a\\u003aredact", "prefix\\n\\u003a\\u003a\\u003aredact"]) {
    const pair = '"' + key + '":"hidden"';
    const extra = position === "root" ? pair : position === "nested" ? '"nested":{' + pair + '}' : '"calls":[{' + pair + '}]';
    const bytes = Buffer.from('image_gen.imagegen\n{"prompt":"safe fixture",' + extra + '}');
    const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
    f.manifest.artifacts = [e]; f.files[e.path] = bytes; e.sha256 = hash(bytes); e.bytes = bytes.length;
    expect(f.select).toThrow("Redacted artwork prompt");
  }
});

test("v3 decoded safe model-unknown and pending metadata remain unchanged", () => {
  const args = {prompt: "safe fixture", model: null, modelStatus: "unknown (not returned)",
    pending: true, review: {humanReview: "pending", sensitive: false, private: false, restricted: false, b64_json: null},
    calls: [{status: "pending", model: null}], "ordinary\\u003ckey": "retained"};
  const bytes = Buffer.from("image_gen.imagegen\n" + JSON.stringify(args));
  const f = adcFixture(), e = f.manifest.artifacts.find(e => e.path.endsWith("actual-call.txt"))!;
  f.manifest.artifacts = [e]; f.files[e.path] = bytes; e.sha256 = hash(bytes); e.bytes = bytes.length;
  const selected = f.select();
  expect(selected).toHaveLength(1); expect(selected[0].bytes).toEqual(bytes);
  expect(JSON.parse(selected[0].bytes.toString().slice("image_gen.imagegen\n".length))).toEqual(args);
});

// Fictional structural and privacy fixtures; no source export or clinical approval.
function countFixture(count: number, text?: string) {
  const f = jointFixture(text, false);
  const entries = Array.from({ length: count }, (_, i) => ({
    ...f.entry, path: f.entry.path.replace("joint-generation-receipt", "count-" + i),
  }));
  for (const entry of entries) f.files[entry.path] = f.files[f.entry.path];
  return { ...f, manifest: { ...f.manifest, artifacts: entries },
    sourcePaths: Object.keys(f.files).map(p => "obsidian/" + p) };
}

test("supplemental count preserves 200, admits 239 and 1000, and refuses 1001 even when inactive", () => {
  expect(MAX_SUPPLEMENTAL_ARTIFACTS).toBe(1000);
  for (const count of [200, 239, 1000]) {
    const f = countFixture(count);
    expect(validateSupplementalArtifacts(f.manifest)).toHaveLength(count);
  }
  const f = countFixture(1001);
  expect(() => validateSupplementalArtifacts(f.manifest)).toThrow("manifest");
  expect(() => supplementalArtworkArtifacts(f.manifest, {}, [], () => {
    throw Error("Invalid count must stop before source reads");
  }, matter, f.manifest.reviewedSourceCommit)).toThrow("manifest");
});

test("expanded count preserves the 8 MiB total, 1 MiB joint and 5 MiB legacy guards", () => {
  const f = countFixture(239);
  const full = f.manifest.artifacts.map((entry, i) => ({ ...entry,
    bytes: i < 8 ? 1024 * 1024 : 1,
  }));
  full[7].bytes -= full.length - 8;
  expect(validateSupplementalArtifacts({ ...f.manifest, artifacts: full })).toHaveLength(239);
  const over = full.map(entry => ({ ...entry })); over[7].bytes++;
  expect(() => validateSupplementalArtifacts({ ...f.manifest, artifacts: over })).toThrow("byte limit");
  expect(() => validateSupplementalArtifacts({ ...f.manifest,
    artifacts: [{ ...f.entry, bytes: 1024 * 1024 + 1 }],
  })).toThrow("joint");
  const legacy = fixture();
  expect(validateSupplementalArtifacts({ ...legacy.manifest,
    artifacts: [{ ...legacy.entry, bytes: 5 * 1024 * 1024 }],
  })).toHaveLength(1);
  expect(() => validateSupplementalArtifacts({ ...legacy.manifest,
    artifacts: [{ ...legacy.entry, bytes: 5 * 1024 * 1024 + 1 }],
  })).toThrow("entry");
});

test("239-entry admission still rejects recursive privacy and mismatched committed source", () => {
  const privateCustody = countFixture(239, JSON.stringify({ result: { sensitive: true } }));
  expect(() => supplementalArtworkArtifacts(privateCustody.manifest, privateCustody.active,
    privateCustody.sourcePaths, privateCustody.read, matter,
    privateCustody.manifest.reviewedSourceCommit)).toThrow();
  const f = countFixture(239);
  expect(() => supplementalArtworkArtifacts(f.manifest, f.active,
    f.sourcePaths, f.read, matter, "b".repeat(40))).toThrow("exact committed export source");
});


test("239-entry export preserves exact custody and refuses changed owner, artwork, bytes and missing paths", () => {
  const accepted = countFixture(239);
  const selected = supplementalArtworkArtifacts(accepted.manifest, accepted.active,
    accepted.sourcePaths, accepted.read, matter, accepted.manifest.reviewedSourceCommit);
  expect(selected).toHaveLength(239);
  expect(selected[238].bytes).toEqual(accepted.files[accepted.manifest.artifacts[238].path]);
  for (const change of ["owner", "artwork", "file", "size", "missing"] as const) {
    const f = countFixture(239), last = f.manifest.artifacts[238];
    if (change === "owner") f.files[owner] = Buffer.from(publicOwner.toString() + "Changed teaching\n");
    if (change === "artwork") f.active[artwork] = hash("different native");
    if (change === "file") f.files[last.path] = Buffer.from('{"prompt":"different custody"}');
    if (change === "size") last.bytes++;
    if (change === "missing") f.sourcePaths = f.sourcePaths.filter(p => p !== "obsidian/" + last.path);
    expect(() => supplementalArtworkArtifacts(f.manifest, f.active,
      f.sourcePaths, f.read, matter, f.manifest.reviewedSourceCommit)).toThrow();
  }
});
