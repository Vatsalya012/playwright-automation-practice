import { test, expect } from '@playwright/test'
import { General } from '../Pages/general';

let general;

test.beforeEach('Open Central Park Staff Login Url', async ({ page }) => {
    general = new General(page);
    await general.goto_StaffLoginUrl();
})


//test to check the login form with valid data
test('Testing login form with valid data', async ({ page }) => {
    await general.valid_centralParkStaffLogin();
    await general.btnSuccessLogin.click();
    // await page.pause();
    await expect(page).toHaveURL('https://funui.dev/challenges/login/secure');
    await expect(page.locator('.flash-success')).toContainText(/You logged into the staff room. The espresso machine missed you./);
    await page.waitForTimeout(5000);
    //for logout
    await general.btnStaffLogout.click();
    await expect(page).toHaveURL('https://funui.dev/challenges/login');
    await page.waitForTimeout(5000);
})


//test to check the login form with invalid data
test('Testing login form with Invalid data', async ({ page }) => {
    await general.staffUsername.fill('gunther');
    await general.staffPassword.fill('Central Perk123!');
    await general.btnSuccessLogin.click();
    await expect(page.locator('.flash-error')).toContainText(/Wrong credentials. Gunther is watching you suspiciously./);
    await page.waitForTimeout(5000);
})