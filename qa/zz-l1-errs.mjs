import { chromium } from 'playwright';
const paths = process.argv.slice(2);
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = [];
  await p.route(/type=style/, (r) => r.abort());
  p.on('pageerror', (e) => errs.push('pageerror ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error' && !/type=style|ERR_FAILED/.test(m.text())) errs.push('console ' + m.text()); });
  for (const path of paths) {
    await p.goto('http://localhost:4322' + path, { waitUntil: 'networkidle' });
    await p.mouse.wheel(0, 3000); await p.waitForTimeout(800);
    const h = await p.evaluate(() => document.documentElement.scrollHeight);
    const ox = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(w, path, 'height', h, 'overflowX', ox, errs.splice(0).join(' | ') || 'no errors');
  }
  await p.close();
}
await b.close();
