import { chromium } from 'playwright';
const [,, w = '1440', ...paths] = process.argv;
const b = await chromium.launch();
for (const path of paths) {
  const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
  await p.route(/type=style/, (r) => r.abort());
  await p.goto('http://localhost:4322' + path, { waitUntil: 'commit' });
  const n = path.replace(/\W+/g, '_') || 'home';
  await p.waitForTimeout(900);
  await p.screenshot({ path: `shots/rebuild/final/open-${w}-${n}-a.jpg`, quality: 55 });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: `shots/rebuild/final/open-${w}-${n}-b.jpg`, quality: 55 });
  await p.close();
}
await b.close();
