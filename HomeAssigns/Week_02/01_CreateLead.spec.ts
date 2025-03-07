

import { test } from "@playwright/test"

test.use({ headless: false }); 
test("Salesforce Create Lead",async ({page})=>{ 

    await page.goto(`https://login.salesforce.com/`); 
  
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123"); 
    await page.locator("#Login").click();
    await page.waitForTimeout(8000);
    const title = await page.title();
    console.log(title);
   
    await page.locator(`//button[@title='App Launcher']`).click();
    await page.locator(` (//button[@class='slds-button'])[2] `).click();
    await page.locator(` //span//p[text()='Sales'] `).click();    
    await page.waitForLoadState("load");
    await page.locator(` //div[@role='list']//span[text()='Leads'] `).click();
    await page.locator(`   //div[@title='New'] `).click(); 
    await page.locator(`   //button[@name='salutation'] `).click();
    await page.locator("//span[@class='slds-media__body']//span[text()='Mrs.']").click()

    await page.waitForTimeout(5000);
    await page.locator(`//input[@name='lastName'] `).fill("Saranya");
    await page.locator(`//input[@name='Company'] `).fill("ADF");
    await page.locator(` //button[@name='SaveEdit'] `).click();
  



})
