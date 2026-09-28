import { chromium } from 'playwright';
// node zz-final-el.mjs <path> <width> <selector> <out> [offsetPx]
const [,, path, w, sel, out, off = '0'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2000);
const y = await p.evaluate((s) => { const e = document.querySelector(s); return e ? e.getBoundingClientRect().top + scrollY : -1; }, sel);
if (y < 0) { console.log('no el'); process.exit(1); }
for (let t = 0; t < y + +off; t += 600) { await p.evaluate((t) => window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : scrollTo(0, t), t); await p.waitForTimeout(100); }
await p.evaluate((t) => window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : scrollTo(0, t), y + +off);
await p.waitForTimeout(2500);
await p.screenshot({ path: out, type: 'jpeg', quality: 60 });
await b.close();
