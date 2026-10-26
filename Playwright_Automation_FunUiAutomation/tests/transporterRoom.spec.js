import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the transporter room url', async ({ page }) => {
    // await page.pause();
    general = new General(page);
    await general.goto_TransporterRoom();
})


test('testing all the elements of the transporter room page', async () => {
    // await page.pause();
    await expect(general.transporterRoom_btnStart1).toBeVisible();
    await expect(general.transporterRoom_btnStart1).toBeEnabled();
    await expect(general.transporterRoom_btnStart1).toHaveText('Energize');
    await expect(general.transporterRoom_msgFinish1).toBeHidden();
    await expect(general.transporterRoom_btnStart2).toBeVisible();
    await expect(general.transporterRoom_btnStart2).toBeEnabled();
    await expect(general.transporterRoom_btnStart2).toHaveText('Energize');
    await expect(general.transporterRoom_msgFinish2).toBeHidden();
})


//checking the hidden message after the button click
test('testing the hidden message until button click', async () => {
    // await page.pause();
    await general.transporterRoom_btnStart1.click();
    await expect(general.transporterRoom_msgFinish1).toBeVisible();
    await expect(general.transporterRoom_msgFinish1).toHaveText(/Ensign materialized\. All atoms accounted for\./);
})


//checking the append message after the button click
test('testing the appended message after the button click', async () => {
    // await page.pause();
    await general.transporterRoom_btnStart2.click();
    await expect(general.transporterRoom_msgFinish2).toBeVisible();
    await expect(general.transporterRoom_msgFinish2).toHaveText(/Ensign materialized\. All atoms accounted for\./);
})