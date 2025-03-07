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
    await page.locator(` (//input[@type='search'])[3] `).fill("Individuals");
    await page.waitForTimeout(3000);
    await page.locator(`//mark[contains(text(),'Individuals')]`).click();


    await page.waitForTimeout(2000);
    await page.locator(`//a[@class='slds-context-bar__label-action dndItem']//span[contains(text(),'Individuals')]`).click();

    await page.locator(`//input[@name='Individual-search-input']`).fill("test");  
   
    await page.locator(`//a[@class='slds-context-bar__label-action dndItem']//span[contains(text(),'Individuals')]`).click();
    await page.locator(`(//div[@class='forceVirtualActionMarker forceVirtualAction'])[1] `).click();
    await page.locator(`//a[@title='Edit'] `).click();
    await page.locator(` //ul[@class='scrollable']//li[2]//a[text()='Mr.']`).click();

  
    await page.locator(`//input[@placeholder='First Name'] `).fill("firsttest");
    await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']'] `).click();
    

})