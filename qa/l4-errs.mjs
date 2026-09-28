import { chromium } from 'playwright';
const paths = process.argv.slice(2);
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console ' + m.text()); });
  p.on('response', (r) => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url()); });
  for (const path of paths) {
    const res = await p.goto('http://localhost:4322' + path, { waitUntil: 'networkidle' });
    for (let y = 0; y < 12; y++) { await p.mouse.wheel(0, 900); await p.waitForTimeout(150); }
    await p.waitForTimeout(500);
    const info = await p.evaluate(() => ({ ox: document.documentElement.scrollWidth - window.innerWidth, ph: [...document.querySelectorAll('.media--placeholder')].filter(e => e.offsetParent && getComputedStyle(e).display !== 'none' && e.getBoundingClientRect().height > 0).map(e => e.dataset.mediaSlot), h1: document.querySelectorAll('h1').length }));
    console.log(w, path, res.status(), 'ox', info.ox, 'h1', info.h1, 'ph', info.ph.join(',') || '-', errs.splice(0).join(' | ') || 'ok');
  }
  await p.close();
}
await b.close();
