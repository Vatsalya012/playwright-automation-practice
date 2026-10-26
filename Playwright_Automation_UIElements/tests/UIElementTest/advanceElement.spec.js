import { test, expect } from '@playwright/test';
import { AdvanceElements } from '../../Pages/UIElementPage/advanceElements';

test.describe('All Advanced UI Elements Tests', () => {

    let advanceElement;

    test.beforeEach('Open URL', async ({ page }) => {
        advanceElement = new AdvanceElements(page);

        await advanceElement.goto('https://www.qapractice.com/practice-different-ui-elements');
    })


    //Checking Dynamic Content Simulated
    test.only('Testing Dynamic Content', async ({ page }) => {
        await page.pause();
    })

})