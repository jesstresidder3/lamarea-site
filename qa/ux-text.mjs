import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const path of process.argv.slice(2)) {
  await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
  const t = await p.evaluate(() => (document.querySelector('main')||document.body).innerText.replace(/\n{2,}/g, '\n'));
  console.log('\n######', path, '\n', t);
}
await b.close();
