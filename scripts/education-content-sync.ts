import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

export const PREFIX = "wiki/education/";
const SOURCE_REPOSITORY = "jasonLaster/diana-tnbc";
type Hashes = Record<string, string>;
type Retained = Record<string, { hash: string; sourceCommit: string }>;
export type Receipt = {
  version?: 1; sourceRepository: string; sourceCommit: string; sourcePrefix: string;
  rendererCommit?: string; files: Hashes; retainedFiles?: Retained;
};
export type Plan = {
  additions: string[]; updates: string[]; unchanged: string[]; removals: string[];
  retainedFiles: Retained; conflicts: Array<{ path: string; reason: string }>;
};
export const hash = (bytes: Buffer | string) => createHash("sha256").update(bytes).digest("hex");
function validPath(p: string) {
  return p.startsWith(PREFIX) && !p.includes("\\") && !p.includes("\0") &&
    path.posix.normalize(p) === p && !p.endsWith("/") && p.split("/").every(x => x !== "." && x !== ".." && x !== "");
}
export function validateReceipt(value: unknown): Receipt {
  const r = value as Receipt;
  if (!r || r.sourceRepository !== SOURCE_REPOSITORY || !/^[a-f0-9]{40}$/.test(r.sourceCommit) ||
    r.sourcePrefix !== "obsidian/" || !r.files || Array.isArray(r.files) || typeof r.files !== "object" ||
    !Object.keys(r.files).length || (r.version !== undefined && r.version !== 1)) throw Error("Invalid content receipt");
  for (const [p, h] of Object.entries(r.files)) {
    if (!validPath(p) || !/^[a-f0-9]{64}$/.test(h)) throw Error("Invalid receipted path or hash: " + p);
  }
  for (const [p, entry] of Object.entries(r.retainedFiles || {})) {
    if (!validPath(p) || p.endsWith(".md") || r.files[p] || !/^[a-f0-9]{64}$/.test(entry.hash) ||
      !/^[a-f0-9]{40}$/.test(entry.sourceCommit)) throw Error("Invalid retained asset receipt: " + p);
  }
  return r;
}
function baselineHashes(r: Receipt): Hashes {
  return { ...Object.fromEntries(Object.entries(r.retainedFiles || {}).map(([p, v]) => [p, v.hash])), ...r.files };
}
export function reconcile(base: Receipt, expected: Hashes, actual: Hashes, remove: string[] = []): Plan {
  validateReceipt(base);
  const old = baselineHashes(base);
  const allowed = new Set(remove);
  const plan: Plan = { additions: [], updates: [], unchanged: [], removals: [], retainedFiles: {}, conflicts: [] };
  for (const p of allowed) {
    if (!validPath(p) || !old[p] || expected[p]) plan.conflicts.push({ path: p, reason: "Removal must name a previously imported path absent from the new export" });
  }
  for (const p of [...new Set([...Object.keys(old), ...Object.keys(expected), ...Object.keys(actual)])].sort()) {
    if (!validPath(p)) { plan.conflicts.push({ path: p, reason: "Path escapes the education corpus" }); continue; }
    const before = old[p], source = expected[p], target = actual[p];
    if (source) {
      if (target === source) { plan.unchanged.push(p); continue; }
      if (!before && !target) { plan.additions.push(p); continue; }
      if (before && target === before) { plan.updates.push(p); continue; }
      plan.conflicts.push({ path: p, reason: target ? "Destination edit differs from both the imported baseline and source" : "A previously imported destination file was deleted locally" });
    } else if (before) {
      if (target !== before) { plan.conflicts.push({ path: p, reason: "Retired imported file has a destination edit or local deletion" }); continue; }
      if (allowed.has(p)) { plan.removals.push(p); continue; }
      if (p.endsWith(".md")) { plan.conflicts.push({ path: p, reason: "Source page disappeared; review the move/deletion and explicitly name it with --remove" }); continue; }
      plan.retainedFiles[p] = base.retainedFiles?.[p] || { hash: before, sourceCommit: base.sourceCommit };
    } else {
      plan.conflicts.push({ path: p, reason: "Unreceipted destination-only file; reconcile it with Diana before synchronization" });
    }
  }
  return plan;
}
function assertSafeFile(root: string, relative: string) {
  if (!validPath(relative)) throw Error("Unsafe content path: " + relative);
  let current = root;
  for (const component of relative.split("/")) {
    current = path.join(current, component);
    let stat: fs.Stats;
    try { stat = fs.lstatSync(current); }
    catch (error) { if ((error as NodeJS.ErrnoException).code === "ENOENT") break; throw error; }
    if (stat.isSymbolicLink()) throw Error("Symlink in content path: " + relative);
  }
}
export function inventory(root: string): Hashes {
  assertSafeFile(root, PREFIX + "__boundary__");
  const found: Hashes = {};
  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    if (fs.lstatSync(dir).isSymbolicLink()) throw Error("Symlink in the education corpus");
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
      const p = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) throw Error("Symlink in the education corpus");
      if (entry.isDirectory()) walk(p);
      else if (entry.isFile()) {
        const relative = path.relative(root, p).split(path.sep).join("/");
        if (!validPath(relative)) throw Error("Unsafe content path");
        found[relative] = hash(fs.readFileSync(p));
      } else throw Error("Unsupported content filesystem entry");
    }
  }
  walk(path.join(root, PREFIX));
  return found;
}
function git(repo: string, ...args: string[]) {
  return execFileSync("git", ["-C", repo, ...args], { maxBuffer: 64 * 1024 * 1024 });
}
export function sourceTreeFiles(repo: string, commit: string): string[] {
  const entries = git(repo, "ls-tree", "-r", "-z", commit, "--", "obsidian/wiki/education").toString().split("\0").filter(Boolean);
  return entries.map(entry => {
    const tab = entry.indexOf("\t"), [mode, kind] = entry.slice(0, tab).split(" "), filename = entry.slice(tab + 1);
    if (tab < 0 || kind !== "blob" || !["100644", "100755"].includes(mode)) {
      throw Error("Unsupported committed source mode " + mode + ": " + filename);
    }
    if (!filename.startsWith("obsidian/") || !validPath(filename.slice("obsidian/".length))) throw Error("Unsafe committed source path: " + filename);
    return filename;
  });
}
export function safeReportPath(roots: string[], report: string): string {
  if (path.extname(report) !== ".json") throw Error("Report must be a fresh JSON file outside the repositories");
  const resolved = path.join(fs.realpathSync(path.dirname(path.resolve(report))), path.basename(report));
  for (const root of roots) {
    const relative = path.relative(fs.realpathSync(root), resolved);
    if (!relative || (!relative.startsWith(".." + path.sep) && relative !== ".." && !path.isAbsolute(relative))) {
      throw Error("Report must be outside source, destination, renderer and Git directories");
    }
  }
  try { fs.lstatSync(resolved); }
  catch (error) { if ((error as NodeJS.ErrnoException).code === "ENOENT") return resolved; throw error; }
  throw Error("Report path already exists; choose a fresh JSON filename");
}
function metadataParser(root: string) {
  const require = createRequire(path.join(root, ".renderer/apps/oncoguide/package.json"));
  try { return require("gray-matter") as (raw: string) => { data: Record<string, unknown> }; }
  catch { throw Error("Renderer dependencies are missing; run bash scripts/prepare-renderer.sh"); }
}
function assertPublicMetadata(data: Record<string, unknown>, relative: string) {
  const restricted = /^(true|yes|on|1)$/i.test(String(data.sensitive || ""));
  const tags = Array.isArray(data.tags) ? data.tags : typeof data.tags === "string" ? data.tags.split(/[\s,]+/) : [];
  if (restricted || tags.some(tag => String(tag).toLowerCase() === "sensitive") ||
    Object.entries(data).some(([key, value]) => /^(sensitive[-_]include)$/i.test(key) && Boolean(value) && (!Array.isArray(value) || value.length))) {
    throw Error("Restricted page cannot enter Oncoguide: " + relative);
  }
}
export function assertPublic(raw: string, relative: string, parse: ReturnType<typeof metadataParser>) {
  // Classify front matter before inspecting any body or passing it to the renderer.
  const match = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assertPublicMetadata(match ? parse(match[0]).data : {}, relative);
  if (/<redact\b|^\s*:::redact\b/im.test(raw)) throw Error("Redacted content cannot enter Oncoguide: " + relative);
}
function readReceipt(root: string): Receipt {
  const filename = fs.existsSync(path.join(root, "content-sync.json")) ? "content-sync.json" : "provenance.json";
  if (fs.lstatSync(path.join(root, filename)).isSymbolicLink()) throw Error("Content receipt cannot be a symlink");
  return validateReceipt(JSON.parse(fs.readFileSync(path.join(root, filename), "utf8")));
}
function verifyLocal(root: string) {
  const receipt = readReceipt(root);
  const actual = inventory(root);
  const expected = baselineHashes(receipt);
  const differences = [...new Set([...Object.keys(expected), ...Object.keys(actual)])].filter(p => actual[p] !== expected[p]);
  if (differences.length) throw Error("Content receipt mismatch: " + differences.join(", "));
  const parse = metadataParser(root);
  for (const p of Object.keys(receipt.files).filter(p => p.endsWith(".md"))) assertPublic(fs.readFileSync(path.join(root,p),"utf8"), p, parse);
  for (const p of Object.keys(expected).filter(p => !p.endsWith(".md"))) {
    const bytes = fs.readFileSync(path.join(root,p));
    if (bytes.subarray(0,80).toString().startsWith("version https://git-lfs.github.com/spec/v1")) throw Error("Unhydrated LFS asset: " + p);
  }
  return { receipt, actual };
}
export function associatedArtworkPrompts(activePaths: string[], sourcePaths: string[]): string[] {
  const available = new Set(sourcePaths);
  const prompts = new Set<string>();
  for (const p of activePaths.filter(p => /\.(png|jpe?g|webp|avif|svg)$/i.test(p))) {
    if (!validPath(p)) throw Error("Unsafe artwork path: " + p);
    const filename = path.posix.basename(p, path.posix.extname(p));
    const base = filename.replace(/-(light|dark)$/, "");
    const names = [base, filename];
    if (base !== filename) names.push(filename + "-call");
    for (const name of names) {
      const candidate = path.posix.join(path.posix.dirname(p), "prompts", name + ".txt");
      if (available.has("obsidian/" + candidate)) prompts.add(candidate);
    }
  }
  return [...prompts].sort();
}
export function assertArtworkPrompt(bytes: Buffer, p: string) {
  if (bytes.subarray(0, 80).toString().startsWith("version https://git-lfs.github.com/spec/v1")) throw Error("Unhydrated LFS artwork prompt: " + p);
  if (/<redact\b|^\s*:::redact\b/im.test(bytes.toString())) throw Error("Redacted artwork prompt: " + p);
}
type ArtworkBinding = { path: string; sha256: string };
type SupplementalArtifact = {
  path: string; sha256: string; bytes: number; owner: string; ownerSha256: string;
  contentClass: "source-owned-public-custody";
} & ({ artwork: string; artworkSha256: string; artworks?: never } |
     { artworks: ArtworkBinding[]; artwork?: never; artworkSha256?: never });
function artworkBindings(entry: SupplementalArtifact): ArtworkBinding[] {
  return entry.artworks ?? [{ path: entry.artwork, sha256: entry.artworkSha256 }];
}
export function validateSupplementalArtifacts(value: unknown): SupplementalArtifact[] {
  const manifest = value as { version?: number; sourceRepository?: string; reviewedSourceCommit?: string; artifacts?: SupplementalArtifact[] };
  if (!manifest || ![1, 2, 3].includes(manifest.version || 0) || manifest.sourceRepository !== SOURCE_REPOSITORY ||
    !/^[a-f0-9]{40}$/.test(manifest.reviewedSourceCommit || "") || !Array.isArray(manifest.artifacts) || manifest.artifacts.length > 200) {
    throw Error("Invalid supplemental artifact manifest");
  }
  const seen = new Set<string>();
  let totalBytes = 0;
  for (const entry of manifest.artifacts) {
    if (!entry || typeof entry.path !== "string" || typeof entry.owner !== "string" ||
      !validPath(entry.path) || !validPath(entry.owner) || !entry.owner.endsWith(".md") || !/\.(txt|json|zip)$/.test(entry.path) ||
      entry.contentClass !== "source-owned-public-custody" || ![entry.sha256, entry.ownerSha256].every(h => typeof h === "string" && /^[a-f0-9]{64}$/.test(h)) ||
      !Number.isSafeInteger(entry.bytes) || entry.bytes < 1 || entry.bytes > 5 * 1024 * 1024 || seen.has(entry.path)) {
      throw Error("Invalid supplemental artifact entry");
    }
    const joint = entry.artworks !== undefined;
    if (joint && (![2, 3].includes(manifest.version || 0) || !Array.isArray(entry.artworks) || entry.artworks.length < 2 || entry.artworks.length > 8 ||
      entry.artwork !== undefined || entry.artworkSha256 !== undefined || !(/\.(json|zip)$/.test(entry.path) || (manifest.version === 3 && entry.path.endsWith(".txt"))) || entry.bytes > 1024 * 1024)) {
      throw Error("Invalid joint supplemental artwork binding");
    }
    const bindings = artworkBindings(entry);
    const imageDirectory = path.posix.join(path.posix.dirname(entry.owner), "images");
    if (!bindings.every(b => b && typeof b.path === "string" && validPath(b.path) && /\.(png|jpe?g|webp|avif|svg)$/i.test(b.path) &&
      typeof b.sha256 === "string" && /^[a-f0-9]{64}$/.test(b.sha256) && path.posix.dirname(b.path) === imageDirectory) ||
      new Set(bindings.map(b => b.path)).size !== bindings.length) throw Error("Invalid supplemental artwork identity");
    const relative = path.posix.relative(imageDirectory + "/prompts", entry.path);
    const parts = relative.split("/");
    const stem = path.posix.basename(bindings[0].path, path.posix.extname(bindings[0].path)).replace(/-(light|dark)$/, "");
    const filename = path.posix.basename(entry.path);
    const legacyLocation = parts.length === 1 && (filename.startsWith(stem + ".") || filename.startsWith(stem + "-"));
    const jointLocation = parts.length >= 1 && parts.length <= 2 && parts.every(part => /^[a-z0-9][a-z0-9._-]{0,127}$/.test(part)) &&
      (parts.length === 1 || (entry.path.endsWith(".json") && /^[a-z0-9][a-z0-9-]{0,63}$/.test(parts[0])));
    if (joint ? !jointLocation : !legacyLocation) throw Error("Supplemental artifact does not belong to its owner and artwork");
    seen.add(entry.path); totalBytes += entry.bytes;
  }
  if (totalBytes > 8 * 1024 * 1024) throw Error("Supplemental artifact manifest exceeds byte limit");
  return manifest.artifacts;
}
function assertJointCustodyMetadata(value: unknown, relative: string, depth = 0) {
  if (depth > 32) throw Error("Custody JSON nesting exceeds limit: " + relative);
  if (typeof value === "string") {
    if (/data:[^\s,]*;base64,|^[A-Za-z0-9+/]{1024,}={0,2}$/i.test(value)) throw Error("Raw base64 cannot enter custody JSON: " + relative);
  } else if (value && typeof value === "object") {
    if (Array.isArray(value)) for (const item of value) assertJointCustodyMetadata(item, relative, depth + 1);
    else {
      assertPublicMetadata(value as Record<string, unknown>, relative);
      const metadata = value as Record<string, unknown>;
      if ([metadata.private, metadata.restricted].some(flag => /^(true|yes|on|1)$/i.test(String(flag))) ||
        /^(private|restricted|sensitive)$/i.test(String(metadata.visibility || ""))) throw Error("Restricted custody JSON: " + relative);
      for (const [key, item] of Object.entries(value)) {
        if (/base64|(?:^|[_-])b64(?:$|[_-])/i.test(key) && item !== null && item !== "" && item !== false) throw Error("Raw base64 cannot enter custody JSON: " + relative);
        assertJointCustodyMetadata(item, relative, depth + 1);
      }
    }
  }
}
// Version 3 joint TXT preserves the original invocation wrapper, never reconstructs it.
function assertJointInvocationText(bytes: Buffer, relative: string) {
  const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  if (text.includes("\0") || !text.startsWith("image_gen.imagegen\n")) throw Error("Invalid custody invocation TXT: " + relative);
  const metadata = JSON.parse(text.slice("image_gen.imagegen\n".length));
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata) ||
    typeof metadata.prompt !== "string" || !metadata.prompt.trim()) throw Error("Invalid custody invocation arguments: " + relative);
  assertJointCustodyMetadata(metadata, relative);
  function assertDecodedText(value: unknown) {
    if (typeof value === "string") assertArtworkPrompt(Buffer.from(value), relative);
    else if (value && typeof value === "object") for (const [key, item] of Object.entries(value)) {
      assertArtworkPrompt(Buffer.from(key), relative);
      assertDecodedText(item);
    }
  }
  assertDecodedText(metadata);
}
export function supplementalArtworkArtifacts(
  manifest: unknown, active: Hashes, sourcePaths: string[], readSource: (p: string) => Buffer,
  parse: ReturnType<typeof metadataParser>, committedSource?: string,
) {
  const entries = validateSupplementalArtifacts(manifest);
  const reviewed = manifest as { version: number; reviewedSourceCommit: string };
  if (reviewed.version >= 2 && (!committedSource || committedSource !== reviewed.reviewedSourceCommit)) {
    throw Error("Joint custody manifest must bind the exact committed export source");
  }
  const available = new Set(sourcePaths);
  const selected: Array<{ entry: SupplementalArtifact; bytes: Buffer }> = [];
  for (const entry of entries) {
    // Retired artwork's already imported custody is retained by reconcile, not re-exported.
    const bindings = artworkBindings(entry);
    if (bindings.some(b => !active[b.path])) continue;
    if (!active[entry.owner] || !available.has("obsidian/" + entry.owner) || bindings.some(b => !available.has("obsidian/" + b.path)) || !available.has("obsidian/" + entry.path)) {
      throw Error("Supplemental artifact owner or committed source file is missing: " + entry.path);
    }
    const owner = readSource(entry.owner);
    assertPublic(owner.toString(), entry.owner, parse);
    if (hash(owner) !== entry.ownerSha256 || active[entry.owner] !== entry.ownerSha256 || bindings.some(b => active[b.path] !== b.sha256)) {
      throw Error("Supplemental artifact owner or active artwork changed: " + entry.path);
    }
    const bytes = readSource(entry.path);
    if (hash(bytes) !== entry.sha256 || bytes.length !== entry.bytes) throw Error("Supplemental artifact bytes changed: " + entry.path);
    if (entry.path.endsWith(".zip")) {
      if (!bytes.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))) throw Error("Invalid reviewed custody ZIP: " + entry.path);
    } else {
      assertPublic(bytes.toString(), entry.path, parse);
      assertArtworkPrompt(bytes, entry.path);
      if (entry.path.endsWith(".json")) {
        const metadata = JSON.parse(bytes.toString());
        if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) throw Error("Invalid custody JSON: " + entry.path);
        assertPublicMetadata(metadata, entry.path);
        if (entry.artworks) assertJointCustodyMetadata(metadata, entry.path);
      } else if (entry.artworks && entry.path.endsWith(".txt")) {
        assertJointInvocationText(bytes, entry.path);
      }
    }
    selected.push({ entry, bytes });
  }
  return selected;
}
function exportSnapshot(root: string, source: string, ref: string, staging: string) {
  const repo = git(source, "rev-parse", "--show-toplevel").toString().trim();
  if (fs.realpathSync(repo) === fs.realpathSync(root)) throw Error("Source and destination must be different repositories");
  const remote = git(repo, "remote", "get-url", "origin").toString().trim();
  if (!/(?:github\.com[:/])jasonLaster\/diana-tnbc(?:\.git)?$/.test(remote)) throw Error("Expected the Diana source repository");
  const commit = git(repo, "rev-parse", "--verify", ref + "^{commit}").toString().trim();
  const renderer = JSON.parse(fs.readFileSync(path.join(root, "renderer.lock.json"), "utf8")).commit;
  if (git(path.join(root, ".renderer"), "rev-parse", "HEAD").toString().trim() !== renderer) throw Error("Renderer checkout differs from renderer.lock.json; run scripts/prepare-renderer.sh");
  const sourcePaths = sourceTreeFiles(repo, commit);
  const parse = metadataParser(root);
  for (const p of sourcePaths.filter(p => p.endsWith(".md"))) {
    assertPublic(git(repo, "show", commit + ":" + p).toString(), p.slice("obsidian/".length), parse);
  }
  execFileSync("bun", [path.join(root, ".renderer/apps/oncoguide/scripts/copy-content.ts"), repo, staging, commit], { stdio: ["ignore", "pipe", "pipe"], maxBuffer: 16 * 1024 * 1024 });
  const receipt = validateReceipt(JSON.parse(fs.readFileSync(path.join(staging,"provenance.json"),"utf8")));
  // Preserve saved prompts and exact theme invocations for the active artwork.
  const prompts = associatedArtworkPrompts(Object.keys(receipt.files), sourcePaths);
  for (const p of [...prompts].sort()) {
    const bytes = git(repo, "show", commit + ":obsidian/" + p);
    assertArtworkPrompt(bytes, p);
    const target = path.join(staging,p);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);receipt.files[p]=hash(bytes);
  }
  const manifestPath = path.join(root, "scripts/education-supplemental-artifacts.json");
  if (fs.lstatSync(manifestPath).isSymbolicLink()) throw Error("Supplemental artifact manifest cannot be a symlink");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const supplemental = supplementalArtworkArtifacts(manifest, receipt.files, sourcePaths,
    p => git(repo, "show", commit + ":obsidian/" + p), parse, commit);
  for (const { entry, bytes } of supplemental) {
    const target = path.join(staging, entry.path); fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, bytes); receipt.files[entry.path] = entry.sha256;
  }
  return { receipt, renderer, prompts: Object.keys(receipt.files).filter(p => p.endsWith(".txt")).length, supplementalArtifacts: supplemental.length };
}
function atomicWrite(target: string, bytes: Buffer | string) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const tmp = target + ".sync-" + process.pid;
  try { fs.writeFileSync(tmp,bytes,{flag:"wx"});fs.renameSync(tmp,target); }
  finally { if(fs.existsSync(tmp))fs.unlinkSync(tmp); }
}
export function applySnapshot(root: string, staging: string, base: Receipt, next: Receipt, plan: Plan, plannedActual: Hashes) {
  if (plan.conflicts.length) throw Error("Resolve all content conflicts before apply");
  if (JSON.stringify(inventory(root)) !== JSON.stringify(plannedActual)) throw Error("Destination changed after planning");
  for (const p of [...plan.additions,...plan.updates,...plan.removals]) assertSafeFile(root,p);
  for (const p of Object.keys(next.files)) {
    if (hash(fs.readFileSync(path.join(staging,p))) !== next.files[p]) throw Error("Staged source changed after planning: " + p);
  }
  for (const p of [...plan.additions,...plan.updates]) atomicWrite(path.join(root,p),fs.readFileSync(path.join(staging,p)));
  for (const p of plan.removals) fs.unlinkSync(path.join(root,p));
  const receipt: Receipt = { version:1,sourceRepository:base.sourceRepository,sourceCommit:next.sourceCommit,sourcePrefix:base.sourcePrefix,
    rendererCommit:next.rendererCommit, files:Object.fromEntries(Object.entries(next.files).sort(([a],[b])=>a.localeCompare(b))),
    retainedFiles:plan.retainedFiles };
  atomicWrite(path.join(root,"content-sync.json"),JSON.stringify(receipt,null,2)+"\n");
}
async function main() {
  const args=process.argv.slice(2),action=args.shift() || "verify";
  if (!["verify","check","plan","apply"].includes(action)) throw Error("Usage: bun scripts/education-content-sync.ts verify | plan|check|apply --source <diana-repo> --ref <commit> [--remove <exact-path>] [--report <json>]");
  let source="",ref="",report="";const remove:string[]=[];
  while(args.length){const flag=args.shift(),value=args.shift();if(!value)throw Error("Missing option value");
    if(flag==="--source")source=value;else if(flag==="--ref")ref=value;else if(flag==="--report")report=value;else if(flag==="--remove")remove.push(value);else throw Error("Unknown option: "+flag);}
  const root=path.resolve(import.meta.dir,"..");
  if(action==="verify") {
    if(source||ref||remove.length||report)throw Error("Use check --source --ref to compare a source revision");
    const {receipt}=verifyLocal(root);
    console.log(JSON.stringify({verifiedFiles:Object.keys(baselineHashes(receipt)).length,activePages:Object.keys(receipt.files).filter(p=>p.endsWith(".md")).length,retainedAssets:Object.keys(receipt.retainedFiles||{}).length,sourceCommit:receipt.sourceCommit}));return;
  }
  if(!source||!ref)throw Error("An explicit --source and --ref are required");
  if(action==="check"&&remove.length)throw Error("Removals are only accepted by plan/apply");
  if(report) {
    const sourceRoot = git(path.resolve(source), "rev-parse", "--show-toplevel").toString().trim();
    const rendererRoot = path.join(root, ".renderer");
    const roots = [root, sourceRoot, rendererRoot];
    for (const repo of [...roots]) roots.push(git(repo, "rev-parse", "--path-format=absolute", "--git-common-dir").toString().trim());
    report = safeReportPath(roots, report);
  }
  const temporary=fs.mkdtempSync(path.join(os.tmpdir(),"oncoguide-content-sync-")), staging=path.join(temporary,"export");
  try {
    const base=readReceipt(root), actual=inventory(root);
    const exported=exportSnapshot(root,path.resolve(source),ref,staging);
    const plan=reconcile(base,exported.receipt.files,actual,remove);
    const summary={sourceCommit:exported.receipt.sourceCommit,rendererCommit:exported.renderer,pages:Object.keys(exported.receipt.files).filter(p=>p.endsWith(".md")).length,
      assets:Object.keys(exported.receipt.files).filter(p=>!p.endsWith(".md")&&!p.endsWith(".txt")).length,prompts:exported.prompts,
      supplementalArtifacts:exported.supplementalArtifacts,
      additions:plan.additions.length,updates:plan.updates.length,unchanged:plan.unchanged.length,retainedAssets:Object.keys(plan.retainedFiles).length,removals:plan.removals.length,conflicts:plan.conflicts};
    if(report)fs.writeFileSync(report,JSON.stringify({summary,plan},null,2)+"\n",{flag:"wx"});
    console.log(JSON.stringify(summary));
    if(plan.conflicts.length)throw Error("Content conflicts prevent synchronization; source and destination were left unchanged");
    if(action==="check"){
      if(plan.additions.length||plan.updates.length||!fs.existsSync(path.join(root,"content-sync.json")))throw Error("Education content or its source receipt needs synchronization");
    } else if(action==="apply") {
      if(fs.existsSync(path.join(root,"content-sync.json"))&&fs.lstatSync(path.join(root,"content-sync.json")).isSymbolicLink())throw Error("Content receipt cannot be a symlink");
      applySnapshot(root,staging,base,{...exported.receipt,rendererCommit:exported.renderer},plan,actual);
      verifyLocal(root);console.log("Applied and verified committed public education bytes; initial provenance and retired artwork preserved.");
    }
  } finally {fs.rmSync(temporary,{recursive:true,force:true});}
}
if(import.meta.main)main().catch(error=>{console.error(error instanceof Error?error.message:String(error));process.exitCode=1});
