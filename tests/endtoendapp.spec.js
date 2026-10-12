//TASK GIVEN BY MADAM
import {test,expect} from "@playwright/test";
import loginpage from "../pages/loginpage.js"; //loginpage is the classname
import homepage from "../pages/homepage.js";
import cartpage from "../pages/cartpage.js";
import checkoutpage from "../pages/checkoutpage.js";
import purchasepage from "../pages/purchasepage.js";

test("Sauce Demo", async({page})=>{

    await page.goto("https://www.saucedemo.com/");
//========================
    //Login
    const lp = new loginpage(page);  //Object creation for loginpage.js
    //Here loginpage is class name
    await lp.enterUsername("standard_user"); //Page Object Model implementation
    
    //await page.locator("#user-name").fill("standard_user");

    await lp.enterPassword("secret_sauce");
    //await page.locator("#password").fill("secret_sauce");
    await page.waitForTimeout(2000);
    
    await lp.clickLogin();
    //await page.locator("#login-button").click();

    //Assertion after click login
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    //HomePage Access - Dropdown selection
    const hp = new homepage(page);
    await hp.dropdownselect();
    //let saucedropdown = page.locator(".product_sort_container");
    //await page.waitForTimeout(2000);
    //await saucedropdown.selectOption({index:2});

    await page.waitForTimeout(2000);

    //Product selection
    await hp.product();
    //await page.locator(".inventory_item_name ").nth(2).click();

    await page.waitForTimeout(2000);


    const cp = new cartpage(page);
    await cp.addtocart();
    //Add to cart click
    //await page.locator(".btn.btn_primary.btn_small.btn_inventory").click();

    await cp.carticon();
    //Cart icon click
    //await page.locator(".shopping_cart_link").click();


    const chp = new checkoutpage(page);
    await chp.checkclick();
    //Checkout click
    //await page.locator("#checkout").click();

    //Checkout Field filling

    await chp.checkfillfname("akshay");
    await chp.checkfilllname("kumar");
    await chp.checkfillpost("5689");
    await chp.cclick();

    //await page.locator("#first-name").fill("Akshay");
    //await page.locator("#last-name").fill("Kumar");
    //await page.locator("#postal-code").fill("8923");
    await page.waitForTimeout(2000);
    //await page.locator("#continue").click();


    const pp = new purchasepage(page);

    await pp.finishbutton();
    //Finish clicking
    //await page.locator("#finish").click();

    await page.waitForTimeout(2000);

    await pp.bhomebutton();
    //Back Home
    //await page.locator("#back-to-products").click();

    //Assertion step after clicking back Home
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //My expected 
    //result
    

});

//Next Task from Madam - Create page classes, then object creation for Add to cart page, checkout, 
// purchase pages same like login page --- Implement page object model here 
/*
1. LoginPage - Entering access credentials = loginpage.js Created and Done
2. HomePage - Dropdown, Product click = homepage.js Created and Done
3. CartPage - AddToCart button click, Cart Icon click = cartpage.js created and Done
4. Checkout page - Checkout click, Field filling = checkoutpage.js created and Done
5. PurchasePage - Finish button click, Back Home Click = purchasepage.js created and Done
*/

