// L4 G-pass stepped screenshots with console errors and horizontal overflow. Usage: node qa/zz-l4g-steps.mjs <path> <outprefix> <width> [step] [max]
import { chromium } from 'playwright';
const [,, path='/', out='steps', w='1440', step='800', max] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
const errs = [];
p.on('pageerror', e => errs.push('pageerror: ' + e.message));
p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto((process.env.BASE||'http://localhost:4322')+path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
let i=0;
const MAX=+(max||H); for (let y=0; y<Math.min(H,MAX); y+= +step) {
  await p.evaluate((y)=>{ (window.__lenis? window.__lenis.scrollTo(y,{immediate:true}) : window.scrollTo(0,y)); }, y);
  await p.waitForTimeout(+(process.env.WAIT||1700));
  await p.screenshot({ path: `${out}-${String(i++).padStart(3,'0')}.png` });
}
console.log(JSON.stringify({ path, w, H, shots: i, overflowX: ov, errs }));
await b.close();
