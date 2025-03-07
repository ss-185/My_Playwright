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
    await page.locator(`//mark[contains(text(),'Individuals')]`).click();


    await page.waitForTimeout(3000)
    await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']").click()
    await page.waitForTimeout(3000)


    await page.locator(`//span[contains(text(),'New Individual')]`).click();   
    await page.locator("//input[@class='lastName compoundBLRadius compoundBRRadius form-element__row input']").fill(`TestL`);
    await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click();
    await page.waitForTimeout(2000)
    

})