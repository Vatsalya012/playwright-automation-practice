import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('opening the Revolving Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_RevolvingDoorUrl();
})


test('testing all the elements of revolving door page', async ({ page }) => {
    // await page.pause();
    await expect(page.locator('#stale-element-cycle')).toBeVisible();
    await expect(page.locator('#stale-element-cycle')).toBeEnabled();
    await expect(page.locator('#stale-element-cycle')).toHaveText(/Cycle the door/);
    await expect(page.locator('#stale-element-auto')).toBeVisible();
    await expect(page.locator('#stale-element-auto')).toBeEnabled();
    await expect(page.locator('#stale-element-auto')).toHaveAttribute('type', 'checkbox')
    await expect(page.locator('#stale-element-auto')).not.toBeChecked();
    await expect(page.getByLabel('Auto-cycle')).toHaveCount(1);
    await expect(page.locator('#stale-element-count')).toBeVisible();
    await expect(page.locator('#stale-element-count')).toHaveText('Cycle #0');
    await expect(page.locator('#stale-element-guest-1')).toBeVisible();
    await expect(page.locator('#stale-element-guest-1')).toHaveText('Rosencrantz');
    await expect(page.locator('#stale-element-guest-2')).toBeVisible();
    await expect(page.locator('#stale-element-guest-2')).toHaveText('Guildenstern');
    await expect(page.locator('#stale-element-guest-3')).toBeVisible();
    await expect(page.locator('#stale-element-guest-3')).toHaveText('Fortinbras');
    await expect(page.locator('#stale-element-guest-4')).toBeVisible();
    await expect(page.locator('#stale-element-guest-4')).toHaveText('Ophelia');
    await expect(page.locator('#stale-element-result')).toBeVisible();
    await expect(page.locator('#stale-element-result')).toHaveText('Currently at the door: Rosencrantz, Guildenstern, Fortinbras, Ophelia.');
})