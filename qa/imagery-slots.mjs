// Imagery agent: screenshot every real media slot on a page, in place, after scrolling to it.
// Usage: node qa/imagery-slots.mjs <path> <width> <outdir> [base]
import { chromium } from 'playwright';
import fs from 'node:fs';
const [,, path='/', w='1440', outdir='qa/shots/imagery/slots', base='http://localhost:4399'] = process.argv;
fs.mkdirSync(outdir, { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto(base + path, { waitUntil: 'networkidle' });
await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
const ids = await p.$$eval('figure.media--real[data-media-slot]', els => [...new Set(els.filter(e=>e.offsetWidth>40).map(e => e.dataset.mediaSlot))]);
const tag = path.replace(/\//g,'_') || 'home';
for (const id of ids) {
  const el = await p.$(`figure.media--real[data-media-slot="${id}"]:visible`);
  if (!el) continue;
  try {
    await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(700);
    await el.screenshot({ path: `${outdir}/${tag}__${w}__${id}.png`, timeout: 5000 });
  } catch (e) { console.log('skip', id, String(e).slice(0,80)); }
}
console.log(tag, w, ids.length);
await b.close();
