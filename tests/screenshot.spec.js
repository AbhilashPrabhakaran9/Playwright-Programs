import {test,expect} from "@playwright/test";

test('qabible title',async({page})=>{
await page.goto("https://selenium.qabible.in/");

console.log(await page.title());

await page.screenshot({path: "Screenshot_Capture/screenshot.png"});

expect(await page.screenshot()).toMatchSnapshot('ObsquraKerala.png', {threshold: 0.2});
});