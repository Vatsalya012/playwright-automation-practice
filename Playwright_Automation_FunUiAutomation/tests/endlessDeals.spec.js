import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('Open the Endless Deals page', async ({ page }) => {
    general = new General(page);
    await general.goto_EndlessDealsUrl();
})


//checking all the elements of endless deals page
test('testing all the elements of the page', async () => {
    // await page.pause();
    await expect(general.endlessDeals_Counter).toBeVisible();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 10 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(10);
    await expect(general.endlessDeals_Sentinel).toHaveText('Loading more deals…');
    await expect(general.endlessDeals_End).toBeHidden();
})


//checking the scroll behavior with updating count and total items in the list with valdation message
test('testing the scroll to load more elements and update the count change', async () => {
    // await page.pause();
    var element;
    element = general.endlessDeals_items10;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 20 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(20);
    // await page.pause();
    element = general.endlessDeals_items20;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 30 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(30);
    element = general.endlessDeals_items30;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 40 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(40);
    element = general.endlessDeals_items40;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 50 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(50);
    element = general.endlessDeals_items50;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 60 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(60);
    element = general.endlessDeals_items60;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 70 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(70);
    element = general.endlessDeals_items70;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 80 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(80);
    element = general.endlessDeals_items80;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 90 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(90);
    element = general.endlessDeals_items90;
    await element.scrollIntoViewIfNeeded();
    await expect(general.endlessDeals_Counter).toHaveText('Showing 100 of 100 deals');
    await expect(general.endlessDeals_itemsCount).toHaveCount(100);
    await expect(general.endlessDeals_End).toHaveText(/You have reached the bottom of the bazaar\. There is no more bazaar\./);
    await expect(general.endlessDeals_Sentinel).toBeHidden();
})