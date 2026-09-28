import { chromium } from 'playwright';
const [,, path, sel, w='1440'] = process.argv;
const b=await chromium.launch();const p=await b.newPage({viewport:{width:+w,height:+w<800?844:900}});
await p.goto('http://localhost:4322'+path,{waitUntil:'load'});await p.waitForTimeout(2000);
const el=await p.$(sel); if(!el){console.log('no el');process.exit()}
await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(2500);
console.log(await el.evaluate(e=>JSON.stringify({w:e.offsetWidth,h:e.offsetHeight,html:e.outerHTML.slice(0,400)})));
await p.screenshot({path:'/tmp/claude-501/el.png'});await b.close();
