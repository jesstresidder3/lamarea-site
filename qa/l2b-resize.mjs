// L2 round 2: load wide, resize narrow (or the reverse), then scroll and look. node qa/l2b-resize.mjs <path> <out> <w1> <w2>
import { chromium } from 'playwright';
const [,, path, out, w1, w2] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w1, height: 900 } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
await p.setViewportSize({ width: +w2, height: 844 });
await p.waitForTimeout(1500);
for (let i=0;i<8;i++){ await p.mouse.move(+w2/2, 400); await p.mouse.wheel(0, 800); await p.waitForTimeout(1500);
  const info = await p.evaluate(()=>{ const e=document.elementFromPoint(innerWidth/2, innerHeight/2); return { sy: Math.round(scrollY), mid: e && String(e.className||e.tagName).slice(0,50) }; });
  console.log(i, JSON.stringify(info)); await p.screenshot({ path: `${out}-${String(i).padStart(2,'0')}.png` }); }
console.log(errs); await b.close();
