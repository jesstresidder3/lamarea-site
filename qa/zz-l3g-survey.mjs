// L3 G1/G9 survey: text drawn over a photo/video that is not in a sand panel, missing/placeholder media,
// empty halves of pairs, testimonial position. node zz-l3g-survey.mjs <width> <path...>
import { chromium } from 'playwright';
const [,, w, ...paths] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
const errs = [];
p.on('pageerror', (e) => errs.push('pageerror ' + e.message));
p.on('console', (m) => { if (m.type() === 'error' && !/type=style|ERR_FAILED/.test(m.text())) errs.push('console ' + m.text()); });
for (const path of paths) {
  await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 600) { await p.evaluate((y) => window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : scrollTo(0, y), y); await p.waitForTimeout(60); }
  await p.waitForTimeout(600);
  const r = await p.evaluate(() => {
    const out = { over: [], missing: [], testimonials: [], H: document.documentElement.scrollHeight };
    const medias = [...document.querySelectorAll('img, video')].filter((m) => { const r = m.getBoundingClientRect(); return r.width > 60 && r.height > 60 && getComputedStyle(m).visibility !== 'hidden'; });
    const mrects = medias.map((m) => { const r = m.getBoundingClientRect(); return { m, x: r.x, y: r.y + scrollY, w: r.width, h: r.height }; });
    const walker = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT);
    const seen = new Set();
    while (walker.nextNode()) {
      const t = walker.currentNode; if (!t.textContent.trim()) continue;
      const el = t.parentElement; if (seen.has(el)) continue; seen.add(el);
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none') continue;
      if (el.closest('[aria-hidden="true"], .sr-only, .visually-hidden, header, .on-media-panel, .on-media, figcaption.cap--sand')) continue;
      const rng = document.createRange(); rng.selectNodeContents(t); const rr = rng.getBoundingClientRect();
      if (rr.width < 2 || rr.height < 2) continue;
      const cx = rr.x + rr.width / 2, cy = rr.y + scrollY + rr.height / 2;
      const hit = mrects.find((q) => cx > q.x && cx < q.x + q.w && cy > q.y && cy < q.y + q.h);
      if (!hit) continue;
      // is there an opaque ancestor between text and media? check the elementsFromPoint stack approx: skip if an ancestor has a non-transparent bg
      let a = el, opaque = null;
      while (a && a !== document.body) { if (a.contains(hit.m)) break; const bg = getComputedStyle(a).backgroundColor; if (bg && !/rgba\(0, 0, 0, 0\)|transparent/.test(bg)) { const m = bg.match(/rgba?\(([^)]+)\)/); const al = m && m[1].split(',')[3]; if (!al || parseFloat(al) > 0.8) { opaque = a.className; break; } } if (a.contains(hit.m)) break; a = a.parentElement; }
      if (opaque !== null) continue;
      out.over.push({ text: t.textContent.trim().slice(0, 50), cls: el.className.toString().slice(0, 50), color: cs.color, y: Math.round(cy), media: (hit.m.currentSrc || hit.m.src || '').split('/').pop().slice(0, 40) });
    }
    document.querySelectorAll('.media--placeholder, [data-empty], img').forEach((m) => {
      if (m.tagName === 'IMG') { if (m.complete && m.naturalWidth === 0 && m.getBoundingClientRect().width > 0) out.missing.push({ kind: 'broken', src: m.src.split('/').pop(), y: Math.round(m.getBoundingClientRect().y + scrollY) }); return; }
      const r = m.getBoundingClientRect();
      out.missing.push({ kind: m.hasAttribute('data-empty') ? 'data-empty' : 'placeholder', cls: m.className.toString().slice(0, 60), slot: m.getAttribute('data-slot') || m.querySelector('[data-slot]')?.getAttribute('data-slot') || '', w: Math.round(r.width), h: Math.round(r.height), y: Math.round(r.y + scrollY) });
    });
    document.querySelectorAll('[class*="testimon"], [class*="quote"], blockquote').forEach((q) => { if (q.parentElement.closest('[class*="testimon"], [class*="quote"], blockquote')) return; const r = q.getBoundingClientRect(); if (r.height > 20) out.testimonials.push({ cls: q.className.toString().slice(0, 40), y: Math.round(r.y + scrollY) }); });
    return out;
  });
  console.log(`\n### ${w} ${path} H=${r.H}`);
  r.over.forEach((o) => console.log('  OVER', JSON.stringify(o)));
  r.missing.forEach((o) => console.log('  MISS', JSON.stringify(o)));
  r.testimonials.forEach((o) => console.log('  QUOTE', JSON.stringify(o)));
  if (errs.length) console.log('  ERRS', errs.splice(0).join(' | '));
}
await b.close();
