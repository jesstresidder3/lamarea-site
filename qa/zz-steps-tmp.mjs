import { chromium } from 'playwright';
const [,, path='/', out='steps', w='1440', step='700'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
await p.goto((process.env.BASE||'http://localhost:4322')+path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
let i=0;
const MAX=+(process.env.MAX||H); for (let y=0; y<Math.min(H,MAX); y+= +step) {
  await p.evaluate((y)=>{ (window.__lenis? window.__lenis.scrollTo(y,{immediate:true}) : window.scrollTo(0,y)); }, y);
  await p.waitForTimeout(900);
  await p.screenshot({ path: `${out}-${String(i++).padStart(3,'0')}.png` });
}
console.log(H, i);
await b.close();
