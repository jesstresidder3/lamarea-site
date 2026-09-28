// L2 round 2: keyboard path through the funnel's first steps (arrows choose, Enter moves on).
import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
await p.goto('http://localhost:4322/enquire/', { waitUntil: 'load' }); await p.waitForTimeout(2000);
const at = () => p.evaluate(()=>document.querySelector('[data-funnel]').dataset.at);
const nextVis = () => p.evaluate(()=>getComputedStyle(document.querySelector('[data-next]')).display);
await p.focus('input[name="audience"][value="private"]');
await p.keyboard.press('ArrowRight'); await p.waitForTimeout(900);
const r = { afterArrow: await at(), nextShown: await nextVis() };
await p.keyboard.press('Enter'); await p.waitForTimeout(900); r.afterEnter = await at();
await p.focus('.step.is-current input[name="team_outcome"]'); await p.keyboard.press('Space'); await p.waitForTimeout(900); r.afterSpace = await at();
await p.keyboard.press('Enter'); await p.waitForTimeout(900); r.afterEnter2 = await at();
console.log(JSON.stringify(r), errs); await b.close();
