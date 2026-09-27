// node qa/shot-at.mjs <path> <width> <out.png> <y>  : one viewport shot after scrolling to y (px) or a selector
import { chromium } from 'playwright';
const [,, path='/', w='1440', out='at.png', y='0'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
await p.waitForTimeout(600);
const target = isNaN(+y) ? await p.evaluate((s) => document.querySelector(s).getBoundingClientRect().top + scrollY, y) : +y;
for (let s = 0; s <= target; s += 400) { await p.evaluate((s) => window.scrollTo(0, s), s); await p.waitForTimeout(60); }
await p.evaluate((t) => window.scrollTo(0, t), target);
await p.waitForTimeout(1800);
await p.screenshot({ path: out });
await b.close();
