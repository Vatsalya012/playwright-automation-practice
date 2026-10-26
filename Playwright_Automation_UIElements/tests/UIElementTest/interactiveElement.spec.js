import { test, expect } from '@playwright/test';
import { InteractiveElements } from '../../Pages/UIElementPage/interactiveElements';

test.describe('All Interactive Elements Tests', () => {

    let interactiveElements;

    test.beforeEach('Open URL', async ({ page }) => {
        interactiveElements = new InteractiveElements(page)
        await interactiveElements.goto('https://www.qapractice.com/practice-different-ui-elements');
    })


    //Checking Link Anchor Tag
    test('Testing Link Anchor Tag', async ({ page }) => {

        await expect(interactiveElements.anchorTag).toBeVisible();
        await expect(page.getByText('Click the link')).toHaveText('Click the link')
        await interactiveElements.anchorTag.click();
        await expect(page.getByText('Link Clicked!')).toHaveText('Link Clicked!');
    })


    //Checking Image Click
    test('Testing Image Click', async ({ page }) => {

        await expect(interactiveElements.clickImage).toBeVisible();
        await expect(page.getByText('Click the image')).toHaveText('Click the image');
        await interactiveElements.clickImage.click();
        await expect(page.getByText('Image Clicked!')).toHaveText('Image Clicked!');
    })


    //Checking table and grid sorting
    // test('Testing Table and Grid Sorting', async ({ page }) => {

    //     await expect(page.getByText('Click a table header to "sort"')).toHaveText('Click a table header to "sort"');
    //     //col id
    //     await page.getByTestId('ui-th-id').click();
    //     await expect(page.getByText('Table sorted by id')).toHaveText('Table sorted by id');
    // })


    //Checking Tooltip Hover
    test('Testing Tooltip Hover', async ({ page }) => {
        await expect(interactiveElements.toolTip).toBeVisible();
        await interactiveElements.toolTip.hover();
        await expect(page.locator('#tooltip-top')).toBeVisible();
        await expect(page.locator('#tooltip-top')).toHaveText('This is a tooltip!');
    })


    //Checking Slider
    test('Testing Slider', async ({ page }) => {
        await expect(interactiveElements.slider).toBeVisible();
        await expect(interactiveElements.slider).toBeEnabled();
        await expect(interactiveElements.optProgressBar).toHaveText('Slider Value: 50');

        await interactiveElements.slider.focus();
        await interactiveElements.slider.press('Home');
        await expect(interactiveElements.optProgressBar).toHaveText('Slider Value: 0');

        await interactiveElements.slider.focus();
        await interactiveElements.slider.press('End');
        await expect(interactiveElements.optProgressBar).toHaveText('Slider Value: 100');

        await interactiveElements.slider.focus();
        await interactiveElements.slider.press('ArrowLeft');
        await expect(interactiveElements.optProgressBar).toHaveText('Slider Value: 99');

        await interactiveElements.slider.focus();
        await interactiveElements.slider.press('ArrowRight');
        await expect(interactiveElements.optProgressBar).toHaveText('Slider Value: 100');
    })


    //Checking Progress bar
    test('Testing Progress Bar', async ({ page }) => {
        await expect(interactiveElements.btnProgressBar).toBeVisible();
        await expect(interactiveElements.btnProgressBar).toBeEnabled();
        await expect(page.getByText('Progress: 30%')).toHaveText('Progress: 30%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 40%')).toHaveText('Progress: 40%')

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 50%')).toHaveText('Progress: 50%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 60%')).toHaveText('Progress: 60%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 70%')).toHaveText('Progress: 70%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 80%')).toHaveText('Progress: 80%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 90%')).toHaveText('Progress: 90%');

        await interactiveElements.btnProgressBar.click();
        await expect(page.getByText('Progress: 100%')).toHaveText('Progress: 100%');
    })

})


/* 

page.locator('tooltip-top')   → HTML tag <tooltip-top>
page.locator('.tooltip-top')  → class="tooltip-top"
page.locator('#tooltip-top')  → id="tooltip-top"

*/