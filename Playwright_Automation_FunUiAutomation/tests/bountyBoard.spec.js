import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the bounty board page', async ({ page }) => {
    general = new General(page);
    await general.goto_BountyBoard();
})


//checking all the elements of bounty board page
test('Testing all the elements on bounty board page', async () => {
    // await page.pause();
    await expect(general.bountyBoard_btnRefresh).toBeVisible();
    await expect(general.bountyBoard_btnRefresh).toBeEnabled();
    await expect(general.bountyBoard_btnRefresh).toHaveText(/Redraw the board/);

    await expect(general.bountyBoard_Board).toBeVisible();
    await expect(general.bountyBoard_Slot1).toBeVisible();
    await expect(general.bountyBoard_Slot2).toBeVisible();
    await expect(general.bountyBoard_Slot3).toBeVisible();
    await expect(general.bountyBoard_Slot).toHaveCount(3);
    await expect(general.bountyBoard_Names).toHaveCount(3);
    await expect(general.bountyBoard_Bounty).toHaveCount(3);

    await expect(general.bountyBoard_Count).toBeVisible();
    await expect(general.bountyBoard_Count).toHaveText('Redraws so far: 0');
})


//checking random name and bounty on redraw button click event
test('Testing randomised names and bounty on redraw click event', async () => {
    await expect(general.bountyBoard_Names.nth(0)).not.toBeEmpty();
    await expect(general.bountyBoard_Bounty.nth(0)).not.toBeEmpty();

    await expect(general.bountyBoard_Names.nth(1)).not.toBeEmpty();
    await expect(general.bountyBoard_Bounty.nth(1)).not.toBeEmpty();

    await expect(general.bountyBoard_Names.nth(2)).not.toBeEmpty();
    await expect(general.bountyBoard_Bounty.nth(2)).not.toBeEmpty();

    const oldBounty = await general.bountyBoard_Bounty.allTextContents();

    await general.bountyBoard_btnRefresh.click();
    await expect(general.bountyBoard_Count).toHaveText('Redraws so far: 1');

    const newBounty = await general.bountyBoard_Bounty.allTextContents();

    expect(
        JSON.stringify(newBounty) !== JSON.stringify(oldBounty)
    ).toBeTruthy();

    await expect(general.bountyBoard_Slot).toHaveCount(3);
})