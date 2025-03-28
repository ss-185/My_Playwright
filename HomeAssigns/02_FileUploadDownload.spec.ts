import {test,expect} from "@playwright/test";
import fs from 'fs';

test("FileUpload in salesforce ",async({page})=>{

    // File upload 
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.waitForLoadState("load");
    await page.locator(`(//input[@type='file'])[1]`).setInputFiles("tests/Data/Hello.txt"); // upload text file
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      const filepromise=page.waitForEvent('filechooser');  // image upload using file chooser
      page.locator(`//div[@id='drag-drop-upload']`).click();
      const imageupload =await filepromise;
      await imageupload.setFiles("tests/Data/Pic.png");
    const filename =  page.locator(`//input[@id='file-upload']`);   // filename assertion
    await page.waitForTimeout(3000); 
    const uploadedFilename = await filename.inputValue();
    if(uploadedFilename.includes('Hello'))
    {
        console.log(" file uploaded is Hello.txt");
    }
    else{
        console.log(" some other file is uploaded");
    }

    // file download
    await page.goto("https://the-internet.herokuapp.com/download");
    await page.waitForLoadState("load");
    const fileDownload=page.waitForEvent('download')
    page.locator(`//div[@class='example']/a[text()='file.json']`).click();
    const fdown=await fileDownload;
    const filepath = `download/File${new Date().getHours()}.png`;
    await fdown.saveAs(filepath);
    if (fs.existsSync(filepath)) {
        console.log("File is downloaded", filepath);
    } else {
        console.log("File not downloaded");
    }
})

