import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the url', async ({ page }) => {
    general = new General(page);
    await general.goto_StarterLabUrl();
})


//test the initial state if all the elements on the page
test('checking the initial state of all elements', async ({ page }) => {
    // await page.pause();
    await expect(general.starterlab_checkboxEmber).not.toBeChecked();
    await expect(general.starterlab_checkboxSquirt).toBeChecked();
    await expect(general.starterlab_checkboxSprout).toBeDisabled();
    await expect(general.starterlab_radioFire).not.toBeChecked();
    await expect(general.starterlab_radioWater).not.toBeChecked();
    await expect(general.starterlab_radioGrass).not.toBeChecked();
    await expect(general.starterlab_Summary).toHaveText('Team: Squirtlekin · Preferred type: (none)');
})


//test to check the dynamic checked state of checkbox and radiobutton
test('Reading checked state of checkbox and radiobutton', async ({ page }) => {
    // await page.pause();
    await general.starterlab_checkboxEmber.click();
    await expect(general.starterlab_Summary).toHaveText('Team: Emberpup + Squirtlekin · Preferred type: (none)');
    await general.starterlab_checkboxSquirt.click();
    await expect(general.starterlab_Summary).toHaveText('Team: Emberpup · Preferred type: (none)');
    await general.starterlab_radioFire.click();
    await expect(general.starterlab_radioFire).toBeChecked();
    await expect(general.starterlab_radioWater).not.toBeChecked();
    await expect(general.starterlab_radioGrass).not.toBeChecked();
    await expect(general.starterlab_Summary).toHaveText('Team: Emberpup · Preferred type: fire');
    await general.starterlab_radioWater.click();
    await expect(general.starterlab_radioFire).not.toBeChecked();
    await expect(general.starterlab_radioWater).toBeChecked();
    await expect(general.starterlab_radioGrass).not.toBeChecked();
    await expect(general.starterlab_Summary).toHaveText('Team: Emberpup · Preferred type: water');
    await general.starterlab_radioGrass.click();
    await expect(general.starterlab_radioFire).not.toBeChecked();
    await expect(general.starterlab_radioWater).not.toBeChecked();
    await expect(general.starterlab_radioGrass).toBeChecked();
    await expect(general.starterlab_Summary).toHaveText('Team: Emberpup · Preferred type: grass');
})