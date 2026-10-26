import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Pit Wall Telemetry page url', async ({ page }) => {
    general = new General(page);
    await general.goto_PitWallTelemetryUrl();
})


//checking all the elements of the pit wall telemetry page
test('Testing all the elements of the pit wall telemetry page', async () => {
    // await page.pause();
    await expect(general.pitWall_btnStart).toBeVisible();
    await expect(general.pitWall_btnStart).toBeEnabled();
    await expect(general.pitWall_btnStart).toHaveText(/Start the stint/);
    await expect(general.pitWall_feedCount).toBeVisible();
    await expect(general.pitWall_feedCount).toHaveText('0 of 12 laps');
    await expect(general.pitWall_Logs).toBeVisible();
    await expect(general.pitWall_Logs).toHaveText('No telemetry yet. The pit wall sips coffee.');
    await expect(general.pitWall_Reset).toBeVisible();
    await expect(general.pitWall_Reset).not.toBeEnabled();
    await expect(general.pitWall_Reset).toHaveText('Clear the timing screen');
    await expect(general.pitWall_End).toBeHidden();
})


//checking the behavior of start button and correct logged count
test('testing the start flag and live counting of the log', async () => {
    // await page.pause();
    await general.pitWall_btnStart.click();
    await expect(general.pitWall_btnStart).not.toBeEnabled();
    await expect(general.pitWall_Reset).toBeEnabled();
    await expect(general.pitWall_feedCount).toHaveText('12 of 12 laps', { timeout: 13000 });
    await expect(general.pitWall_End).toHaveText(/Checkered flag — stint complete, 12 laps logged\./);
    await expect(general.pitWall_btnStart).toBeEnabled();
    await expect(general.pitWall_btnStart).toHaveText('Restart the stint');
})


//checking the restart and clear button and observe their behavior
test('Testing the restart and clear button', async () => {
    await general.pitWall_btnStart.click();
    await expect(general.pitWall_feedCount).toHaveText('12 of 12 laps', { timeout: 13000 });
    await general.pitWall_btnStart.click();
    await expect(general.pitWall_feedCount).toHaveText('12 of 12 laps', { timeout: 13000 });
    await expect(general.pitWall_End).toHaveText(/Checkered flag — stint complete, 12 laps logged\./);
    await general.pitWall_Reset.click();
    await expect(general.pitWall_feedCount).toHaveText('0 of 12 laps');
    await expect(general.pitWall_btnStart).toHaveText(/Start the stint/);
    await expect(general.pitWall_Reset).not.toBeEnabled();
})