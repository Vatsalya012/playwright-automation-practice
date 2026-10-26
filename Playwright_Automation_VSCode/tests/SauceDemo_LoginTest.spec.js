import { test, expect } from '@playwright/test'

// //-----------------------------------------------------------user: Standard_user
// test('Sauce Demo Login Page with standard_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('standard_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

// //-----------------------------------------------------------user: locked_out_user
// test('Sauce Demo Login Page with locked_out_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('locked_out_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

// //-----------------------------------------------------------user: problem_user
// test('Sauce Demo Login Page with problem_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('problem_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

// //-----------------------------------------------------------user: performance_glitch_user
// test('Sauce Demo Login Page with performance_glitch_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('performance_glitch_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

// //-----------------------------------------------------------user: error_user
// test('Sauce Demo Login Page with error_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('error_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

// //-----------------------------------------------------------user: visual_user
// test('Sauce Demo Login Page with visual_user', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com')
//     //await page.pause()
//     await page.locator('[data-test="username"]').fill('visual_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
// })

//-----------------------------------------------------------Assertion for Present/Not Present
test('Assertions Demo for Present/Not Prensent', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.pause()
    //Assertion start here
    //checking the page heading is present or not
    await expect(page.getByText('Swag Labs')).toHaveCount(1);
    await page.getByText('Swag Labs').click();
})