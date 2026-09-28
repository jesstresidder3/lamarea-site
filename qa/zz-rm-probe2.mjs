import { chromium } from 'playwright';
const b = await chromium.launch(); 
for (const w of [1440,390]){const ctx=await b.newContext({viewport:{width:w,height:w<800?844:900},reducedMotion:'reduce'});
for (const u of ['/','/private-groups','/corporate','/experiences/full-day-retreat','/places','/places/naiko-encounter-bay','/food','/fleurieu-peninsula-retreats','/philosophy']){ const p=await ctx.newPage(); await p.goto('http://localhost:4322'+u,{waitUntil:'load'}); await p.waitForTimeout(1000);
const n=await p.evaluate(()=>[...document.querySelectorAll('main h2,main p')].length); const bad=[];
for(let i=0;i<n;i++){ const r=await p.evaluate(async i=>{const e=document.querySelectorAll('main h2,main p')[i]; if(!e.getClientRects().length||!e.textContent.trim())return null; const y=e.getBoundingClientRect().top+scrollY-300; window.__lenis?window.__lenis.scrollTo(y,{immediate:true}):scrollTo(0,y); await new Promise(r=>setTimeout(r,250)); const rc=e.getBoundingClientRect(); if(rc.bottom<0||rc.top>innerHeight||rc.right<0||rc.left>innerWidth) return null; let a=e,op=1;while(a){op*=+getComputedStyle(a).opacity;a=a.parentElement} return op<0.5?e.textContent.trim().slice(0,30):null},i); if(r)bad.push(r)}
console.log(w,u,bad.length?JSON.stringify(bad.slice(0,4)):'ok'); await p.close();}await ctx.close();}
await b.close();
