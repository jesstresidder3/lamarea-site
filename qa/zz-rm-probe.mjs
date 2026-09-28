import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
for (const u of ['/','/places','/food','/philosophy','/places/naiko-encounter-bay']){ const p=await ctx.newPage(); await p.goto('http://localhost:4322'+u,{waitUntil:'load'}); await p.waitForTimeout(1200);
console.log(u, JSON.stringify(await p.evaluate(()=>[...document.querySelectorAll('main h2,main p')].filter(e=>{const s=getComputedStyle(e);return e.getClientRects().length&&s.opacity==='0'&&e.textContent.trim()}).slice(0,3).map(e=>{let a=e,c=[];while(a&&c.length<4){if(getComputedStyle(a).opacity==='0'||a.getAttribute('aria-hidden')||a.hidden||a.inert)c.push(a.className.toString().slice(0,30)+(a.getAttribute('aria-hidden')?'[ah]':'')+(a.inert?'[inert]':''));a=a.parentElement}return c})))); await p.close();}
await b.close();
