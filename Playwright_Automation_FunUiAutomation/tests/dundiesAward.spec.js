import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Dundies url', async ({ page }) => {
    general = new General(page);
    await general.goto_DundiesUrl();
})

//test to check the dundies announcement alert
test('checking the announcement award', async () => {
    // await page.pause();
    await general.dialogHandle();
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.dundies_alertAlert.click();
    await expect(general.dundies_alertResult).toHaveText('You acknowledged your Dundie.');
})


//test to check the dundies accept award alert
test('checking the accept award', async () => {
    await general.acceptDundiesAward();
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.dundies_alertConfirm.click();
    await expect(general.dundies_alertResult).toHaveText('You accepted the Dundie.');
})


//test to check the dundies reject award alert
test('checking the reject award', async () => {
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.dundies_alertConfirm.click();
    await expect(general.dundies_alertResult).toHaveText('You declined the Dundie. Bold move.');
})


//test to check the dundies prompt award alert with proper message
test('checking the dundies prompt alert accept', async () => {
    await general.promptDundiesAward();
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.dundies_alertPrompt.click();
    await expect(general.dundies_alertResult).toHaveText('Speech: Thank you for the Dundie! I will continue to automate with excellence.');
})


//test to check the dundies prompt award alert with dismiss button
test('checking the dundies prompt alert reject', async () => {
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.dundies_alertPrompt.click();
    await expect(general.dundies_alertResult).toHaveText('You walked off stage without a speech.');
})


//test to check the dundies prompt award alert with empty message
test('checking the dundies prompt alert empty message', async () => {
    await expect(general.dundies_alertResult).toHaveText('The ceremony has not started.');
    await general.promptDundiesAwardEmpty();
    await general.dundies_alertPrompt.click();
    await expect(general.dundies_alertResult).toHaveText('Speech: (stunned silence)');
})