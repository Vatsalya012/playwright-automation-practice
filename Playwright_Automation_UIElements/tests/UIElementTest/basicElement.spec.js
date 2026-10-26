import { test, expect } from '@playwright/test';
import { BasicElement } from '../../Pages/UIElementPage/basicElements';

test.describe('All Basic Elements Tests', () => {

    let basicElements;

    test.beforeEach('Open URL', async ({ page }) => {
        basicElements = new BasicElement(page);
        await basicElements.goto('https://www.qapractice.com/practice-different-ui-elements');
    })

    //Checking Text Field
    test('Testing Text field', async () => {
        // const textField = page.getByTestId('ui-text-field');

        await basicElements.textField.fill('qapractice');
        await expect(basicElements.textField).toBeVisible();
        await expect(basicElements.textField).toHaveValue('qapractice');
    })


    //Checking Text Area
    test('Testing Text Area', async ({ page }) => {
        //const textArea = page.getByTestId('ui-textarea');

        await basicElements.textArea.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum consequat magna at ornare. Phasellus pharetra ex porttitor augue vestibulum.')
        await expect(basicElements.textArea).toBeVisible();
        await expect(basicElements.textArea).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum consequat magna at ornare. Phasellus pharetra ex porttitor augue vestibulum.');
    })


    //Checking Button
    test('Testing Button', async ({ page }) => {
        // const clickMebutton = page.getByTestId('ui-click-button');

        await basicElements.clickMeButton.click();
        await expect(page.getByText('Clicked 1 times', { exact: true })).toBeVisible();
        await expect(page.getByText('Clicked 1 times', { exact: true })).toHaveText('Clicked 1 times');
    })


    //Checking Single Checkbox
    test('Testing Single Checkbox', async ({ page }) => {
        // const sinCheckBox = page.getByTestId('ui-single-checkbox');

        await expect(basicElements.sinCheckBox).not.toBeChecked();
        await expect(page.getByText('Unchecked', { exact: true })).toHaveText('Unchecked');
        await basicElements.sinCheckBox.click();
        await expect(basicElements.sinCheckBox).toBeChecked();
        await expect(page.getByText('Checked', { exact: true })).toHaveText('Checked');
    })


    //Checking Multiple Checkboxes
    test('Testing Multiple Checkboxes', async ({ page }) => {
        // const mulCheckBox1 = page.getByTestId('ui-checkbox-option1');
        // const mulCheckBox2 = page.getByTestId('ui-checkbox-option2');
        // const mulCheckBox3 = page.getByTestId('ui-checkbox-option3');

        await expect(page.getByText('Checked:')).toHaveText('Checked:');
        await expect(basicElements.mulCheckBox1).not.toBeChecked();
        await basicElements.mulCheckBox1.click();
        await expect(basicElements.mulCheckBox1).toBeChecked();
        await expect(page.getByText('Checked: option1')).toHaveText('Checked: option1');

        await expect(basicElements.mulCheckBox2).not.toBeChecked();
        await basicElements.mulCheckBox2.click();
        await expect(basicElements.mulCheckBox2).toBeChecked();
        await expect(page.getByText('Checked: option1, option2')).toHaveText('Checked: option1, option2');

        await expect(basicElements.mulCheckBox3).not.toBeChecked();
        await basicElements.mulCheckBox3.click();
        await expect(basicElements.mulCheckBox3).toBeChecked();
        await expect(page.getByText('Checked: option1, option2,')).toHaveText('Checked: option1, option2, option3');
    })


    //Checking RadioButtons
    test('Testing Radio Buttons', async ({ page }) => {
        // const radioButton1 = page.getByTestId('ui-radio-Radio 1');
        // const radioButton2 = page.getByTestId('ui-radio-Radio 2');
        // const radioButton3 = page.getByTestId('ui-radio-Radio 3');

        await expect(basicElements.radioButton1).not.toBeChecked();
        await expect(basicElements.radioButton2).not.toBeChecked();
        await expect(basicElements.radioButton3).not.toBeChecked();
        await expect(page.getByText('No option selected').first()).toHaveText('No option selected');

        await basicElements.radioButton1.click();
        await expect(basicElements.radioButton1).toBeChecked();
        await expect(basicElements.radioButton2).not.toBeChecked();
        await expect(basicElements.radioButton3).not.toBeChecked();
        await expect(page.getByText('Radio').nth(5)).toHaveText('Radio 1');

        await basicElements.radioButton2.click();
        await expect(basicElements.radioButton1).not.toBeChecked();
        await expect(basicElements.radioButton2).toBeChecked();
        await expect(basicElements.radioButton3).not.toBeChecked();
        await expect(page.getByText('Radio').nth(5)).toHaveText('Radio 2');

        await basicElements.radioButton3.click();
        await expect(basicElements.radioButton1).not.toBeChecked();
        await expect(basicElements.radioButton2).not.toBeChecked();
        await expect(basicElements.radioButton3).toBeChecked();
        await expect(page.getByText('Radio').nth(5)).toHaveText('Radio 3');
    })


    //Checking Single Select Dropdown
    test('Testing Single Select Dropdown', async ({ page }) => {
        // const sinSelDropdown = page.getByTestId('ui-single-dropdown');

        await expect(basicElements.sinSelDropdown).toContainText('Select a country');
        await expect(page.getByText('No option selected').nth(1)).toHaveText('No option selected');

        await basicElements.sinSelDropdown.selectOption('USA');
        await expect(basicElements.sinSelDropdown).toContainText('USA');
        await expect(page.locator('div').filter({ hasText: /^USA$/ })).toHaveText('USA');

        await basicElements.sinSelDropdown.selectOption('Canada');
        await expect(basicElements.sinSelDropdown).toContainText('Canada');
        await expect(page.locator('div').filter({ hasText: /^Canada$/ })).toHaveText('Canada');

        await basicElements.sinSelDropdown.selectOption('UK');
        await expect(basicElements.sinSelDropdown).toContainText('UK');
        await expect(page.locator('div').filter({ hasText: /^UK$/ })).toHaveText('UK');

        await basicElements.sinSelDropdown.selectOption('India');
        await expect(basicElements.sinSelDropdown).toContainText('India');
        await expect(page.locator('div').filter({ hasText: /^India$/ })).toHaveText('India');

        await basicElements.sinSelDropdown.selectOption('Australia');
        await expect(basicElements.sinSelDropdown).toContainText('Australia');
        await expect(page.locator('div').filter({ hasText: /^Australia$/ })).toHaveText('Australia')
    })


    //Checking Multi Select Dropdown
    test('Testing Multi Select Dropdown', async ({ page }) => {
        // const mulSelDropdown = page.getByTestId('ui-multi-dropdown');

        await expect(basicElements.mulSelDropdown).toHaveValues([]);
        await expect(page.getByText('No options selected')).toHaveText('No options selected');

        await basicElements.mulSelDropdown.selectOption('Option A');
        await expect(basicElements.mulSelDropdown).toHaveValues(['Option A']);
        await expect(page.locator('div').filter({ hasText: /^Option A$/ })).toHaveText('Option A');

        await basicElements.mulSelDropdown.selectOption(['Option A', 'Option B']);
        await expect(basicElements.mulSelDropdown).toHaveValues(['Option A', 'Option B']);
        await expect(page.getByText('Option A, Option B')).toHaveText('Option A, Option B');

        await basicElements.mulSelDropdown.selectOption(['Option A', 'Option B', 'Option C']);
        await expect(basicElements.mulSelDropdown).toHaveValues(['Option A', 'Option B', 'Option C']);
        await expect(page.getByText('Option A, Option B, Option C')).toHaveText('Option A, Option B, Option C');

        await basicElements.mulSelDropdown.selectOption(['Option A', 'Option B', 'Option C', 'Option D']);
        await expect(basicElements.mulSelDropdown).toHaveValues(['Option A', 'Option B', 'Option C', 'Option D']);
        await expect(page.getByText('Option A, Option B, Option C')).toHaveText('Option A, Option B, Option C, Option D');


        /*
            
        */
    })

})
