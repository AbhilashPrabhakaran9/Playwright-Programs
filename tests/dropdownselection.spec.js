import test from "@playwright/test";

test("Dropdown selections",async({page})=>{

    await page.goto("https://selenium.qabible.in/select-input.php");

    //Dropdown selection sre doing by different ways: selectByIndex, ByValue, ByVisibleText

    const ddselections = await page.locator("#single-input-field");
    ddselections.selectOption({index:1}); //selectByIndex
    await page.waitForTimeout(2000);
    ddselections.selectOption('Yellow'); //selectByValue
    await page.waitForTimeout(2000);
    ddselections.selectOption({label:'Green'}); //selectByVisibleText
    await page.waitForTimeout(2000);

    //await page.pause();

});