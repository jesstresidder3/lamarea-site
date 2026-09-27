// Usage: node qa/design-section.mjs <path> <width> <selector> <outprefix> [steps=3] [stepPx=0.6vh]
// Viewport shots stepping through one section (notes off, smooth scroll off).
import { chromium } from 'playwright';
const [,, path, w, sel, out, n = '3', frac = '0.6'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
await p.evaluate(() => { document.documentElement.setAttribute('data-media-notes', 'off'); document.documentElement.style.scrollBehavior = 'auto'; });
const top = await p.evaluate((s) => { const el = document.querySelector(s); return el.getBoundingClientRect().top + scrollY; }, sel);
const vh = +w < 800 ? 844 : 900;
for (let i = 0; i < +n; i++) {
  await p.evaluate((y) => window.scrollTo(0, y), Math.max(0, top - 40 + i * vh * +frac));
  await p.waitForTimeout(1300);
  await p.screenshot({ path: `${out}-${i}.png` });
}
await b.close();
