import { chromium } from 'playwright';
const [,, path='/', w='1440'] = process.argv;
const b=await chromium.launch();const p=await b.newPage({viewport:{width:+w,height:+w<800?844:900}});
const errs=[];p.on('pageerror',e=>errs.push('pageerror '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('http://localhost:4322'+path,{waitUntil:'load'});await p.waitForTimeout(4000);
console.log(JSON.stringify(await p.evaluate(()=>{const s=document.querySelector('[data-page-opener]');if(!s)return {po:false, first: document.querySelector('main')?.firstElementChild?.className};const i=s.querySelector('img,video');return {first: document.querySelector('main')?.firstElementChild?.className, img:i?.currentSrc||i?.src, complete:i?.complete, clip:getComputedStyle(s.querySelector('.po__frame')).clipPath, op:getComputedStyle(s.querySelector('.po__line-in')).opacity, h:s.offsetHeight}})));
console.log(errs.slice(0,6).join('\n'));await p.screenshot({path:'/tmp/claude-501/dbg.png'});await b.close();
