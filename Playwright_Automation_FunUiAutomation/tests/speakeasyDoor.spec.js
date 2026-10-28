import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test('open the Speakeasy Door page', async ({ page }) => {
    general = new General(page);
    await general.goto_SpeakeasyDoorUrl();
})