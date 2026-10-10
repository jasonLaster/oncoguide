import { expect,test } from "../.renderer/node_modules/@playwright/test/index.mjs";
const starter="/education/guides/start-here/01-read-the-labels/";
const guides=["start-here","treating-early-tnbc","reading-pathology-and-surgery-results","aiming-a-drug-at-a-surface-target"];
test("new curriculum routes, aliases and metadata work without JavaScript",async({browser,request})=>{
 const context=await browser.newContext({javaScriptEnabled:false}),page=await context.newPage();
 try {
  await page.goto(String(test.info().project.use.baseURL)+starter);
  await expect(page.getByTestId("education-article").getByRole("heading",{level:1})).toHaveText("Read each label as an answer to a question");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href","https://oncoguide.cc"+starter);
  const alias=await request.get(starter.replace("/education/","/wiki/education/"));
  expect(alias.ok()).toBe(true);expect(await alias.text()).toContain("Read each label as an answer to a question");
  expect(await (await request.get("/sitemap.xml")).text()).toContain("https://oncoguide.cc"+starter);
  for(const guide of guides){
   await page.goto(String(test.info().project.use.baseURL)+"/education/guides/"+guide+"/index/");
   await expect(page.getByTestId("education-article").locator("table").first().locator("tbody tr")).toHaveCount(3);
  }
 } finally {await context.close()}
});
test("search, themes, mobile navigation and the current report cartoon work",async({page})=>{
 const errors:string[]=[];page.on("pageerror",error=>errors.push(error.message));
 await page.goto("/");await expect(page.getByRole("heading",{name:"The education library"})).toBeVisible();
 await page.keyboard.press("ControlOrMeta+k");const input=page.getByRole("searchbox",{name:"Search education"});
 await expect(input).toBeFocused();await input.fill("autophagy");await input.press("Enter");
 await expect.poll(()=>page.locator(".edu-result").count()).toBeGreaterThan(0);
 await page.goto(starter);
 const toggle=page.getByRole("button",{name:"Dark theme",exact:true});
 await toggle.click();await expect(page.locator("html")).toHaveClass(/dark/);
 await page.reload();await expect(page.locator("html")).toHaveClass(/dark/);
 const image=page.locator('article img[data-theater-image]:visible').first();
 await expect(image).toHaveAttribute("src",/report-questions-dark\.png/);
 await image.click();await expect(page.getByRole("dialog")).toBeVisible();
 await page.getByRole("button",{name:"Close image preview",exact:true}).click();
 await toggle.click();await expect(page.locator("html")).not.toHaveClass(/dark/);
 await expect(page.locator('article img[data-theater-image]:visible').first()).toHaveAttribute("src",/report-questions-light\.png/);
 await page.setViewportSize({width:390,height:844});await page.getByRole("button",{name:"Open education navigation"}).click();
 await expect(page.getByRole("navigation",{name:"Education navigation"})).toBeVisible();
 await expect(page.getByRole("navigation",{name:"Education navigation"}).locator("summary").filter({hasText:"Learning paths"})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 expect(errors).toEqual([]);
});
test("every lesson, alias and image variant loads without Diana runtime dependencies",async({context,request})=>{
 test.setTimeout(300_000);
 const response=await request.get("/education-manifest.json");expect(response.ok()).toBe(true);
 const manifest=await response.json() as {pages:Array<{slug:string;title:string}>;assets:string[]};
 expect(manifest.pages.length).toBeGreaterThan(0);const queue=[...manifest.pages],failures:string[]=[];let images=0;
 await Promise.all(Array.from({length:3},async()=>{
  const page=await context.newPage();
  page.on("request",req=>{if(/diana-tnbc\.com|blob\.vercel-storage\.com/.test(req.url()))failures.push("Runtime dependency: "+req.url())});
  try {
   for(let entry=queue.shift();entry;entry=queue.shift()){
    try{
     await page.goto("/education/"+entry.slug.slice("wiki/education/".length)+"/",{waitUntil:"domcontentloaded"});
     const article=page.getByTestId("education-article");await expect(article.getByRole("heading",{level:1})).toHaveText(entry.title);
     if(await article.locator(".mermaid-placeholder").count())failures.push("Unrendered diagram: "+entry.slug);
     const result=await article.locator("img").evaluateAll(async els=>Promise.all(els.map(async el=>{
      const img=el as HTMLImageElement;img.loading="eager";let timer:ReturnType<typeof setTimeout>|undefined,decoded=false;
      try{await Promise.race([img.decode(),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error("timeout")),15000)})]);decoded=true}
      catch{}finally{clearTimeout(timer)}
      return{src:img.currentSrc||img.src,loaded:decoded&&img.complete&&img.naturalWidth>0};
     })));
     images+=result.length;failures.push(...result.filter(i=>!i.loaded).map(i=>entry!.slug+": "+i.src));
     const alias=await request.get("/wiki/education/"+entry.slug.slice("wiki/education/".length)+"/");
     if(!alias.ok())failures.push("Missing alias: "+entry.slug);
    }catch(error){failures.push(entry.slug+": "+String(error))}
   }
  }finally{await page.close()}
 }));
 for(const asset of manifest.assets){const assetResponse=await request.get(asset);if(!assetResponse.ok())failures.push("Missing asset: "+asset)}
 console.info("Oncoguide audit: "+manifest.pages.length+" lessons, "+images+" image elements, "+manifest.assets.length+" assets, "+failures.length+" failures");
 expect(images).toBeGreaterThan(0);expect(failures).toEqual([]);
});

test("local-therapy lessons and the learning lab work in both themes at mobile width",async({browser,request})=>{
 test.setTimeout(180_000);
 const guide=await request.get("/education/guides/local-therapy-and-the-immune-system/index/");
 expect(guide.ok()).toBe(true);
 for(const theme of ["light","dark"])for(const width of [1280,390]){
  const context=await browser.newContext({viewport:{width,height:844},colorScheme:null});
  await context.addInitScript((value:string)=>{if(window===window.top)localStorage.setItem("theme",value)},theme);
  const page=await context.newPage(),errors:string[]=[];page.on("pageerror",error=>errors.push(error.message));
  try{
   await page.goto(String(test.info().project.use.baseURL)+"/education/guides/local-therapy-and-the-immune-system/index/");
   await expect(page.getByTestId("education-article").locator("table").first().locator("tbody tr")).toHaveCount(7);
   await page.goto(String(test.info().project.use.baseURL)+"/education/local-treatment-modalities/01-mechanism/");
   const cartoon=page.locator('article img[data-theater-image]:visible').first();
   await expect(cartoon).toHaveAttribute("src",new RegExp("local-injury-gates-"+theme+"\\.png"));
   await cartoon.evaluate((element:HTMLImageElement)=>element.decode());
   await page.goto(String(test.info().project.use.baseURL)+"/education/tools/in-vivo-car-t-learning-lab/");
   const iframe=page.locator("iframe[data-education-lab]");
   await expect(iframe).toHaveAttribute("sandbox","allow-scripts allow-popups");
   await expect(iframe).toHaveAttribute("referrerpolicy","no-referrer");
   const frame=page.frameLocator("iframe[data-education-lab]");
   await expect(frame.locator("#parts button")).toHaveCount(5);
   for(let i=0;i<5;i++){
    await frame.locator("#parts button").nth(i).click();
    await expect(frame.locator("#component-detail")).not.toBeEmpty();
   }
   const art=await frame.locator("img.figure").evaluate(async(element:HTMLImageElement)=>{
    await element.decode();return {decoded:element.complete&&element.naturalWidth>0,theme:matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"};
   });expect(art).toEqual({decoded:true,theme});
   expect(await frame.locator("body").evaluate(()=>{try{void window.parent.document.body;return false}catch{return true}})).toBe(true);
   await frame.getByRole("button",{name:"2 · Read a graph",exact:true}).click();
   await expect(frame.locator("#graph-results")).toContainText("70.0% smaller");
   await frame.locator("#treated").fill("0");await expect(frame.locator("#graph-results")).toContainText("does not establish durable cure");
   await frame.locator("#baseline").fill("");await expect(frame.locator("#graph-results")).toContainText("Enter a positive baseline");
   await frame.getByRole("button",{name:"Reset example",exact:true}).click();await expect(frame.locator("#treated")).toHaveValue("300");
   await frame.getByRole("button",{name:"3 · Check your understanding",exact:true}).click();
   const answers=[0,1,0,1,1,0];
   for(let i=0;i<answers.length;i++){
    await expect(frame.locator("#progress")).toContainText(`Question ${i+1} of 6`);
    if(i===0){await frame.locator("#options button").nth(1).click();await expect(frame.locator("#feedback")).toContainText("Reconsider")}
    await frame.locator("#options button").nth(answers[i]).click();await expect(frame.locator("#feedback")).toContainText("Correct.");
    await frame.locator("#next").click();
   }
   await expect(frame.locator("#progress")).toContainText("Question 1 of 6");
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   expect(await frame.locator("body").evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   expect(errors).toEqual([]);
  }finally{await context.close()}
 }
});
