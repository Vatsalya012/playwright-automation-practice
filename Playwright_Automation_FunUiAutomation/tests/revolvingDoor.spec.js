import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('opening the Revolving Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_RevolvingDoorUrl();
})


//checking all the elements of the revolving door page
test('testing all the elements of revolving door page', async ({ page }) => {
    // await page.pause();
    await expect(general.revolvingDoor_btnCycleDoor).toBeVisible();
    await expect(general.revolvingDoor_btnCycleDoor).toBeEnabled();
    await expect(general.revolvingDoor_btnCycleDoor).toHaveText(/Cycle the door/);
    await expect(general.revolvingDoor_autoCycle).toBeVisible();
    await expect(general.revolvingDoor_autoCycle).toBeEnabled();
    await expect(general.revolvingDoor_autoCycle).toHaveAttribute('type', 'checkbox')
    await expect(general.revolvingDoor_autoCycle).not.toBeChecked();
    await expect(page.getByLabel('Auto-cycle')).toHaveCount(1);
    await expect(general.revolvingDoor_Count).toBeVisible();
    await expect(general.revolvingDoor_Count).toHaveText('Cycle #0');
    await expect(general.revolvingDoor_guest1).toBeVisible();
    await expect(general.revolvingDoor_guest1).toHaveText('Rosencrantz');
    await expect(general.revolvingDoor_guest2).toBeVisible();
    await expect(general.revolvingDoor_guest2).toHaveText('Guildenstern');
    await expect(general.revolvingDoor_guest3).toBeVisible();
    await expect(general.revolvingDoor_guest3).toHaveText('Fortinbras');
    await expect(general.revolvingDoor_guest4).toBeVisible();
    await expect(general.revolvingDoor_guest4).toHaveText('Ophelia');
    await expect(general.revolvingDoor_Result).toBeVisible();
    await expect(general.revolvingDoor_Result).toHaveText('Currently at the door: Rosencrantz, Guildenstern, Fortinbras, Ophelia.');
})


//checking that list gets suffles when clicking the cycle the door button
test('Testing element suffles on button click', async () => {
    // await page.pause();
    const oldItemList = await general.revolvingDoor_guestList.allTextContents();

    await general.revolvingDoor_btnCycleDoor.click();

    const newItemList = await general.revolvingDoor_guestList.allTextContents();

    expect(
        JSON.stringify(newItemList) !== JSON.stringify(oldItemList)
    ).toBeTruthy();

    await expect(general.revolvingDoor_Count).toHaveText('Cycle #1');
    await expect(general.revolvingDoor_Result).toHaveText(`Currently at the door: ${newItemList.join(', ')}.`);
})


//checking that the list gets suffles when checking the auto checkbox
test('testing element suffles with auto checkbox', async () => {
    // await page.pause();
    await general.revolvingDoor_autoCycle.click();
    await expect(general.revolvingDoor_Count).toHaveText('Cycle #1', { timeout: 2000 });
    await expect(general.revolvingDoor_Count).toHaveText('Cycle #2', { timeout: 2000 });
    await expect(general.revolvingDoor_Count).toHaveText('Cycle #3', { timeout: 2000 });
    await expect(general.revolvingDoor_Count).toHaveText('Cycle #4', { timeout: 2000 });
    // await page.pause();
})