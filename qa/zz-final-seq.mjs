import { chromium } from 'playwright';
const [,, path, w, n = '8', gap = '1500'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
for (let i = 0; i < +n; i++) { await p.screenshot({ path: `shots/rebuild/final/seq-${w}-${i}.jpg`, type: 'jpeg', quality: 50, clip: { x: 0, y: 0, width: +w, height: +w < 800 ? 844 : 620 } }); await p.waitForTimeout(+gap); }
await b.close();
