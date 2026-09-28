// Lane L2: stepped viewport shots plus page errors. node qa/l2-steps.mjs <path> <out-prefix> <width> <step> [max]
import { chromium } from 'playwright';
const [,, path='/', out='steps', w='1440', step='900', max] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 }, ...(+w<800 ? { isMobile: true, hasTouch: true, deviceScaleFactor: 1 } : {}) });
const errs = [];
p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto((process.env.BASE||'http://localhost:4322')+path, { waitUntil: 'load' });
await p.waitForTimeout(3200);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
const sw = await p.evaluate(() => document.documentElement.scrollWidth);
let i=0;
for (let y=0; y<Math.min(H, +(max||H)); y+= +step) {
  await p.evaluate((y)=>{ (window.__lenis? window.__lenis.scrollTo(y,{immediate:true}) : window.scrollTo(0,y)); }, y);
  await p.waitForTimeout(1100);
  await p.screenshot({ path: `${out}-${String(i++).padStart(3,'0')}.png` });
}
console.log(JSON.stringify({ path, H, shots: i, scrollWidth: sw, vw: +w, errs }));
await b.close();
