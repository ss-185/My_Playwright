// Learn to automate uploading and downloading a file

import {test,expect} from "@playwright/test";
import path from "path";

test("FileUpload in salesforce ",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123"); 
    await page.locator("#Login").click();
    await page.waitForLoadState("load");
  
   
    await page.locator(`//button[@title='App Launcher']`).click();
    await page.locator(`(//button[@class='slds-button'])[2]`).click();
    await page.locator(`//span//p[text()='Accounts']`).click();    
    await page.waitForLoadState("load");
    await page.locator(`//div[@title='New']`).click();
    await page.locator(`//input[@name='Name']`).fill("TestLeaf");
    await page.waitForLoadState("load");
    await page.locator(`//div[@class='slds-grid slds-size_1-of-1 label-stacked']`).filter({hasText:"Rating"}).locator("//span[text()='--None--']").click();
    await page.locator(`//span[text()='Warm']`).click();
    await page.locator(`//div[@class='slds-grid slds-size_1-of-1 label-stacked']`).filter({hasText:"Type"}).locator("//span[text()='--None--']").click();
    await page.locator(`//span[text()='Prospect']`).click();
    await page.locator(`//div[@class='slds-grid slds-size_1-of-1 label-stacked']`).filter({hasText:"Industry"}).locator("//span[text()='--None--']").click();
    await page.locator(`//span[text()='Banking']`).click();
    await page.locator(`//div[@class='slds-grid slds-size_1-of-1 label-stacked']`).filter({hasText:"Ownership"}).locator("//span[text()='--None--']").click();
    await page.locator(`//span[text()='Public']`).click();
    await page.locator(`//button[@name='SaveEdit']`).click();
    const toastMsg = page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`);
    await expect(toastMsg).toBeVisible();
    await page.waitForLoadState("load");
    await page.locator(`//input[@type='file']`).setInputFiles("tests/Data/sampleupload.txt");
    const doneBtn = page.locator(`//span[text()='Done']`);
    await expect(doneBtn) .toBeVisible({timeout : 3000});
    await doneBtn.click();
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
    const filename = page.locator(`//span[@class='itemTitle slds-text-body--regulardesktop uiOutputText']`);
    await expect(filename).toBeVisible({timeout:5000});
    const uploadedFilename = await filename.innerText();
    if(uploadedFilename==='sampleupload')
    {
        console.log(" file uploaded sampleupload");
    }
    else{
        console.log(" some other file is uploaded");
    }


})
