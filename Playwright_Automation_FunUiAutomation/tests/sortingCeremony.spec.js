import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the sorting Ceremony url', async ({ page }) => {
    general = new General(page);
    await general.goto_SortingCeremonyUrl();
})


test('testing the native dropdown', async ({ page }) => {
    //Actual Native Dropdown With Select
    await general.sortingceremony_dropdownNative.selectOption({ label: "Please select a house" });
    await expect(general.sortingceremony_dropdownResult).toHaveText('No sorting yet — both hats are waiting.');
    await general.sortingceremony_dropdownNative.selectOption({ label: "Emberclaw" });
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Emberclaw');
    await general.sortingceremony_dropdownNative.selectOption({ label: "Frostfen" });
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Frostfen');
    await general.sortingceremony_dropdownNative.selectOption({ label: "Thornwood" });
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Thornwood');
    await general.sortingceremony_dropdownNative.selectOption({ label: "Moonspire" });
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Moonspire');

    //Custom dropdown with button click and keyboard action on itemlist
    await expect(general.sortingceremony_dropdownCustom).toHaveText(/Please select a house/);
    await general.sortingceremony_dropdownCustom.click();
    await page.keyboard.press('Enter');
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Moonspire · custom hat: Emberclaw');
    await general.sortingceremony_dropdownCustom.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Moonspire · custom hat: Frostfen');
    await general.sortingceremony_dropdownCustom.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Moonspire · custom hat: Thornwood');
    await general.sortingceremony_dropdownCustom.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.sortingceremony_dropdownResult).toHaveText('native hat: Moonspire · custom hat: Moonspire');
    await page.waitForTimeout(1000);
})