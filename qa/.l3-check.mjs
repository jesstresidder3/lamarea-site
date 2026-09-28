import { chromium } from 'playwright';
const exp = ['coastal-hiking','contrast-therapy','gut-health','infrared-sauna','journaling-and-reading','massage','meditation-and-mindfulness','mediterranean-table','nutrition-consultations','ocean-swimming','pasta-making','pilates','pool-swimming','relaxing-by-the-fire','sauna','yoga'];
const paths = ['/experiences/','/places/','/places/naiko-deep-creek/','/places/naiko-encounter-bay/','/places/beresford-estate/','/food/','/fleurieu-peninsula-retreats/', ...exp.map(e=>`/experiences/${e}/`)];
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w<800?844:900 } });
  for (const path of paths) {
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type()==='error') errs.push('c:'+m.text().slice(0,140)); });
    const r = await p.goto('http://localhost:4322'+path, { waitUntil: 'load' }).catch(e=>null);
    
    await p.waitForTimeout(1200);
    const info = await p.evaluate(() => {
      const vis = (e) => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return s.display!=='none' && s.visibility!=='hidden' && r.width>0 && r.height>0; };
      const emptyH = [...document.querySelectorAll('main h1,main h2,main h3,main h4')].filter(h => !h.textContent.trim()).length;
      const ph = [...document.querySelectorAll('main .media--placeholder')].filter(vis).length;
      const noAlt = [...document.querySelectorAll('main img')].filter(i => !i.hasAttribute('alt')).length;
      const over = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      const hs = [...document.querySelectorAll('main h1,main h2,main h3')].map(h=>+h.tagName[1]);
      let jump=0; for (let i=1;i<hs.length;i++) if (hs[i]-hs[i-1]>1) jump++;
      const h1 = document.querySelectorAll('main h1').length;
      return { emptyH, ph, noAlt, over, jump, h1 };
    });
    console.log(w, path, r?.status(), JSON.stringify(info), errs.length ? JSON.stringify(errs.slice(0,3)) : '');
    await p.close();
  }
  await ctx.close();
}
await b.close();
