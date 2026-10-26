import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the apothecary index url', async ({ page }) => {
    general = new General(page);
    await general.goto_ApothecaryIndexUrl();
})


//checking the apothecary index input field with combobox list
test('Testing the apothecary index input field with combobox list', async () => {
    // await page.pause();
    await expect(general.apothecary_input).toBeVisible();
    await expect(general.apothecary_input).toBeEnabled();
    await expect(general.apothecary_input).toHaveAttribute('placeholder', 'e.g. moon…');
    await expect(general.apothecary_result).toBeVisible();
    await expect(general.apothecary_result).toHaveText('Nothing selected. The shelves wait.');
    await general.apothecary_input.fill('m');
    await expect(general.apothecary_comboListBox).toBeVisible();
    await expect(general.apothecary_comboListBox).not.toBeEmpty();
})


//checking the apothecary index input field with mouse click event
test('Testing the apothecary index with mouse click', async () => {
    // await page.pause();
    await general.apothecary_input.pressSequentially('ghost', { delay: 200 });
    await expect(general.apothecary_comboListBox).toBeVisible();
    await expect(general.apothecary_comboListBox).not.toBeEmpty();
    await expect(general.apothecary_comboListBox).toContainText('Ghost pepper (actual ghost)');
    await general.apothecary_comboListBox.getByText('Ghost pepper (actual ghost)').click();
    await expect(general.apothecary_result).toHaveText('Selected: Ghost pepper (actual ghost) · 2 jars in stock');
})


//checking the apothecary index input field with keyboard press event
test('testing the apothecary index with keyboard arrow keys', async ({ page }) => {
    // await page.pause();
    await general.apothecary_input.press('m');
    await expect(general.apothecary_comboListBox).toBeVisible();
    await expect(general.apothecary_comboListBox).not.toBeEmpty();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.apothecary_comboListBox).toHaveText(/Moonpetal/);
    await expect(general.apothecary_result).toHaveText('Selected: Moonpetal · 7 jars in stock');
})