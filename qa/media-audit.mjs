// Media reviewer: list every media slot on each page with its src, alt, loading and position.
// Usage: node qa/media-audit.mjs [width] > out.json
import { chromium } from 'playwright';
const w = +(process.argv[2] || 1440);
const base = process.env.BASE || 'http://localhost:4321';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
await p.goto(base + '/sitemap-0.xml').catch(()=>{});
let paths = [];
try { const xml = await p.content(); paths = [...xml.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(m=>m[1]); } catch {}
if (!paths.length) paths = process.argv.slice(3);
const out = {};
for (const path of paths) {
  await p.goto(base + path, { waitUntil: 'networkidle' });
  out[path] = await p.$$eval('figure[data-media-slot]', els => els.map(e => {
    const img = e.querySelector('img'); const v = e.querySelector('video'); const r = e.getBoundingClientRect();
    return { id: e.dataset.mediaSlot, real: e.classList.contains('media--real'), src: img?.getAttribute('src') || v?.dataset.src || null,
      alt: img?.alt ?? v?.getAttribute('aria-label') ?? e.querySelector('.ph')?.getAttribute('aria-label'), loading: img?.loading, top: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height), video: !!v };
  }));
}
console.log(JSON.stringify(out, null, 1));
await b.close();
