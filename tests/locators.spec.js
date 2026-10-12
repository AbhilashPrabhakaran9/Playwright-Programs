import test from "@playwright/test";

//For practice
test("Learn Locators",async({page})=>{

    await page.goto("https://selenium.qabible.in/simple-form-demo.php");
    
    //Using id attribute
    await page.locator('#button-two') //single or double quotes is fine

    //Using class attribute
    await page.locator('.form-control').nth(0); //Index value starts from 0 which 
    //is the first element

    //Using CSS selector format
    await page.locator("button[id='button-one']");

    //Relative xpath locator
    await page.locator("//button[@id='button-one']");

    //Absolute Xpath locator
    await page.locator('/html/body/section/div/div/div[2]/div[1]/div/div[2]/form/button');


})

//For practice
test('Write Locator',async({page})=>{

    await page.goto("https://selenium.qabible.in/simple-form-demo.php");

    await page.locator("#value-a") //Enter value A field

    await page.locator("input[class='form-control']").nth(2); //Enter value B field

    
});

//getByLabel
test('Special locators',async({page})=>{
await page.goto("https://selenium.qabible.in/select-input.php");

//Using getByLabel special locator
//Rules are 1. Label tag is mandatory 2. The value of for attribute inside label 
// tag and the value of id located should be same.Here single quotes-il label 
//tag-lae text kodukuka.

await page.getByLabel('Select Color')




});

//getByText //getByPlaceholder //getByRole
test("Special Locator", async({page})=>{

    await page.goto("https://selenium.qabible.in/simple-form-demo.php");
    
    await page.getByText("Show Message")
    
    await page.getByPlaceholder("Message");

    await page.getByRole("button", {name:"Show Message"});

    await page.getByPlaceholder("Enter Value").nth(0); //Enter value A field-Entervalue 
    //fields are 2 here totally.

});