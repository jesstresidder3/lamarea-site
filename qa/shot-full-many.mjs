// node qa/shot-full-many.mjs <width> <outdir> <path...> : scrolled full-page shots, notes off, reduced to 480px wide strips
import { chromium } from 'playwright';
const [,, w='1440', dir='qa/shots/build', ...paths] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
for (const path of paths) {
  await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'load' });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } window.scrollTo(0, 0); });
  await p.waitForTimeout(1500);
  const name = path === '/' ? 'home' : path.replace(/^\/|\/$/g, '').replace(/\//g, '_');
  await p.screenshot({ path: `${dir}/full-${w}-${name}.png`, fullPage: true });
}
await b.close();
