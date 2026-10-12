//SAUCEDEMO WEBSITE - Playwright Typescript with Page Object Model Design Pattern

//const {test,expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';
import type{Page} from '@playwright/test'; //Difference here (TS vs JS)
import loginpage from '../pages-ts/loginpage.js';//i can use .js extension instead of .ts

test('Page Playwright test',async({page}:{page:Page})=>{ //Difference here (TS vs JS)

    await page.goto("https://www.saucedemo.com/");

    const lp = new loginpage(page);
    await lp.usernamearea("standard_user");
    //await page.locator("#user-name").fill("standard_user");

    await lp.passwordarea("secret_sauce");
    //await page.locator("#password").fill("secret_sauce");

    lp.loginarea();''
    //await page.locator("#login-button").click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});