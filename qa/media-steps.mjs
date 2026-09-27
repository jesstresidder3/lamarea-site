// Media reviewer: viewport screenshots stepped down a page (notes off), so scroll-driven sections render as a visitor sees them.
// Usage: node qa/media-steps.mjs <path> <width> <outprefix> [stepFraction=0.9] [maxShots=40] [reduced]
import { chromium } from 'playwright';
const [,, path='/', w='1440', out='qa/shots/media/steps', frac='0.9', max='40', reduced] = process.argv;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +w < 800 ? 844 : 900 }, reducedMotion: reduced ? 'reduce' : 'no-preference' });
const p = await ctx.newPage();
await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle' });
await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
const vh = +w < 800 ? 844 : 900;
let y = 0, i = 0;
const H = await p.evaluate(() => document.documentElement.scrollHeight);
while (y < H && i < +max) {
  await p.mouse.wheel(0, 0);
  await p.evaluate((yy) => window.scrollTo(0, yy), y);
  await p.waitForTimeout(900);
  await p.screenshot({ path: `${out}-${String(i).padStart(2,'0')}.jpg`, type: 'jpeg', quality: 70 });
  y += Math.round(vh * +frac); i++;
}
console.log(path, w, i, 'shots, height', H);
await b.close();
