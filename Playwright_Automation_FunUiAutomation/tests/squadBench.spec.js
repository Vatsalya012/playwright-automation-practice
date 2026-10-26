import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the Squad Bench url', async ({ page }) => {
    general = new General(page);
    await general.goto_SquadBenchUrl();
})


//checking all the elements of the squad bench page
test('Testing all the elements of squad bench page', async () => {
    // await page.pause();
    await expect(general.squadBench_btnAdd).toBeVisible();
    await expect(general.squadBench_btnAdd).toBeEnabled();
    await expect(general.squadBench_btnAdd).toHaveText('Add substitute');
    await expect(general.squadBench_count).toBeVisible();
    await expect(general.squadBench_count).toHaveText('0 substitutes on the bench');
    await expect(general.squadBench_bench).toBeVisible();
    await expect(general.squadBench_bench).toBeEmpty();
})


//checking new element creation and counting its count
test('Testing Create and counting new elements', async () => {
    // await page.pause();
    await general.squadBench_btnAdd.click();
    await expect(general.squadBench_bench).not.toBeEmpty();
    await expect(general.squadBench_manual).toHaveCount(1);
    await expect(general.squadBench_count).toHaveText('1 substitute on the bench');
    await expect(general.squadBench_manual).toBeVisible();
    await expect(general.squadBench_manual).toHaveText(/Sub 1/);
    await general.squadBench_btnAdd.click();
    await expect(general.squadBench_manual).toHaveCount(2);
    await expect(general.squadBench_count).toHaveText('2 substitutes on the bench');
})


//checking deleting the created element with specific sequence
test('Testing Deleting the created elements', async ({ page }) => {
    // await page.pause();
    await general.squadBench_btnAdd.click();
    await general.squadBench_btnAdd.click();
    await expect(general.squadBench_manual).toHaveCount(2);
    await expect(general.squadBench_count).toHaveText('2 substitutes on the bench');
    await page.getByRole('button', { name: /Sub 1/ }).click();
    await expect(page.getByRole('button', { name: /Sub 1/ })).toHaveCount(0);
    await expect(general.squadBench_manual).toHaveCount(1);
    await expect(general.squadBench_count).toHaveText('1 substitute on the bench');
})