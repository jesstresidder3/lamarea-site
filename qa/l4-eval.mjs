import { chromium } from 'playwright';
const [,, path, expr, w='1440'] = process.argv;
const b=await chromium.launch();const p=await b.newPage({viewport:{width:+w,height:900}});
await p.goto('http://localhost:4322'+path,{waitUntil:'load'});await p.waitForTimeout(2500);
console.log(await p.evaluate(expr));await b.close();
