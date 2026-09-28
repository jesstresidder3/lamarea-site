import { chromium } from 'playwright';
const pages = ['/','/contact','/retreats','/private-groups','/corporate','/experiences','/experiences/full-day-retreat','/experiences/yoga','/places','/places/beresford-estate','/places/naiko-encounter-bay','/food','/fleurieu-peninsula-retreats','/our-story','/philosophy','/team','/team/zoe-buttery','/faqs','/journal','/app','/gallery','/enquire','/enquire/thank-you','/gift-cards','/waitlist','/rising-tides-collective'];
const b = await chromium.launch();
for (const w of [1440,390]) for (const rm of ['no-preference','reduce']) {
  const ctx = await b.newContext({ viewport:{width:w,height:w<800?844:900}, reducedMotion: rm });
  for (const u of pages) {
    const p = await ctx.newPage(); const errs=[];
    p.on('pageerror',e=>errs.push('PE '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CE '+m.text().slice(0,80))});
    const r = await p.goto('http://localhost:4322'+u,{waitUntil:'load'});
    const H = await p.evaluate(()=>document.body.scrollHeight);
    for (let y=0;y<H;y+=700){ await p.evaluate(y=>window.__lenis?window.__lenis.scrollTo(y,{immediate:true}):scrollTo(0,y),y); await p.waitForTimeout(60); }
    await p.waitForTimeout(800);
    const res = await p.evaluate((rm)=>{
      const o = document.documentElement.scrollWidth > innerWidth+1;
      const imgs=[...document.images];
      const broken=imgs.filter(i=>i.complete&&i.naturalWidth===0&&i.currentSrc).map(i=>i.currentSrc.slice(-40));
      const noalt=imgs.filter(i=>!i.hasAttribute('alt')).map(i=>i.src.slice(-40));
      const hidden = rm==='reduce' ? [...document.querySelectorAll('main h1,main h2,main p')].filter(e=>{const s=getComputedStyle(e);return e.getClientRects().length&&(s.opacity==='0'||s.visibility==='hidden')&&e.textContent.trim()}).map(e=>e.textContent.trim().slice(0,30)) : [];
      return {o,broken,noalt,hidden:hidden.slice(0,3)};
    }, rm);
    const bad = res.o||res.broken.length||res.noalt.length||res.hidden.length||errs.length||r.status()>=400;
    if (bad) console.log(w,rm,u,r.status(),JSON.stringify(res),errs.slice(0,2).join(' | '));
    await p.close();
  }
  await ctx.close();
}
console.log('done'); await b.close();
