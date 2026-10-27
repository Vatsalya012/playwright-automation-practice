import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Throttle Lever page', async ({ page }) => {
    general = new General(page);
    await general.goto_ThrottleLeverUrl();
})


test('testing all the elements of the throttle lever page', async ({ page }) => {
    await page.pause();
})