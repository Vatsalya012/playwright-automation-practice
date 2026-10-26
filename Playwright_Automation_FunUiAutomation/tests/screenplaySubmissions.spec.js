import { test, expect } from '@playwright/test';
import { General } from '../Pages/general';

let general;

test.beforeEach('open the Screenplay Submissions url', async ({ page }) => {
    general = new General(page);
    await general.goto_ScreenplaySubmissionsUrl();
});


//test to check the initial state of element of Screenplay Submissions
test('checking the initial state of element of Screenplay Submissions', async () => {
    // await page.pause();
    await expect(general.screenplay_btnUploadInput).toBeVisible();
    await expect(general.screenplay_btnUploadInput).toBeEnabled();
    await expect(general.screenplay_uploadDropzone).toBeEnabled();
    await expect(general.screenplay_uploadDropzone).toHaveText('🎬 …or drop the screenplay on the reading pile');
    await expect(general.screenplay_uploadResult).toBeVisible();
    await expect(general.screenplay_uploadResult).toHaveText('No screenplay selected. The studio waits.');
    await expect(general.screenplay_btnUploadSubmit).toBeVisible();
    await expect(general.screenplay_btnUploadSubmit).toBeDisabled();
    await expect(general.screenplay_btnUploadSubmit).toHaveText('Upload to the studio (live backend)');
})


//test to check the upload functionality of Screenplay Submissions
test('checking the upload functionality of Screenplay Submissions', async () => {
    // await page.pause();
    await expect(general.screenplay_uploadServerResult).not.toBeVisible();
    await general.screenplay_btnUploadInput.setInputFiles('C:/Users/ABCD/Downloads/2014bappa5.png');
    await expect(general.screenplay_uploadResult).toHaveText('2014bappa5.png · 2304725 bytes · image/png');
    await expect(general.screenplay_btnUploadSubmit).toBeEnabled();
    await general.screenplay_btnUploadSubmit.click();
    await expect(general.screenplay_uploadServerResult).toBeVisible({ timeout: 40000 });
    await expect(general.screenplay_uploadServerResult).toHaveText('Server received undefined bytes (undefined)');
})