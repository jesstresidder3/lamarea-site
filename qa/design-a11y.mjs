// Heading order and single h1 per page, plus low-contrast text sampling on solid backgrounds.
// Usage: DIST=... BASE=... node qa/design-a11y.mjs
import { chromium } from 'playwright';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
const DIST = process.env.DIST, BASE = process.env.BASE;
const pages = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? pages(p) : f === 'index.html' ? ['/' + relative(DIST, dir) + '/'] : []; }).map((p) => p.replace('//', '/'));
const list = pages(DIST).filter((p) => !p.startsWith('/styleguide'));
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const path of list) {
  await p.goto(BASE + path, { waitUntil: 'load' });
  const r = await p.evaluate(() => {
    document.documentElement.setAttribute('data-media-notes', 'off');
    const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter((h) => h.getClientRects().length && getComputedStyle(h).visibility !== 'hidden');
    const issues = []; let last = 0; let h1 = 0;
    for (const h of hs) { const l = +h.tagName[1]; if (l === 1) h1++; if (last && l > last + 1) issues.push(`jump h${last}->h${l} "${h.textContent.trim().slice(0, 40)}"`); last = l; }
    if (h1 !== 1) issues.push(`h1 count ${h1}`);
    // contrast on text whose nearest painted background is a flat colour
    const lum = (c) => { const m = c.match(/[\d.]+/g).map(Number); const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(m[0]) + 0.7152 * f(m[1]) + 0.0722 * f(m[2]); };
    const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const cs = getComputedStyle(e); if (cs.backgroundImage !== 'none' && !e.matches('html,body')) return null; const bg = cs.backgroundColor; const a = bg.match(/[\d.]+/g); if (a && (a.length < 4 || +a[3] > 0.95)) return bg; } return 'rgb(248, 243, 228)'; };
    const low = new Set();
    for (const el of document.querySelectorAll('p, a, span, li, h1, h2, h3, h4, button, label, figcaption, dt, dd, td, th')) {
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
      if (!el.getClientRects().length) continue;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity < 0.9) continue;
      if (el.closest('[aria-hidden="true"], .media, .band__over, .hero__content, .jcard, .pd__panel--restore, .sticky-cta')) continue;
      const bg = bgOf(el); if (!bg) continue;
      const L1 = lum(cs.color), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const size = parseFloat(cs.fontSize); const large = size >= 24 || (size >= 18.66 && +cs.fontWeight >= 700);
      if (ratio < (large ? 3 : 4.5)) low.add(`${ratio.toFixed(2)} ${Math.round(size)}px "${el.textContent.trim().slice(0, 30)}" ${cs.color} on ${bg}`);
    }
    return { issues, low: [...low].slice(0, 8) };
  });
  if (r.issues.length || r.low.length) console.log(path, JSON.stringify(r));
}
await b.close();
