import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the House Sigils page', async ({ page }) => {
    general = new General(page);
    await general.goto_HouseSigilsUrl();
})


//checking all the elements of the house sigils page
test('tecting all the elements of the house sigils page', async ({ page }) => {
    // await page.pause();
    await expect(general.hoverSigil_Sigils).toHaveCount(3);
    for (var i = 0; i < 3; i++) {
        await expect(general.hoverSigil_Sigils.nth(i)).toBeVisible();
        await expect(general.hoverSigil_Sigils.nth(i)).toBeEnabled();
    }
    await expect(general.hoverSigil_sigil1).toHaveAttribute('class');
    await expect(page.getByText('🐺')).toBeVisible();
    await expect(page.getByText('House Greywind', { exact: true })).toBeVisible();
    await expect(general.hoverSigil_sigil2).toHaveAttribute('class');
    await expect(page.getByText('🦌')).toBeVisible();
    await expect(page.getByText('House Hartfall', { exact: true })).toBeVisible();
    await expect(general.hoverSigil_sigil3).toHaveAttribute('class');
    await expect(page.getByText('🐻')).toBeVisible();
    await expect(page.getByText('House Ursk', { exact: true })).toBeVisible();
})


//checking each card expands on hover and also link regirects to the destination url
test('checking each animal card with hovering effect', async ({ page }) => {
    // await page.pause();
    await general.hoverSigil_sigil1.hover();
    await expect(general.hoverSigil_sigil1).toHaveAttribute('class', 'revealed');
    await expect(general.hoverSigil_sigil1Profile).toBeVisible();
    await expect(general.hoverSigil_sigil1Profile).toBeEnabled();
    await expect(general.hoverSigil_sigil1Profile).toHaveAttribute('href', '/challenges/hovers#hovers-profile-1');
    await general.hoverSigil_sigil1Profile.click();
    await page.waitForURL('https://funui.dev/challenges/hovers#hovers-profile-1');
    await expect(page.locator('div').filter({ hasText: 'Lord Brandor the Unbowed' }).first()).toBeVisible();

    await general.hoverSigil_sigil2.hover();
    await expect(general.hoverSigil_sigil2).toHaveAttribute('class', 'revealed');
    await expect(general.hoverSigil_sigil2Profile).toBeVisible();
    await expect(general.hoverSigil_sigil2Profile).toBeEnabled();
    await expect(general.hoverSigil_sigil2Profile).toHaveAttribute('href', '/challenges/hovers#hovers-profile-2');
    await general.hoverSigil_sigil2Profile.click();
    await page.waitForURL('https://funui.dev/challenges/hovers#hovers-profile-2');
    await expect(page.locator('div').filter({ hasText: 'Lady Maera Swiftarrow' }).first()).toBeVisible();

    await general.hoverSigil_sigil3.hover();
    await expect(general.hoverSigil_sigil3).toHaveAttribute('class', 'revealed');
    await expect(general.hoverSigil_sigil3Profile).toBeVisible();
    await expect(general.hoverSigil_sigil3Profile).toBeEnabled();
    await expect(general.hoverSigil_sigil3Profile).toHaveAttribute('href', '/challenges/hovers#hovers-profile-3');
    await general.hoverSigil_sigil3Profile.click();
    await page.waitForURL('https://funui.dev/challenges/hovers#hovers-profile-3');
    await expect(page.locator('div').filter({ hasText: 'Lord Tormun Half-Beard' }).first()).toBeVisible();
})