// L2 round 2: real wheel scrolling, screenshot + scrollY after each step. node qa/l2b-wheel.mjs <path> <out> <w> <n> <dy> <wait>
import { chromium } from 'playwright';
const [,, path='/retreats/', out='qa/shots/rebuild/l2b/wh', w='390', n='8', dy='700', wait='1500'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
for (let i=0;i<+n;i++){ await p.mouse.move(+w/2, 400); await p.mouse.wheel(0, +dy); await p.waitForTimeout(+wait);
  const info = await p.evaluate(()=>{ const e=document.elementFromPoint(innerWidth/2, innerHeight/2); return { sy: Math.round(scrollY), mid: e && (e.className||e.tagName).toString().slice(0,60) }; });
  await p.screenshot({ path: `${out}-${String(i).padStart(2,'0')}.png` }); console.log(i, JSON.stringify(info)); }
console.log(errs);
await b.close();
