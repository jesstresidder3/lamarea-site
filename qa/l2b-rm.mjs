import { chromium } from 'playwright';
const [,, path, out, w='1440', rm='reduce'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 }, reducedMotion: rm });
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' }); await p.waitForTimeout(2000);
for (let i=0;i<6;i++){ await p.screenshot({ path: `${out}-${i}.png` }); await p.mouse.move(300,300); await p.mouse.wheel(0, 1100); await p.waitForTimeout(1200); }
console.log(errs); await b.close();
