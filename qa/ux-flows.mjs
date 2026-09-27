import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
  await p.goto('http://localhost:4321/private-groups', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
  await p.click('[data-menu-open], button:has-text("Menu")');
  await p.waitForTimeout(900);
  await p.screenshot({ path: `qa/shots/ux/menu-open-${w}.png` });
  if (w === 390) await p.screenshot({ path: `qa/shots/ux/menu-open-390-full.png`, fullPage: true });
  const menuText = await p.evaluate(() => [...document.querySelectorAll('#site-menu a')].map(a => a.innerText.replace(/\s+/g,' ').trim() + ' -> ' + a.getAttribute('href')));
  console.log(w, 'MENU', menuText.join(' | '));
  // is there a "Home" text item anywhere?
  const home = await p.evaluate(() => [...document.querySelectorAll('a')].filter(a => /^home$/i.test(a.innerText.trim())).length);
  console.log(w, 'text Home links:', home);
  await p.close();
}
// home steps at 1440 and 390
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
  await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  const n = 12;
  for (let i = 0; i < n; i++) { await p.evaluate(y => window.scrollTo(0, y), Math.round((H - 900) * i / (n - 1))); await p.waitForTimeout(900); await p.screenshot({ path: `qa/shots/ux/home-step-${w}-${String(i).padStart(2,'0')}.png` }); }
  await p.close();
}
await b.close();
