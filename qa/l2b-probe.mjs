// L2 round 2: load a page in a given engine and report what is visible. node qa/l2b-probe.mjs <engine> <path> <out>
import pw from 'playwright';
const [,, eng='chromium', path='/retreats/', out='qa/shots/rebuild/l2b/probe', w='1440'] = process.argv;
const b = await pw[eng].launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message)); p.on('console', m=>{ if(m.type()==='error') errs.push(m.text()); });
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
await p.waitForTimeout(3000);
await p.screenshot({ path: out+'-0.png' });
for (let i=1;i<=4;i++){ await p.mouse.wheel(0, 800); await p.waitForTimeout(900); await p.screenshot({ path: `${out}-${i}.png` }); }
console.log(eng, errs, await p.evaluate(()=>({sy:scrollY, bodyOp:getComputedStyle(document.body).opacity, vis:getComputedStyle(document.querySelector('main')||document.body).visibility})));
await b.close();
