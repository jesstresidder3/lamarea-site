// Persona click paths at 1440 and 390. Logs each step and screenshots into qa/shots/ux/persona-*.
import { chromium } from 'playwright';
const b = await chromium.launch();
const log = (...a) => console.log(...a);
async function open(w) { const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } }); return p; }
async function go(p, path) { await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' }); await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off')); }
async function menu(p) { await p.click('button:has-text("Menu")'); await p.waitForTimeout(700); }
async function shot(p, n) { await p.screenshot({ path: `qa/shots/ux/persona-${n}.png` }); }
async function scrollFind(p, re) { return p.evaluate((src) => { const r = new RegExp(src, 'i'); const els = [...document.querySelectorAll('main *')].filter(e => e.children.length === 0 && r.test(e.textContent)); if (!els.length) return null; const y = els[0].getBoundingClientRect().top + scrollY; return { y: Math.round(y), text: els[0].textContent.trim().slice(0, 100), H: document.documentElement.scrollHeight }; }, re.source); }
for (const w of [1440, 390]) {
  // 1 Corporate EA, 15 staff
  let p = await open(w); await go(p, '/');
  if (w === 390) { await menu(p); await shot(p, `ea-${w}-1-menu`); await p.click('#site-menu a[href="/corporate"]'); } else { await p.click('header a[href="/corporate"]'); }
  await p.waitForLoadState('networkidle'); log(w, 'EA landed', p.url());
  for (const re of [/group sizes? vary/, /12 guests/, /sleeps 20/, /\b15\b/, /price|cost|\$/, /discovery call/]) log(w, ' EA find', re.source, JSON.stringify(await scrollFind(p, re)));
  await p.close();
  // 2 Birthday for 8 friends
  p = await open(w); await go(p, '/');
  if (w === 390) { await menu(p); await p.click('#site-menu a[href="/private-groups"]'); } else { await p.click('main a[href="/private-groups"]').catch(async () => p.click('header a[href="/private-groups"]')); }
  await p.waitForLoadState('networkidle'); log(w, 'Birthday landed', p.url());
  for (const re of [/birthday/, /12 guests/, /sleeps (6|10)/, /\b8\b guests|eight/, /overnight|stay the night|weekend/, /price|\$/]) log(w, ' BD find', re.source, JSON.stringify(await scrollFind(p, re)));
  await p.close();
  // 3 Instagram visitor lands on home: what is it?
  p = await open(w); await go(p, '/');
  const firstWords = await p.evaluate((vh) => [...document.querySelectorAll('main h1, main h2, main p')].filter(e => { const r = e.getBoundingClientRect(); return r.top < vh * 2 && r.height > 0; }).map(e => e.innerText.replace(/\s+/g, ' ').trim()), w < 800 ? 844 : 900);
  log(w, 'IG first two screens:', firstWords.join(' || '));
  await p.evaluate(() => scrollTo(0, innerHeight)); await p.waitForTimeout(900); await shot(p, `ig-${w}-screen2`);
  await p.close();
  // 4 Returning visitor: menu or recipe
  p = await open(w); await go(p, '/');
  const headerLabels = await p.evaluate(() => [...document.querySelectorAll('header a, header button')].filter(e => e.offsetParent).map(e => e.innerText.trim()).filter(Boolean));
  log(w, 'Returning: header labels', headerLabels.join(' | '), ' (does any say Food, Menu of food, Recipes, Journal?)');
  await menu(p); await shot(p, `return-${w}-menu`);
  const food = await p.evaluate(() => [...document.querySelectorAll('#site-menu a')].map(a => a.innerText.trim()).filter(t => /table|food|journal|recipe|menu/i.test(t)));
  log(w, ' Returning: menu items that might hold a food menu or recipe:', food.join(' | '));
  await p.click('#site-menu a[href="/journal"]'); await p.waitForLoadState('networkidle');
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
  await shot(p, `return-${w}-journal`);
  const filters = await p.evaluate(() => [...document.querySelectorAll('main button, main [role=tab], main nav a')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 12));
  log(w, ' Journal filters:', filters.join(' | '));
  await go(p, '/food'); log(w, ' Food menu on /food:', JSON.stringify(await scrollFind(p, /lunch, course by course/)));
  await p.close();
}
await b.close();
