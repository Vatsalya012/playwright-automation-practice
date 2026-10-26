import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('open the custom declaration url', async ({ page }) => {
    general = new General(page);
    await general.goto_CustomDeclarationUrl();
})

//checking all the elements of the custom declaration page with majorly everything cover
test('Testing all the elements of custom Declaration page', async () => {
    await expect(general.customDeclare_email).toBeVisible();
    await expect(general.customDeclare_email).toBeEnabled();
    await expect(general.customDeclare_email).toHaveAttribute('required');
    await expect(general.customDeclare_email).toHaveAttribute('placeholder', 'you@example.com');
    await expect(general.customDeclare_quantity).toBeVisible();
    await expect(general.customDeclare_quantity).toBeEnabled();
    await expect(general.customDeclare_quantity).toHaveAttribute('required');
    await expect(general.customDeclare_quantity).toHaveAttribute('type', 'number');
    await expect(general.customDeclare_quantity).toHaveAttribute('min', '1');
    await expect(general.customDeclare_quantity).toHaveAttribute('max', '10');
    await expect(general.customDeclare_code).toBeVisible();
    await expect(general.customDeclare_code).toBeEnabled();
    await expect(general.customDeclare_code).toHaveAttribute('required');
    await expect(general.customDeclare_code).toHaveAttribute('placeholder', 'ICL-0007');
    await expect(general.customDeclare_code).toHaveAttribute('pattern', '[A-Z]{3}-\\d{4}');
    await expect(general.customDeclare_btnSubmit).toBeVisible();
    await expect(general.customDeclare_btnSubmit).toBeEnabled();
    await expect(general.customDeclare_btnSubmit).toHaveText('Stamp declaration');
    // await page.pause();
    await expect(general.customDeclare_summary).toBeVisible();
    await expect(general.customDeclare_summary).toHaveText('No validation errors reported yet.');
})


//checking the click button behavour with empty field data
test('Submitting the empty data', async ({ page }) => {
    // await page.pause();
    await general.customDeclare_btnSubmit.click();
    await expect(page.getByText('email: Please fill out this field.')).toBeVisible();
    await expect(page.getByText('quantity: Please fill out this field.')).toBeVisible();
    await expect(page.getByText('code: Please fill out this field.')).toBeVisible();
})


//checking behaviour with valid data
test('testing the behaviour with valid data', async () => {
    // await page.pause();
    await general.customDeclare_email.fill('abc@xyz');
    await general.customDeclare_quantity.fill('10');
    await general.customDeclare_code.fill('VDR-2003');
    await general.customDeclare_btnSubmit.click();
    await expect(general.customDeclare_flashSuccess).toBeVisible();
    await expect(general.customDeclare_flashSuccess).toHaveText(/Declaration accepted. Welcome through customs./);
})