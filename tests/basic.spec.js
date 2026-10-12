import test from "@playwright/test";

test.only('basic playwright test',async({page})=>{

    await page.goto("https://www.w3schools.com/");

    console.log(await page.title()); //page.title is an action which performs, action perform 
    //cheyumbol async-intae kodae await use cheyyannam. async keyword ennu kodukumbol promise-nae 
    //expect cheyunundu. promise-nae return cheyaan await ennu kodukkuka.


}); 

//test - keyword, title - test case name should be unique , 
//async - for executing asynchronously , 
// fixture - predefined built in or customised functions that can be used in test script 
// such as browser, context, page, request

test('@smoke qabible title',async({page})=>{ //Tagging for grouping - @smoke
await page.goto("https://selenium.qabible.in/");

console.log(await page.title());
});