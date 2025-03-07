import { chromium, test } from "@playwright/test"

test("Launch Browser",async ()=>{

    const browser = await chromium.launch({channel:'chrome'});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(2000);
    console.log(` Page title is ${await page.title()} `);
    console.log(` Page url  is ${page.url()} `);

    await page.locator("#username").fill("demoSalesManager");
    await page.locator("#password").fill("crmsfa");   
    await page.locator(".decorativeSubmit").click();
    
    const title = await page.title();
    console.log(title);

    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();


    await page.locator(` //input[@id='createLeadForm_companyName']`).fill("TCS");
    await page.locator(` //input[@id='createLeadForm_firstName'] `).fill("AAA");
    await page.locator(` //input[@id='createLeadForm_lastName'] `).fill("SSS");
    await page.locator(`//input[@value='Create Lead']`).scrollIntoViewIfNeeded();
    await page.locator(` //input[@value='Create Lead']  `).click();
    await page.locator(` //div[@class='frameSectionExtra']//a[contains(text(),'Edit')]  `).click();
    await page.locator(` //input[@id='updateLeadForm_companyName'] `).fill("CTS");
    await page.locator(` //input[@value='Update'] `).click();


})