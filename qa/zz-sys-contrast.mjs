// G1 check: for every words-on-media block in view at a scroll position, hide the text, capture the
// pixels behind it and write them with the text colour, for zz-sys-contrast.py to measure.
// node zz-sys-contrast.mjs <path> <width> <y> <outdir>
import { chromium } from 'playwright';
import fs from 'node:fs';
const [,, path, w, y, dir] = process.argv;
fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
for (let t = 0; t < +y; t += 700) { await p.evaluate((t) => window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : scrollTo(0, t), t); await p.waitForTimeout(100); }
await p.evaluate((t) => window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : scrollTo(0, t), +y);
await p.waitForTimeout(2500);
const items = await p.evaluate(() => {
  const sel = '.on-media-panel, .on-media, .site-header[data-state="top"] .menu-toggle__label, .site-header[data-state="top"] .hdr__logo';
  return [...document.querySelectorAll(sel)].map((el, i) => {
    const r = el.getBoundingClientRect();
    const text = el.querySelector('.op__name, .po__line-in, .ct__line') || el;
    return { i, cls: el.className.toString().slice(0, 60), x: r.x, y: r.y, w: r.width, h: r.height, color: getComputedStyle(text).color, size: parseFloat(getComputedStyle(text).fontSize) };
  }).filter((o) => o.w > 4 && o.h > 4 && o.y >= 0 && o.y + o.h <= innerHeight && getComputedStyle(document.querySelectorAll('.on-media-panel, .on-media, .site-header[data-state="top"] .menu-toggle__label, .site-header[data-state="top"] .hdr__logo')[o.i]).opacity !== '0');
});
await p.addStyleTag({ content: '*{color:transparent !important;text-shadow:none !important;text-decoration-color:transparent !important} .lm-logo,svg{opacity:0 !important} .btn-filled::after{opacity:0 !important}' });
await p.waitForTimeout(300);
for (const it of items) await p.screenshot({ path: `${dir}/${it.i}.png`, clip: { x: it.x, y: it.y, width: it.w, height: it.h } });
fs.writeFileSync(`${dir}/items.json`, JSON.stringify(items));
await b.close();
