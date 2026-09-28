// node qa/shot-fold.mjs <width> <outdir> <path...> : first-screen shots of many pages in one browser
import { chromium } from 'playwright';
const [,, w='1440', dir='qa/shots/build', ...paths] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
for (const path of paths) {
  await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'load' });
  await p.waitForTimeout(1800);
  const name = path === '/' ? 'home' : path.replace(/^\/|\/$/g, '').replace(/\//g, '_');
  await p.screenshot({ path: `${dir}/fold-${w}-${name}.png` });
}
await b.close();
