import { chromium } from 'playwright';
const [,, path = '/', w = '1440', out = 'shots/rebuild/l1/at', ...ys] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
for (const y of ys) {
  // Step there in screens so scroll-driven reveals fire on the way.
  const cur = await p.evaluate(() => scrollY);
  for (let t = cur; t < +y; t += 700) {
    await p.evaluate((t) => { window.__lenis?.resize?.(); window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : window.scrollTo(0, t); }, t);
    await p.waitForTimeout(120);
  }
  await p.evaluate((t) => { window.__lenis?.resize?.(); window.__lenis ? window.__lenis.scrollTo(t, { immediate: true }) : window.scrollTo(0, t); }, +y);
  await p.waitForTimeout(1600);
  const real = await p.evaluate(() => scrollY);
  await p.screenshot({ path: `${out}-${y}.png` });
  console.log(y, 'actual', real);
}
await b.close();
