import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Throttle Lever page', async ({ page }) => {
    general = new General(page);
    await general.goto_ThrottleLeverUrl();
})


//checking all the elements o the throttle lever page
test('testing all the elements of the throttle lever page', async () => {
    // await page.pause();
    await expect(general.throttleLever_autoPilot).toBeVisible();
    await expect(general.throttleLever_autoPilot).toBeEnabled();
    await expect(general.throttleLever_autoPilot).toHaveAttribute('type', 'range');
    await expect(general.throttleLever_autoPilot).toHaveAttribute('min', '0');
    await expect(general.throttleLever_autoPilot).toHaveAttribute('max', '100');
    await expect(general.throttleLever_autoPilot).toHaveAttribute('step', '5');
    await expect(general.throttleLever_autoPilotValue).toBeVisible();
    await expect(general.throttleLever_autoPilotValue).toHaveText('50%');

    await expect(general.throttleLever_customPilot).toBeVisible();
    await expect(general.throttleLever_customPilot).toBeEnabled();
    await expect(general.throttleLever_customPilot).toHaveAttribute('aria-valuenow', '30');
    await expect(general.throttleLever_customPilot).toHaveAttribute('aria-valuemin', '0');
    await expect(general.throttleLever_customPilot).toHaveAttribute('aria-valuemax', '100');
    await expect(general.throttleLever_customPilotValue).toBeVisible();
    await expect(general.throttleLever_customPilotValue).toHaveText('30%');

    await expect(general.throttleLever_Result).toBeVisible();
    await expect(general.throttleLever_Result).toHaveText('autopilot: 50% · co-pilot: 30%');
})


//checking the slider for the autopilot element with keyboard press
test('testing the autopilot slider element', async ({ page }) => {
    // await page.pause();
    await general.throttleLever_autoPilot.focus();
    await page.keyboard.press('ArrowLeft');
    await expect(general.throttleLever_autoPilotValue).toHaveText('45%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 45% · co-pilot: 30%');
    await general.throttleLever_autoPilot.focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(general.throttleLever_autoPilotValue).toHaveText('65%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 65% · co-pilot: 30% · ✈️ Perfect cruise thrust on the autopilot!');
    await general.throttleLever_autoPilot.focus();
    await page.keyboard.press('Home');
    await expect(general.throttleLever_autoPilotValue).toHaveText('0%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 0% · co-pilot: 30%');
    await general.throttleLever_autoPilot.focus();
    await page.keyboard.press('End');
    await expect(general.throttleLever_autoPilotValue).toHaveText('100%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 100% · co-pilot: 30%');
})


//checking the co-pilot slider with keyboard press
test('Testing the custom pointer slider', async ({ page }) => {
    // await page.pause();
    await general.throttleLever_customPilot.focus();
    await page.keyboard.press('ArrowLeft');
    await expect(general.throttleLever_customPilotValue).toHaveText('25%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 50% · co-pilot: 25%');
    await general.throttleLever_customPilot.focus();
    await page.keyboard.press('ArrowRight');
    await expect(general.throttleLever_customPilotValue).toHaveText('30%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 50% · co-pilot: 30%');
    await general.throttleLever_customPilot.focus();
    await page.keyboard.press('Home');
    await expect(general.throttleLever_customPilotValue).toHaveText('0%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 50% · co-pilot: 0%');
    await general.throttleLever_customPilot.focus();
    await page.keyboard.press('End');
    await expect(general.throttleLever_customPilotValue).toHaveText('100%');
    await expect(general.throttleLever_Result).toHaveText('autopilot: 50% · co-pilot: 100%');
})