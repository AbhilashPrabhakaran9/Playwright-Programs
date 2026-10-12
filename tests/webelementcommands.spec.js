import test from "@playwright/test";

test("Webelement commands",async({page})=>{

    await page.goto("https://selenium.qabible.in/simple-form-demo.php");

    await page.locator("#single-input-field").fill("ABHILASH");

    await page.locator(".btn.btn-primary").nth(0).click();


});