import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
for (const u of ['/','/places','/philosophy','/food']){ const p=await ctx.newPage(); await p.goto('http://localhost:4322'+u,{waitUntil:'load'}); await p.waitForTimeout(800);
console.log(u, JSON.stringify(await p.evaluate(()=>{const out=new Set();for(const e of document.querySelectorAll('main p')){let a=e;while(a){if(getComputedStyle(a).opacity==='0'){out.add(a.className.toString().slice(0,40)+' sib-visible:'+[...a.parentElement.children].some(s=>getComputedStyle(s).opacity!=='0'));break}a=a.parentElement}}return [...out]}))); await p.close();}
await b.close();
