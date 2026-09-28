// node qa/zz-l4g-el.mjs <path> <width> <selector> [waitms]
import { chromium } from 'playwright';
const [,, path, w, sel, wait='4000'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
await p.waitForTimeout(+wait);
const r = await p.evaluate((sel) => [...document.querySelectorAll(sel)].slice(0,8).map(e => { const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); return { cls: e.className, text: e.textContent.trim().slice(0,50), color: cs.color, bg: cs.backgroundColor, op: cs.opacity, fs: cs.fontSize, rect: [r.x|0, r.y|0, r.width|0, r.height|0] }; }), sel);
console.log(JSON.stringify(r, null, 1));
await b.close();
