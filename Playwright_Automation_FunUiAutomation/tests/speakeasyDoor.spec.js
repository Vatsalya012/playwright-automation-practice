import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Speakeasy Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_SpeakeasyDoorUrl();
})


//checking all the elements of the speakeasy door page
test('testing all the elements of the speakeasy door page', async () => {
    // await page.pause();
    await expect(general.speakeasyDoor_btnDoor).toBeVisible();
    await expect(general.speakeasyDoor_btnDoor).toBeEnabled();
    await expect(general.speakeasyDoor_btnKnock).toBeVisible();
    await expect(general.speakeasyDoor_btnKnock).toBeEnabled();
    await expect(general.speakeasyDoor_Result).toBeVisible();
    await expect(general.speakeasyDoor_Result).toHaveText('The alley is quiet. Suspiciously quiet.');
    await expect(general.speakeasyDoor_Popup).toBeHidden();
})


//checking the door button opens menu and close on escape key
test('testing the door button menu opening and closing', async ({ page }) => {
    // await page.pause();
    await general.speakeasyDoor_btnDoor.click({ button: 'right' });
    await expect(general.speakeasyDoor_Popup).toBeVisible();
    await expect(general.speakeasyDoor_btnItem1).toBeVisible();
    await expect(general.speakeasyDoor_btnItem1).toBeEnabled();
    await expect(general.speakeasyDoor_btnItem1).toHaveText('Order the "coffee"');
    await expect(general.speakeasyDoor_btnItem2).toBeVisible();
    await expect(general.speakeasyDoor_btnItem2).toBeEnabled();
    await expect(general.speakeasyDoor_btnItem2).toHaveText('Ask for the password');
    await expect(general.speakeasyDoor_btnItem3).toBeVisible();
    await expect(general.speakeasyDoor_btnItem3).toBeEnabled();
    await expect(general.speakeasyDoor_btnItem3).toHaveText('Leave quietly');
    await general.speakeasyDoor_Popup.hover();
    await page.keyboard.press('Escape');
    await expect(general.speakeasyDoor_Popup).toBeHidden();
})


//checking that door menu containing all the three buttons are clikable with mouse
test('testing the door menu buttons with mouse', async () => {
    // await page.pause();
    await general.speakeasyDoor_btnDoor.click({ button: 'right' });
    await general.speakeasyDoor_btnItem1.click();
    await expect(general.speakeasyDoor_Popup).toBeHidden();
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Order the "coffee". The doorman nods slowly.');
    await general.speakeasyDoor_btnDoor.click({ button: 'right' });
    await general.speakeasyDoor_btnItem2.click();
    await expect(general.speakeasyDoor_Popup).toBeHidden();
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Ask for the password. The doorman nods slowly.');
    await general.speakeasyDoor_btnDoor.click({ button: 'right' });
    await general.speakeasyDoor_btnItem3.click();
    await expect(general.speakeasyDoor_Popup).toBeHidden();
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Leave quietly. The doorman nods slowly.');
})


//checking that door menu containing all the three buttons are selectable using keyboard
test('testing the door menu buttons with keyboard', async ({ page }) => {
    // await page.pause();
    await general.speakeasyDoor_btnDoor.focus();
    await page.keyboard.press('Shift+F10');
    await expect(general.speakeasyDoor_Popup).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Order the "coffee". The doorman nods slowly.');
    await general.speakeasyDoor_btnDoor.focus();
    await page.keyboard.press('Shift+F10');
    await expect(general.speakeasyDoor_Popup).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Ask for the password. The doorman nods slowly.');
    await general.speakeasyDoor_btnDoor.focus();
    await page.keyboard.press('Shift+F10');
    await expect(general.speakeasyDoor_Popup).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(general.speakeasyDoor_Result).toHaveText('You chose: Leave quietly. The doorman nods slowly.');
})


//checking brass knocker button click and double click behavior
test('testing the brass knocker button', async () => {
    // await page.pause();
    await general.speakeasyDoor_btnKnock.click();
    await expect(general.speakeasyDoor_Result).toHaveText('One knock echoes… nothing happens. Try knocking twice, fast.');
    await general.speakeasyDoor_btnKnock.dblclick();
    await expect(general.speakeasyDoor_Result).toHaveText('Knock knock. A hatch slides open — "password?"');
})