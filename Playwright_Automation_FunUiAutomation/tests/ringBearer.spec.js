import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the ring bearer page', async ({ page }) => {
    general = new General(page);
    await general.goto_RingBearerUrl();
})


test('testing all the elements of the ring bearer page', async ({ page }) => {
    // await page.pause();
    await expect(general.ringBearer_columnA).toBeVisible();
    await expect(page.getByText('A — The Shire (ring here)')).toBeVisible();
    await expect(page.getByText('A — The Shire (ring here)')).toHaveText('A — The Shire (ring here)');
    await expect(general.ringBearer_Ring).toBeVisible();
    await expect(general.ringBearer_Ring).toBeEnabled();
    await expect(general.ringBearer_Ring).toHaveAttribute('draggable', 'true');
    await expect(general.ringBearer_columnB).toBeVisible();
    await expect(page.getByText('B — Mount Doom')).toBeVisible();
    await expect(page.getByText('B — Mount Doom')).toHaveText('B — Mount Doom');

    await expect(general.ringBearer_Fellowship).toBeVisible();
    await expect(general.ringBearer_Member).toHaveCount(6);
    for (var i = 0; i < 6; i++) {
        await expect(general.ringBearer_Member.nth(i)).toHaveAttribute('draggable', 'true');
    }
    await expect(general.ringBearer_Order).toBeVisible();
    await expect(general.ringBearer_Order).toHaveText('Frodmund, Samgar, Gandor the Grey, Aravorn, Gimlin, Legolan');
})


test('testing drag and drop event of ring', async ({ page }) => {
    // await page.pause();
    await general.ringBearer_Ring.hover();
    await page.mouse.down();
    await general.ringBearer_columnB.hover();
    await page.mouse.up();
    expect(page.getByText('A — The Shire')).toBeTruthy();
    expect(page.getByText('B — Mount Doom (ring here)')).toBeTruthy();
    await general.ringBearer_Ring.dragTo(general.ringBearer_columnA);
    expect(page.getByText('A — The Shire (ring here)')).toBeTruthy;
    expect(page.getByText('B — Mount Doom')).toBeTruthy;
})


test('testing the list order sequence with drag and drop', async ({ page }) => {
    // await page.pause();
    await general.ringBearer_Member.nth(5).hover();
    await page.mouse.down();
    await general.ringBearer_Member.nth(0).hover();
    await page.mouse.up();
    expect(page.getByText('1.Legolan')).toBeTruthy();
    expect(page.getByText('2.Frodmund')).toBeTruthy();
    expect(page.getByText('3.Samgar')).toBeTruthy();
    expect(page.getByText('4.Gandor the Grey')).toBeTruthy();
    expect(page.getByText('5.Aravorn')).toBeTruthy();
    expect(page.getByText('6.Gimlin')).toBeTruthy();
    await expect(general.ringBearer_Order).toHaveText('Legolan, Frodmund, Samgar, Gandor the Grey, Aravorn, Gimlin');
})