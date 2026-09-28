// System pass helper: scroll step by step to a selector and screenshot the viewport there.
// node zz-sys-el.mjs <path> <width> <selector> <out.png> [offsetPx]
import { chromium } from 'playwright';
const [,, path, w, sel, out, off = '0'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2000);
const target = await p.evaluate(({ sel, off }) => { const el = document.querySelector(sel); return el ? el.getBoundingClientRect().top + scrollY + +off : 0; }, { sel, off });
for (let t = 0; t < target; t += 700) {
  await p.evaluate((t) => { window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : window.scrollTo(0, t); }, t);
  await p.waitForTimeout(100);
}
await p.evaluate((t) => { window.__lenis?.resize?.(); window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : window.scrollTo(0, t); }, target);
await p.waitForTimeout(1800);
await p.screenshot({ path: out });
console.log(sel, target);
await b.close();
