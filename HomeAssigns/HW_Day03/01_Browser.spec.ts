// Red Bus and Flipkart in Edge and Firefox Browser Instances

import { chromium,firefox, test } from "@playwright/test"

test("Launch Browser",async ()=>{

    const browserEdge = await chromium.launch({channel: 'msedge' ,headless:false});  
    const contextEdge = await browserEdge.newContext();
    const pageEdge = await contextEdge.newPage();

    await pageEdge.goto("https://www.redbus.in");
    console.log(` Page title is ${await pageEdge.title()} `);
    console.log(` Page url  is ${pageEdge.url()} `);



    const browserFirefox = await firefox.launch({headless:false});  
    const contextFirefox = await browserFirefox.newContext();
    const pageFirefox = await contextFirefox.newPage();

    await pageFirefox.goto("https://www.flipkart.com");
    console.log(` Page title is ${await pageFirefox.title()} `);
    console.log(` Page url  is ${pageFirefox.url()} `);

})