import { test, expect } from '@playwright/test';
import { ComplexElements } from '../../Pages/UIElementPage/complexElements';

test.describe('All Complex Components Elements Tests', () => {

    let complexElement;

    test.beforeEach('Open URL', async ({ page }) => {
        complexElement = new ComplexElements(page);
        await complexElement.goto('https://www.qapractice.com/practice-different-ui-elements');
    })


    //Checking Modal and Popup
    test('Testing Modal and Popup', async ({ page }) => {

        await expect(complexElement.btnShowModal).toBeVisible();
        await expect(complexElement.btnShowModal).toBeEnabled();
        await expect(complexElement.modalPopup).not.toBeVisible();

        await complexElement.btnShowModal.click();
        await expect(complexElement.modalPopup).toBeVisible();
        await expect(page.locator('.modal-title')).toHaveText('This is a Modal');
        await expect(page.locator('.btn-close')).toBeVisible();
        await expect(page.locator('.modal-body')).toHaveText('React Bootstrap Modal Example.');
        await expect(page.locator('.btn-secondary')).toBeVisible();
        await expect(page.locator('.btn-secondary')).toHaveText('Close');
        await expect(page.getByRole('button', { name: 'Save Changes' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Save Changes' })).toHaveText('Save Changes');

        await page.locator('.btn-secondary').click();
        await expect(complexElement.modalPopup).not.toBeVisible();

        await complexElement.btnShowModal.click();
        await page.getByRole('button', { name: 'Save Changes' }).click();
        await expect(complexElement.modalPopup).not.toBeVisible();

        await complexElement.btnShowModal.click();
        await page.locator('.btn-close').click();
        await expect(complexElement.modalPopup).not.toBeVisible();
    })


    //Checking Date Picker & Calendar
    test('Testing Date Picker & Calendar', async ({ page }) => {

        await expect(complexElement.fieldDatePicker).toBeVisible();
        await expect(page.getByText('No date selected (simulated)')).toHaveText('No date selected (simulated)');

        await complexElement.fieldDatePicker.click();
        await complexElement.fieldDatePicker.fill('2026-09-24');
        await expect(page.getByText('-09-24')).toHaveText('2026-09-24');
    })


    //Checking File Upload & Download
    test('Testing File Upload & Download', async ({ page }) => {

        await expect(complexElement.uploadFile).toBeVisible();
        await expect(complexElement.uploadFile).toBeEnabled();
        await expect(complexElement.btnUploadFile).toBeVisible();
        await expect(complexElement.btnUploadFile).toBeEnabled();
        await expect(page.getByText('No file selected(Download')).toHaveText('No file selected(Download simulated via alert)');

        await complexElement.uploadFile.setInputFiles('C:/Users/ABCD/Downloads/DemoAppModuleLWT.xlsx');
        await expect(page.getByText('File "DemoAppModuleLWT.xlsx"')).toHaveText('File "DemoAppModuleLWT.xlsx" selected(Download simulated via alert)');
        await complexElement.btnUploadFile.click();
        //-------------------AlertBox Not Checked----------------------
    })


    //Checking Drag and Drop Elements
    test('Testing Drag and Drop Elements', async ({ page }) => {

        await expect(complexElement.dragMe).toBeVisible();
        await expect(complexElement.dragMe).toBeEnabled();
        await expect(complexElement.dropMe).toBeVisible();
        await expect(complexElement.dropMe).toBeEnabled();
        await complexElement.dragMe.dragTo(complexElement.dropMe);
        await expect(page.getByText('Dropped!')).toHaveText('Dropped!');
    })


    //Checking Iframe
    test('Testing Iframe', async ({ page }) => {

        await expect(complexElement.iFrame).toBeVisible();
        await expect(complexElement.iFrame.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
        await expect(complexElement.iFrame.getByText('This domain is for use in documentation examples without needing permission. Avoid use in operations.')).toBeVisible();
        await expect(complexElement.iFrame.getByRole('link', { name: 'Learn more' })).toBeVisible();
        await expect(page.getByText('Iframe loaded', { exact: true })).toBeVisible();
    })

})