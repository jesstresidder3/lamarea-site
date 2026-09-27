// Usage: node qa/design-at.mjs <path> <width> <scrollY|selector> <out.png>  (notes off, one viewport)
import { chromium } from 'playwright';
const [,, path, w, at, out] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
await p.evaluate(() => { document.documentElement.setAttribute('data-media-notes', 'off'); document.documentElement.style.scrollBehavior = 'auto'; });
if (/^\d+$/.test(at)) await p.evaluate((y) => window.scrollTo(0, y), +at);
else await p.evaluate((s) => { const el = document.querySelector(s); window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 80); }, at);
await p.waitForTimeout(1200);
await p.screenshot({ path: out });
await b.close();
