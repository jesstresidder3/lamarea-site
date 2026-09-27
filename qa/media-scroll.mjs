// Media reviewer: screenshots at set scroll positions and the computed scale/translate of hero media.
// Usage: node qa/media-scroll.mjs <path> <width> <outprefix> <y1,y2,...> [reduced] [chrome]
import { chromium } from 'playwright';
const [,, path='/', w='1440', out='qa/shots/media/scroll', ys='0,300,600', reduced, chrome] = process.argv;
const b = await chromium.launch(chrome === 'chrome' ? { channel: 'chrome' } : {});
const ctx = await b.newContext({ viewport: { width: +w, height: +w < 800 ? 844 : 900 }, reducedMotion: reduced === 'reduced' ? 'reduce' : 'no-preference' });
const p = await ctx.newPage();
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
await p.waitForTimeout(2600);
for (const y of ys.split(',').map(Number)) {
  await p.evaluate((yy) => window.scrollTo(0, yy), y);
  await p.waitForTimeout(700);
  const info = await p.evaluate(() => [...document.querySelectorAll('[data-hero] .media, .band__media .media')].slice(0, 3).map(f => { const cs = getComputedStyle(f); const pm = getComputedStyle(f.parentElement); return `${f.dataset.mediaSlot} scale=${cs.scale} parentTranslate=${pm.translate} parentTransform=${pm.transform.slice(0,40)}`; }));
  console.log(y, info.join(' | '));
  await p.screenshot({ path: `${out}-${y}.jpg`, type: 'jpeg', quality: 70 });
}
await b.close();
