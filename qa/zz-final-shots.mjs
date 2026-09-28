import { chromium } from 'playwright';
const b=await chromium.launch();
for (const [u,w,n] of [['/',390,'home-390'],['/retreats',1440,'retreats-1440'],['/experiences/relaxing-by-the-fire',1440,'fire-1440']]){const p=await b.newPage({viewport:{width:w,height:w<800?844:900}});await p.goto('http://localhost:4322'+u,{waitUntil:'load'});await p.waitForTimeout(2500);if(u==='/retreats'){await p.mouse.wheel(0,1000);await p.waitForTimeout(2500)}await p.screenshot({path:`shots/rebuild/final/${n}.png`});await p.close()}
await b.close();
