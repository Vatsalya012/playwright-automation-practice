import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the time circuits url', async ({ page }) => {
    // await page.pause();
    general = new General(page);
    await general.goto_TimeCircuitsUrl();
})


//checking all the elements of time circuit page
test('Testing all the elements of time circuit page', async () => {
    // await page.pause();
    await expect(general.timeCircuit_btnPrev).toBeVisible();
    await expect(general.timeCircuit_btnPrev).toBeEnabled();
    await expect(general.timeCircuit_Month).toBeVisible();
    await expect(general.timeCircuit_Month).toHaveText('October 2015');
    await expect(general.timeCircuit_btnNext).toBeVisible();
    await expect(general.timeCircuit_btnNext).toBeEnabled();
    await expect(general.timeCircuit_Value).toBeVisible();
    await expect(general.timeCircuit_Value).toHaveText('No date set. The flux capacitor idles.');
    await expect(general.timeCircuit_Native).toBeVisible();
    await expect(general.timeCircuit_Native).toBeEnabled();
    await expect(general.timeCircuit_Native).toHaveAttribute('type', 'date');
    await expect(general.timeCircuit_nativeValue).toBeVisible();
    await expect(general.timeCircuit_nativeValue).toHaveText('Backup circuits empty.');
})


//checking the navigation button of date picker with mouse and keyboard
test('Testing the date picker months navigation buttons with mouse and keyboard', async ({ page }) => {
    // await page.pause();
    await general.timeCircuit_btnPrev.click();
    await expect(general.timeCircuit_Month).toHaveText('September 2015');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Enter');
    await expect(general.timeCircuit_Month).toHaveText('August 2015');
    await general.timeCircuit_btnNext.click();
    await expect(general.timeCircuit_Month).toHaveText('September 2015');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    await expect(general.timeCircuit_Month).toHaveText('October 2015');
})


//checking the date selection of date picker with mouse and keyboard
test('Testing the date pickers date selection with mouse and keyboard', async ({ page }) => {
    // await page.pause();
    await page.locator('#date-picker-day-2015-10-15').click();
    await expect(general.timeCircuit_Value).toHaveText('Destination time: 2015-10-15');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    await expect(general.timeCircuit_Value).toHaveText('Destination time: 2015-10-16');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Enter');
    await expect(general.timeCircuit_Value).toHaveText('Destination time: 2015-10-15');
})


//checking the native date picker with valid date
test('Testing the native date picker', async () => {
    // await page.pause();
    await general.timeCircuit_Native.click();
    await general.timeCircuit_Native.pressSequentially('01022003', { delay: 300 });
    await expect(general.timeCircuit_nativeValue).toHaveText('Backup circuits read: 2003-02-01')
})