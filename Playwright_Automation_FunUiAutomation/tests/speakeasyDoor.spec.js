import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Speakeasy Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_SpeakeasyDoorUrl();
})


test('testing all the elements of the speakeasy door page', async ({ page }) => {
    // await page.pause();
    await expect(page.locator('#context-menu-door')).toBeVisible();
    await expect(page.locator('#context-menu-door')).toBeEnabled();
    await expect(page.locator('#context-menu-knocker')).toBeVisible();
    await expect(page.locator('#context-menu-knocker')).toBeEnabled();
    await expect(page.locator('#context-menu-result')).toBeVisible();
    await expect(page.locator('#context-menu-result')).toHaveText('The alley is quiet. Suspiciously quiet.');
    await expect(page.locator('#context-menu-popup')).toBeHidden();
})


test('testing the door button menu opening and closing', async ({ page }) => {
    // await page.pause();
    await page.locator('#context-menu-door').click({ button: 'right' });
    await expect(page.locator('#context-menu-popup')).toBeVisible();
    await expect(page.locator('#context-menu-item-1')).toBeVisible();
    await expect(page.locator('#context-menu-item-1')).toBeEnabled();
    await expect(page.locator('#context-menu-item-1')).toHaveText('Order the "coffee"');
    await expect(page.locator('#context-menu-item-2')).toBeVisible();
    await expect(page.locator('#context-menu-item-2')).toBeEnabled();
    await expect(page.locator('#context-menu-item-2')).toHaveText('Ask for the password');
    await expect(page.locator('#context-menu-item-3')).toBeVisible();
    await expect(page.locator('#context-menu-item-3')).toBeEnabled();
    await expect(page.locator('#context-menu-item-3')).toHaveText('Leave quietly');
    await page.locator('#context-menu-popup').hover();
    await page.keyboard.press('Escape');
    await expect(page.locator('#context-menu-popup')).toBeHidden();
})


test('testing the door menu buttons with mouse', async ({ page }) => {
    // await page.pause();
    await page.locator('#context-menu-door').click({ button: 'right' });
    await page.locator('#context-menu-item-1').click();
    await expect(page.locator('#context-menu-popup')).toBeHidden();
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Order the "coffee". The doorman nods slowly.');
    await page.locator('#context-menu-door').click({ button: 'right' });
    await page.locator('#context-menu-item-2').click();
    await expect(page.locator('#context-menu-popup')).toBeHidden();
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Ask for the password. The doorman nods slowly.');
    await page.locator('#context-menu-door').click({ button: 'right' });
    await page.locator('#context-menu-item-3').click();
    await expect(page.locator('#context-menu-popup')).toBeHidden();
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Leave quietly. The doorman nods slowly.');
})


test('testing the door menu buttons with keyboard', async ({ page }) => {
    // await page.pause();
    await page.locator('#context-menu-door').focus();
    await page.keyboard.press('Shift+F10');
    await expect(page.locator('#context-menu-popup')).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Order the "coffee". The doorman nods slowly.');
    await page.locator('#context-menu-door').focus();
    await page.keyboard.press('Shift+F10');
    await expect(page.locator('#context-menu-popup')).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Ask for the password. The doorman nods slowly.');
    await page.locator('#context-menu-door').focus();
    await page.keyboard.press('Shift+F10');
    await expect(page.locator('#context-menu-popup')).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.locator('#context-menu-result')).toHaveText('You chose: Leave quietly. The doorman nods slowly.');
})