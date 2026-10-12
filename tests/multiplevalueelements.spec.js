import test from '@playwright/test';

//Checkbox interaction
test("Checkbox Demo", async({page})=>{

await page.goto("https://selenium.qabible.in/check-box-demo.php");

await page.locator("#check-box-one").click(); //Checkbox clicking

console.log(await page.locator("#check-box-two").isChecked()); //Returns false 
console.log(await page.locator("#check-box-one").isChecked()); //Returns true

//isVisible() function
console.log(await page.locator("#check-box-two").isVisible()); //Opposite is isHidden()


await page.waitForTimeout(2000);

});

//Radio Button
test("Radio button demo", async({page})=>{

    await page.goto("https://selenium.qabible.in/radio-button-demo.php");

    await page.locator("#inlineRadio1").click();
    //isEnabled()function
    console.log(await page.locator("#inlineRadio1").isEnabled()); //Returned true
    console.log(await page.locator("#inlineRadio1").isDisabled()); //Returned false

    await page.waitForTimeout(2000);


});

//Dropdown button interaction
test("Dropdown demo", async({page})=>{

    await page.goto("https://selenium.qabible.in/select-input.php");

    const qadropdown = await page.locator("#single-input-field");

    await qadropdown.selectOption({index:1}); //selectByIndex

    await page.waitForTimeout(2000);

    await qadropdown.selectOption('Yellow'); //selectByValue

    await page.waitForTimeout(2000);

    //await qadropdown.selectOption({label:'Green'}); //selectByVisibleText or Label
    await qadropdown.selectOption({label:'Blue'}); //Checking the negative scenario

    await page.waitForTimeout(2000);
    
    //waitForLoadState
    await page.waitForLoadState('networkidle'); //Evidae time mention cheyilla, Evidae time 
    //matter cheyunilla, Ethu URL load cheyumbol slowness varuka, anganae ulla time-il 
    //ee wait use cheyunnu. Network idle means network stable. URL connection successfully 
    //execute and stop cheythittu continue cheythollu.


    //waitForSelector
    await page.waitForSelector("#single-input-field");

    //waitForURL
    await page.waitForURL("https://selenium.qabible.in/select-input.php");



});

//12-06-2026 My batch video extra codes

test.only("Checkbox interactions", async({page})=>{

    await page.goto("https://selenium.qabible.in/check-box-demo.php");

    await page.locator("#gridCheck").check();
    console.log(await page.locator("#gridCheck").isChecked()); //Default value false aanu.
    console.log(await page.locator("#gridCheck").isEnabled()); 
    console.log(await page.locator("#gridCheck").isVisible());

    //await page.pause(); //Debug mode
});



