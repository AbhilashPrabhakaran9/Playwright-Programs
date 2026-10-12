import test from "@playwright/test";

test("21 May Web Element Commands", async({page})=>{

await page.goto("https://selenium.qabible.in/simple-form-demo.php");

await page.locator("#single-input-field").fill("ABHI"); //fill for entering data

await page.locator(".btn.btn-primary").nth(0).click(); //.nth(0) = .first() , click for clicking

await page.waitForTimeout(2000); //Waiting 2 seconds

console.log(await page.locator("#message-one").textContent()); //textcontent() for verifying
//comparing/validating/display the web element's text.


});