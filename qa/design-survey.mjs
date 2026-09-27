// Crawl the site from home, list every page, and for each record visible empty media slots (notes off).
import { chromium } from 'playwright';
const W = +(process.argv[2] || 1440);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: W, height: 900 } });
const seen = new Set(['/']); const queue = ['/']; const out = [];
while (queue.length) {
  const path = queue.shift();
  await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'domcontentloaded' });
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
  const r = await p.evaluate(() => {
    const links = [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href').split('#')[0].split('?')[0]).filter(Boolean);
    const ph = [...document.querySelectorAll('.media--placeholder')].map(el => {
      const rc = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      let sec = el.closest('section, header, [class]'); let s = el.parentElement;
      const cls = [el.parentElement?.className, el.parentElement?.parentElement?.className].join(' | ').slice(0, 90);
      return { id: el.dataset.mediaSlot, w: Math.round(rc.width), h: Math.round(rc.height), vis: rc.width > 0 && rc.height > 0 && cs.visibility !== 'hidden', cls };
    });
    return { links, ph, sw: document.documentElement.scrollWidth };
  });
  out.push({ path, ph: r.ph.filter(x => x.vis), hidden: r.ph.filter(x => !x.vis).length, sw: r.sw });
  for (const l of r.links) if (!seen.has(l) && !l.startsWith('/media') && !l.startsWith('/fonts') && !/\.(png|jpg|svg|pdf|xml|txt)$/.test(l)) { seen.add(l); queue.push(l); }
}
for (const o of out) {
  console.log(`${o.path}  empty-visible=${o.ph.length} hidden=${o.hidden}${o.sw > W ? ' OVERFLOW' : ''}`);
  for (const x of o.ph) console.log(`   ${x.id} ${x.w}x${x.h}  [${x.cls}]`);
}
await b.close();
