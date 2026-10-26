import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('walk');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('eat');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('sleep');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('repeat');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('todo-item-toggle').nth(1).check();
    await page.getByRole('listitem').filter({ hasText: 'walk' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await expect(page.getByTestId('text-input')).toBeVisible();
    await expect(page.getByTestId('todo-list')).toContainText('sleep');
    //await expect(page.getByTestId('todo-list')).toContainText('slip');
});