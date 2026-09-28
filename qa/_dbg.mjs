import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4398/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
console.log(await p.evaluate(() => [...document.querySelectorAll('[data-op-frame]')].map(f => { const r = f.getBoundingClientRect(); const cs = getComputedStyle(f); const w = f.closest('.op__world'); const wr = w.getBoundingClientRect(); return { r: [r.x, r.y, r.width, r.height], clip: cs.clipPath, world: [wr.x, wr.y, wr.width, wr.height], imgs: [...f.querySelectorAll('img')].map(i => [i.currentSrc.split('/').pop(), i.complete, i.naturalWidth, getComputedStyle(i.closest('.op__img')).opacity]) }; })));
await b.close();
