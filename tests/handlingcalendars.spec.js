import test from '@playwright/test';

test("@smoke Calendar Handling", async({page})=>{ //Tagging for grouping- @smoke

await page.goto("https://selenium.qabible.in/date-picker.php");

await page.locator(".fa.fa-calendar").nth(0).click();

let tablelocator = await page.locator("//table[@class='table-condensed']").nth(0); //Contains 
//Relative xpath

await page.waitForTimeout(2000);

await tablelocator.locator("xpath =.//tbody/tr[1]/td[6]").click();
//(Relative xpath + //Absoloute xpath)
// Here dot means the above tablelocator's xpath and double forward slashes means oru xpath format
//aanu expect cheyunnathu ennu. so xpath equals ennu pecify cheythu tharunnu.

await page.waitForTimeout(2000);

await page.locator("#button-one").click();


});