import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the paddock control url', async ({ page }) => {
    general = new General(page);
    await general.goto_PaddockControl();
})


//checking all the elements of the paddock page
test('testing all the elements of paddock control page', async () => {
    // await page.pause();
    await expect(general.paddockControl_voltage).toBeVisible();
    await expect(general.paddockControl_voltage).not.toBeEnabled();
    await expect(general.paddockControl_btnToggle).toBeVisible();
    await expect(general.paddockControl_btnToggle).toBeEnabled();
    await expect(general.paddockControl_btnToggle).toHaveText('Enable');
    await expect(general.paddockControl_checkGoat).toBeVisible();
    await expect(general.paddockControl_checkGoat).not.toBeChecked();
    await expect(general.paddockControl_checkGoat).toBeEnabled();
    await expect(general.paddockControl_btnToggleCheckbox).toBeVisible();
    await expect(general.paddockControl_btnToggleCheckbox).toBeEnabled();
    await expect(general.paddockControl_btnToggleCheckbox).toHaveText('Remove');
    await expect(general.paddockControl_message).toHaveText('All systems nominal. The goat is calm.');
})


//checking the voltage field with respect to the enable/disable toggle button
test('testing enable voltage field', async () => {
    // await page.pause();
    await expect(general.paddockControl_voltage).toHaveAttribute('placeholder', 'disabled');
    await general.paddockControl_btnToggle.click();
    await expect(general.paddockControl_voltage).toHaveAttribute('placeholder', 'e.g. 10');
    await expect(general.paddockControl_btnToggle).toHaveText('Disable');
    await expect(general.paddockControl_message).toHaveText("It's alive! The fence input is enabled.");
    await general.paddockControl_voltage.fill('10');
    await general.paddockControl_btnToggle.click();
    await expect(general.paddockControl_btnToggle).toHaveText('Enable');
    await expect(general.paddockControl_voltage).not.toBeEnabled();
    await expect(general.paddockControl_voltage).toHaveValue('10');
    await expect(general.paddockControl_message).toHaveText('Fence input disabled. Hold on to your butts.');
})


//checking the goat checkbox with respect to add/remove toggle button
test('testing the check box add and remove button', async ({ page }) => {
    // await page.pause();
    await general.paddockControl_checkGoat.click();
    await general.paddockControl_btnToggleCheckbox.click();
    await expect(general.paddockControl_message).toHaveText('The goat is gone. (T. rex says thanks.)');
    await expect(general.paddockControl_btnToggleCheckbox).toHaveText('Add');
    await expect(general.paddockControl_checkGoat).not.toBeVisible();
    await general.paddockControl_btnToggleCheckbox.click();
    await expect(general.paddockControl_btnToggleCheckbox).toHaveText('Remove');
    await expect(general.paddockControl_message).toHaveText('A new goat has been deployed to the paddock.');
    await expect(general.paddockControl_checkGoat).toBeVisible();
    await expect(page.locator("//label[@for='dynamic-controls-goat']")).toHaveText('Goat present in paddock');
})