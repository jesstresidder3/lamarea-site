// node qa/opening-seq.mjs <width> <outdir> : the opening sequence at fixed scroll positions (fractions of a screen)
import { chromium } from 'playwright';
const [,, w='1440', dir='qa/shots/build/opening'] = process.argv;
const b = await chromium.launch();
const vh = +w < 800 ? 844 : 900;
const p = await b.newPage({ viewport: { width: +w, height: vh } });
await p.goto((process.env.BASE || 'http://localhost:4321') + '/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const stops = +w < 800 ? [0, 0.6, 1.1, 1.6, 2.2, 2.8] : [0, 0.35, 0.7, 1.0, 1.3, 1.7, 2.1, 2.5];
let i = 0;
for (const s of stops) {
  const y = Math.round(s * vh);
  for (let t = (i ? Math.round(stops[i - 1] * vh) : 0); t <= y; t += 120) { await p.evaluate((t) => window.scrollTo(0, t), t); await p.waitForTimeout(40); }
  await p.evaluate((y) => window.scrollTo(0, y), y);
  await p.waitForTimeout(1600);
  await p.screenshot({ path: `${dir}/opening-${w}-${String(i).padStart(2, '0')}-${s}vh.png` });
  i++;
}
await b.close();
