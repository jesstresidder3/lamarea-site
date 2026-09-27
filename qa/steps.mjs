// node qa/steps.mjs <path> <width> <prefix> <n>  : n viewport shots down the page
import { chromium } from 'playwright';
const [,, path='/', w='390', prefix='s', n='8'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 }, deviceScaleFactor: 1 });
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let i = 0; i < +n; i++) {
  const y = Math.round((H - 844) * i / (+n - 1));
  await p.evaluate(y => window.scrollTo(0, y), y);
  await p.waitForTimeout(1600);
  await p.screenshot({ path: `${prefix}-${i}.png` });
}
console.log('height', H);
await b.close();
