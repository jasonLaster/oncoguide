import { expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "../.renderer/node_modules/gray-matter/index.js";
import { reconcile, validateReceipt, inventory, applySnapshot, assertPublic, hash, sourceTreeFiles, safeReportPath, type Receipt } from "./education-content-sync";

const a="wiki/education/concepts/a.md", b="wiki/education/concepts/b.md", image="wiki/education/images/a-light.png";
const old="baseline", next="upstream revision", local="local revision";
const receipt=(files:Record<string,string>):Receipt=>({sourceRepository:"jasonLaster/diana-tnbc",sourceCommit:"a".repeat(40),sourcePrefix:"obsidian/",files});
const hashes=(bytes:Record<string,string>)=>Object.fromEntries(Object.entries(bytes).map(([p,v])=>[p,hash(v)]));
test("committed source trees reject page, asset and prompt symlinks",()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"content-source-tree-"));
 const git=(...args:string[])=>execFileSync("git",["-C",root,...args],{stdio:"pipe"}).toString().trim();
 try {
  git("init");git("config","user.email","fixture@example.invalid");git("config","user.name","Fixture");
  fs.mkdirSync(path.join(root,"obsidian/wiki/education"),{recursive:true});
  fs.writeFileSync(path.join(root,"obsidian/wiki/education/index.md"),"# Public\n");
  git("add",".");git("commit","-m","Regular source");
  expect(sourceTreeFiles(root,"HEAD")).toEqual(["obsidian/wiki/education/index.md"]);
  for(const suffix of ["md","svg","txt"]){
   const filename="obsidian/wiki/education/link."+suffix;
   fs.symlinkSync("index.md",path.join(root,filename));git("add",filename);git("commit","-m","Symlink fixture");
   expect(()=>sourceTreeFiles(root,"HEAD")).toThrow("source mode 120000");
   git("rm",filename);git("commit","-m","Remove fixture");
  }
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test("report output cannot overwrite content or reach a protected directory through a symlink",()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"content-report-"));
 try {
  const source=path.join(root,"source"),destination=path.join(root,"destination"),outside=path.join(root,"reports");
  for(const dir of [source,destination,outside])fs.mkdirSync(dir);
  const lesson=path.join(destination,"lesson.md"),existing=path.join(outside,"existing.json");
  fs.writeFileSync(lesson,"# Preserve teaching\n");fs.writeFileSync(existing,"original report");
  fs.symlinkSync(destination,path.join(outside,"alias"));fs.symlinkSync(lesson,path.join(outside,"lesson.json"));
  for(const filename of [lesson,path.join(source,"report.json"),path.join(destination,"report.json"),path.join(outside,"alias/report.json"),existing,path.join(outside,"lesson.json")]) {
   expect(()=>safeReportPath([source,destination],filename)).toThrow();
  }
  expect(safeReportPath([source,destination],path.join(outside,"fresh.json"))).toBe(path.join(fs.realpathSync(outside),"fresh.json"));
  expect(fs.readFileSync(lesson,"utf8")).toBe("# Preserve teaching\n");expect(fs.readFileSync(existing,"utf8")).toBe("original report");
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test("updates unchanged destination files and adds new source pages",()=>{
 const plan=reconcile(receipt(hashes({[a]:old})),hashes({[a]:next,[b]:"new"}),hashes({[a]:old}));
 expect(plan.conflicts).toEqual([]);expect(plan.updates).toEqual([a]);expect(plan.additions).toEqual([b]);
});
test("destination-only and simultaneous edits both remain conflicts",()=>{
 for(const source of [old,next]){
  const plan=reconcile(receipt(hashes({[a]:old})),hashes({[a]:source}),hashes({[a]:local}));
  expect(plan.conflicts.map(c=>c.path)).toEqual([a]);expect(plan.updates).toEqual([]);
 }
});
test("convergent edits are accepted and a new-file collision is refused",()=>{
 expect(reconcile(receipt(hashes({[a]:old})),hashes({[a]:next}),hashes({[a]:next})).conflicts).toEqual([]);
 const plan=reconcile(receipt(hashes({[a]:old})),hashes({[a]:old,[b]:next}),hashes({[a]:old,[b]:local}));
 expect(plan.conflicts.map(c=>c.path)).toEqual([b]);
});
test("a locally deleted imported page is not silently recreated",()=>{
 const plan=reconcile(receipt(hashes({[a]:old})),hashes({[a]:next}),{});
 expect(plan.conflicts.map(c=>c.path)).toEqual([a]);expect(plan.additions).toEqual([]);
});
test("unreferenced artwork is retained with its original revision",()=>{
 const base=receipt(hashes({[a]:old,[image]:"image bytes"}));
 const plan=reconcile(base,hashes({[a]:next}),hashes({[a]:old,[image]:"image bytes"}));
 expect(plan.retainedFiles[image]).toEqual({hash:hash("image bytes"),sourceCommit:base.sourceCommit});expect(plan.removals).toEqual([]);
});
test("page removal requires an exact reviewed path and unchanged destination",()=>{
 const base=receipt(hashes({[a]:old,[b]:old}));
 expect(reconcile(base,hashes({[b]:old}),hashes({[a]:old,[b]:old})).conflicts.map(c=>c.path)).toEqual([a]);
 expect(reconcile(base,hashes({[b]:old}),hashes({[a]:old,[b]:old}),[a]).removals).toEqual([a]);
 expect(reconcile(base,hashes({[b]:old}),hashes({[a]:local,[b]:old}),[a]).conflicts.map(c=>c.path)).toEqual([a]);
 expect(reconcile(base,hashes({[a]:old,[b]:old}),hashes({[a]:old,[b]:old}),[a]).conflicts.length).toBeGreaterThan(0);
});
test("private front matter and both redaction formats are rejected",()=>{
 for(const raw of ["---\nsensitive: true\n---\n# Private","---\ntags:\n  - sensitive\n---\n# Private","---\nsensitive-include: [private]\n---\n# Private","# Public\n<redact>Private</redact>","# Public\n:::redact[Private]\nHidden\n:::"]){
  expect(()=>assertPublic(raw,a,matter)).toThrow();
 }
 expect(()=>assertPublic("---\nsensitive: false\ntags: [education]\n---\n# Public",a,matter)).not.toThrow();
});
test("receipt hashes cannot include paths outside education",()=>{
 expect(()=>validateReceipt(receipt({"wiki/education/../../private.md":hash("x")}))).toThrow();
 expect(()=>validateReceipt(receipt({[a]:"wrong-hash"}))).toThrow();
});
test("filesystem inventory rejects symlinked content boundaries",()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"content-inventory-")),outside=fs.mkdtempSync(path.join(os.tmpdir(),"content-outside-"));
 try {fs.mkdirSync(path.join(outside,"education"));fs.symlinkSync(outside,path.join(root,"wiki"));expect(()=>inventory(root)).toThrow("Symlink");}
 finally {fs.rmSync(root,{recursive:true,force:true});fs.rmSync(outside,{recursive:true,force:true});}
});
test("apply verifies every staged hash before writing and records a repeatable receipt",()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"content-apply-")),stage=fs.mkdtempSync(path.join(os.tmpdir(),"content-stage-"));
 function write(dir:string,p:string,bytes:string){fs.mkdirSync(path.dirname(path.join(dir,p)),{recursive:true});fs.writeFileSync(path.join(dir,p),bytes);}
 try {
  write(root,a,old);write(stage,a,next);write(stage,b,"new");
  const base=receipt(hashes({[a]:old})),future={...receipt(hashes({[a]:next,[b]:"new"})),sourceCommit:"b".repeat(40)};
  const actual=inventory(root),plan=reconcile(base,future.files,actual);
  write(stage,b,"changed while reviewing");expect(()=>applySnapshot(root,stage,base,future,plan,actual)).toThrow("Staged source changed");
  expect(fs.readFileSync(path.join(root,a),"utf8")).toBe(old);expect(fs.existsSync(path.join(root,b))).toBe(false);
  write(stage,b,"new");applySnapshot(root,stage,base,future,plan,actual);
  const saved=validateReceipt(JSON.parse(fs.readFileSync(path.join(root,"content-sync.json"),"utf8")));
  const noop=reconcile(saved,future.files,inventory(root));expect(noop.additions).toEqual([]);expect(noop.updates).toEqual([]);expect(noop.conflicts).toEqual([]);
 }finally{fs.rmSync(root,{recursive:true,force:true});fs.rmSync(stage,{recursive:true,force:true});}
});
test("a destination change after planning prevents any apply write",()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"content-race-")),stage=fs.mkdtempSync(path.join(os.tmpdir(),"content-stage-"));
 try {
  for(const dir of [root,stage])fs.mkdirSync(path.join(dir,"wiki/education/concepts"),{recursive:true});
  fs.writeFileSync(path.join(root,a),old);fs.writeFileSync(path.join(stage,a),next);
  const base=receipt(hashes({[a]:old})),future=receipt(hashes({[a]:next})),actual=inventory(root),plan=reconcile(base,future.files,actual);
  fs.writeFileSync(path.join(root,a),local);expect(()=>applySnapshot(root,stage,base,future,plan,actual)).toThrow("Destination changed");
  expect(fs.readFileSync(path.join(root,a),"utf8")).toBe(local);expect(fs.existsSync(path.join(root,"content-sync.json"))).toBe(false);
 }finally{fs.rmSync(root,{recursive:true,force:true});fs.rmSync(stage,{recursive:true,force:true});}
});
