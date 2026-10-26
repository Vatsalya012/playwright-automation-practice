import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test('opening the Revolving Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_RevolvingDoorUrl();
})