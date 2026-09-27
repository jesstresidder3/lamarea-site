// UX build check, 27-09-2026. Walks the four personas from build/design/ux-information-architecture-27-09-2026.md
// on the rebuilt structure, at 1440 and 390, each ending on "Plan your day" (/enquire).
// Run from the project root: node qa/ux-build-personas.mjs [baseUrl]. Shots go to qa/shots/ux-build/.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321';
const out = 'qa/shots/ux-build';
mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const log = (...a) => console.log(...a);

async function open(w) { return b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } }); }
async function settle(p) {
  await p.waitForLoadState('load').catch(() => {});
  await p.evaluate(() => { document.documentElement.setAttribute('data-media-notes', 'off'); sessionStorage.setItem('lm-curtain', '1'); });
  await p.waitForTimeout(900);
}
async function go(p, path) { await p.goto(base + path, { waitUntil: 'load', timeout: 90000 }); await settle(p); }
async function shot(p, n) { await p.screenshot({ path: `${out}/${n}.png` }); }
async function menu(p) { await p.click('button:has-text("Menu")'); await p.waitForTimeout(900); }
async function firstScreen(p) {
  return p.evaluate(() => {
    const vh = innerHeight;
    return [...document.querySelectorAll('main h1, main h1 ~ p, main .eyebrow, main p')]
      .filter((e) => { const r = e.getBoundingClientRect(); return r.top >= 0 && r.top < vh && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; })
      .map((e) => e.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 6);
  });
}
async function headerLabels(p) {
  return p.evaluate(() => [...document.querySelectorAll('header a, header button')].filter((e) => e.offsetParent).map((e) => e.innerText.trim()).filter(Boolean));
}
async function crumbs(p) { return p.evaluate(() => [...document.querySelectorAll('main nav[aria-label="Breadcrumb"] li')].map((e) => e.innerText.trim()).join(' > ')); }
async function planCount(p) { return p.evaluate(() => [...document.querySelectorAll('main a')].filter((a) => a.innerText.trim() === 'Plan your day').length); }
async function clickPlan(p, tag) {
  const band = p.locator('main a', { hasText: /^\s*Plan your day\s*$/ }).last();
  await band.scrollIntoViewIfNeeded(); await p.waitForTimeout(700); await shot(p, `${tag}-plan-band`);
  await Promise.all([p.waitForURL(/\/enquire/), band.click()]); await settle(p); await shot(p, `${tag}-enquire`);
  return p.url().replace(base, '');
}
async function follow(p, selector, href) {
  await Promise.all([p.waitForURL((u) => u.pathname.replace(/\/$/, '') === href.split('#')[0].split('?')[0].replace(/\/$/, '')), p.click(selector)]);
  await settle(p);
}
async function nav(p, w, href) {
  if (w >= 1180) await follow(p, `header a[href="${href}"]`, href);
  else { await menu(p); await follow(p, `#site-menu a[href="${href}"] >> nth=0`, href); }
}

for (const w of [1440, 390]) {
  // 1 Corporate EA, 15 staff: Home > Retreats > For corporate teams > Plan your day
  let p = await open(w); await go(p, '/');
  log(`\n[${w}] header:`, (await headerLabels(p)).join(' | '));
  await shot(p, `ea-${w}-1-home`);
  if (w < 1180) { await menu(p); await shot(p, `ea-${w}-2-menu`); await p.keyboard.press('Escape'); await p.waitForTimeout(500); }
  await nav(p, w, '/retreats');
  log(`[${w}] EA on`, p.url().replace(base, ''), '| crumbs', await crumbs(p), '| first screen:', (await firstScreen(p)).join(' || '));
  await shot(p, `ea-${w}-3-retreats`);
  await follow(p, 'main a[href="/corporate"] >> nth=0', '/corporate');
  log(`[${w}] EA on`, p.url().replace(base, ''), '| crumbs', await crumbs(p), '| first screen:', (await firstScreen(p)).join(' || '), '| Plan your day links in body:', await planCount(p));
  await shot(p, `ea-${w}-4-corporate`);
  const inc = p.locator('main h3:has-text("what the day includes")');
  await inc.scrollIntoViewIfNeeded(); await p.waitForTimeout(600); await shot(p, `ea-${w}-5-includes`);
  log(`[${w}] EA ended on`, await clickPlan(p, `ea-${w}-6`));
  await p.close();

  // 2 Birthday host, 8 friends: Home > menu > For private groups > Plan your day
  p = await open(w); await go(p, '/');
  await menu(p);
  await follow(p, '#site-menu a[href="/private-groups"] >> nth=0', '/private-groups');
  log(`[${w}] Birthday on`, p.url().replace(base, ''), '| crumbs', await crumbs(p), '| first screen:', (await firstScreen(p)).join(' || '), '| Plan your day links in body:', await planCount(p));
  const schedule = await p.evaluate(() => /work office|3 small groups of 4/i.test(document.querySelector('main').innerText));
  log(`[${w}] Birthday sees the corporate schedule lines:`, schedule);
  await shot(p, `bd-${w}-1-private`);
  log(`[${w}] Birthday ended on`, await clickPlan(p, `bd-${w}-2`));
  await p.close();

  // 3 Instagram visitor: Home > Retreats > See the full day > Plan your day
  p = await open(w); await go(p, '/');
  await nav(p, w, '/retreats');
  await follow(p, 'main a[href="/experiences/full-day-retreat"] >> nth=0', '/experiences/full-day-retreat');
  log(`[${w}] IG on`, p.url().replace(base, ''), '| crumbs', await crumbs(p), '| first screen:', (await firstScreen(p)).join(' || '), '| Plan your day links in body:', await planCount(p));
  await shot(p, `ig-${w}-1-full-day`);
  log(`[${w}] IG ended on`, await clickPlan(p, `ig-${w}-2`));
  await p.close();

  // 4 Returning visitor: menu > Food and sample menus, then Journal and recipes, then Plan your day
  p = await open(w); await go(p, '/');
  await menu(p); await shot(p, `rv-${w}-1-menu`);
  const items = await p.evaluate(() => [...document.querySelectorAll('#site-menu a')].map((a) => a.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean));
  log(`[${w}] menu items:`, items.join(' | '));
  await follow(p, '#site-menu a[href="/food"] >> nth=0', '/food');
  const menuPos = await p.evaluate(() => { const h = [...document.querySelectorAll('main h2')].find((e) => /sample menus/i.test(e.innerText)); return h ? Math.round(h.getBoundingClientRect().top + scrollY) : null; });
  log(`[${w}] RV on /food | first screen:`, (await firstScreen(p)).join(' || '), '| Sample menus heading at y', menuPos);
  await shot(p, `rv-${w}-2-food`);
  await go(p, '/journal'); await shot(p, `rv-${w}-3-journal`);
  log(`[${w}] RV journal h1:`, await p.evaluate(() => document.querySelector('main h1')?.innerText));
  log(`[${w}] RV ended on`, await clickPlan(p, `rv-${w}-4`));
  await p.close();
}
await b.close();
