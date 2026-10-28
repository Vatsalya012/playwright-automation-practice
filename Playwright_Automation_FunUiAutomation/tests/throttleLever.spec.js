import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Throttle Lever page', async ({ page }) => {
    general = new General(page);
    await general.goto_ThrottleLeverUrl();
})


test('testing all the elements of the throttle lever page', async ({ page }) => {
    await page.pause();
    await expect(page.locator('#slider-native')).toBeVisible();
    await expect(page.locator('#slider-native')).toBeEnabled();
    await expect(page.locator('#slider-native')).toHaveAttribute('type', 'range');
    await expect(page.locator('#slider-native')).toHaveAttribute('min', '0');
    await expect(page.locator('#slider-native')).toHaveAttribute('max', '100');
    await expect(page.locator('#slider-native')).toHaveAttribute('step', '5');
    await expect(page.locator('#slider-native-value')).toBeVisible();
    await expect(page.locator('#slider-native-value')).toHaveText('50%');
})