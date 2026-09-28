// L2 round 2: stepped wheel shots at any viewport. node qa/l2b-vp.mjs <path> <out> <w> <h> <n> <dy>
import { chromium } from 'playwright';
const [,, path, out, w, h, n='8', dy='900'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +h } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message)); p.on('console', m=>{ if(m.type()==='error') errs.push(m.text()); });
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
await p.screenshot({ path: `${out}-00.png` });
for (let i=1;i<=+n;i++){ await p.mouse.move(+w/2, +h/2); await p.mouse.wheel(0, +dy); await p.waitForTimeout(1600); await p.screenshot({ path: `${out}-${String(i).padStart(2,'0')}.png` }); }
console.log(path, w, h, JSON.stringify(errs));
await b.close();
