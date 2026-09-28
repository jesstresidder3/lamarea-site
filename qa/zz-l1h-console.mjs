import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 160)); });
  p.on('pageerror', (e) => errs.push('pageerror ' + e.message));
  await p.goto('http://localhost:4322/', { waitUntil: 'load' });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 800) { await p.evaluate((y) => window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : scrollTo(0, y), y); await p.waitForTimeout(150); }
  await p.waitForTimeout(1000);
  console.log(w, errs.length ? errs : 'no console errors');
}
await b.close();
