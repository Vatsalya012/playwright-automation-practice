import { test, expect } from '@playwright/test'
import { ForgotPassword } from '../../Pages/LoginAutomatePage/forgotpassword'

test.describe('Testing Forgot Password', async () => {

    let forgotPassword;

    test.beforeEach('Open forgot password url', async ({ page }) => {
        forgotPassword = new ForgotPassword(page);

        await forgotPassword.forgotPasswordUrl();
    })


    test('verify all the elements', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
        await expect(page.getByText('Email Address', { exact: true })).toBeVisible();
        await expect(forgotPassword.email).toBeVisible();
        await expect(forgotPassword.email).toBeEnabled();
        await expect(forgotPassword.email).toHaveAttribute('placeholder', 'Enter your registered email');
        await forgotPassword.email.fill('user@premiumbank.com');
        await expect(forgotPassword.btnContinue).toBeVisible();
        await expect(forgotPassword.btnContinue).toBeEnabled();
        await expect(forgotPassword.btnContinue).toHaveText('Continue');
        await forgotPassword.btnContinue.click();

        await expect(page.getByRole('heading', { name: 'Verify Security Code' })).toBeVisible();
        await expect(page.getByText('Security Code', { exact: true })).toBeVisible();
        await expect(forgotPassword.securityCode).toBeVisible();
        await expect(forgotPassword.securityCode).toBeEnabled();
        await expect(forgotPassword.securityCode).toHaveAttribute('placeholder', 'Enter security code');
        await forgotPassword.securityCode.fill('BANK1234');
        await expect(forgotPassword.btnVerifyCode).toBeVisible();
        await expect(forgotPassword.btnVerifyCode).toBeEnabled();
        await expect(forgotPassword.btnVerifyCode).toHaveText('Verify Code');
        await forgotPassword.btnVerifyCode.click();

        await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
        await expect(page.getByText('Current Password', { exact: true })).toBeVisible();
        await expect(forgotPassword.currentPassword).toBeVisible();
        await expect(forgotPassword.currentPassword).toBeEnabled();
        await expect(forgotPassword.currentPassword).toHaveAttribute('placeholder', 'Current password');
        await forgotPassword.currentPassword.fill('Bank@123');
        await expect(page.getByText('New Password', { exact: true })).toBeVisible();
        await expect(forgotPassword.newPassword).toBeVisible();
        await expect(forgotPassword.newPassword).toBeEnabled();
        await expect(forgotPassword.newPassword).toHaveAttribute('placeholder', 'New password');
        await forgotPassword.newPassword.fill('Bank@1234');
        await expect(page.getByText('Confirm New Password')).toBeVisible();
        await expect(forgotPassword.confirmNewPassword).toBeVisible();
        await expect(forgotPassword.confirmNewPassword).toBeEnabled();
        await expect(forgotPassword.confirmNewPassword).toHaveAttribute('placeholder', 'Confirm new password');
        await forgotPassword.confirmNewPassword.fill('Bank@1234');
        await expect(forgotPassword.btnForgotPassword).toBeVisible();
        await expect(forgotPassword.btnForgotPassword).toBeEnabled();
        await expect(forgotPassword.btnForgotPassword).toHaveText('Reset Password');
        await forgotPassword.btnForgotPassword.click();
        // await page.pause();
    })


    test('Positive Smoke Testing for changing password', async ({ page }) => {
        await forgotPassword.validForgotPasswordFlow();
    })


    test('verify changing password with invalid email', async ({ page }) => {
        await expect(page.getByTestId('forgot-error')).not.toBeVisible();
        await forgotPassword.email.fill('user@premiumbankcom');
        await forgotPassword.btnContinue.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Email not found in our records')
        // await page.pause();
    })


    test('verify changing password with invalid security code', async ({ page }) => {
        await expect(page.getByTestId('forgot-error')).not.toBeVisible();
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('Bank123')
        await forgotPassword.btnVerifyCode.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Invalid secret code')
        // await page.pause();
    })


    test('verify changing password with invalid current password', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank');
        await forgotPassword.newPassword.fill('Bank@1234');
        await forgotPassword.confirmNewPassword.fill('Bank@1234');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        // await page.pause();
    })


    test('verify changing mismatching new password and confirm password', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('Bank@123');
        await forgotPassword.confirmNewPassword.fill('Bank@1234');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Passwords do not match');
        // await page.pause();
    })


    test('Verify registration with password missing a number', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('Bank@accou');
        await forgotPassword.confirmNewPassword.fill('Bank@accou');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Password does not meet requirements');
        await expect(page.getByText('At least one number')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a uppercase', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('bank@1234');
        await forgotPassword.confirmNewPassword.fill('bank@1234');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Password does not meet requirements');
        await expect(page.getByText('At least one uppercase letter')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a lowercase', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('BANK@1234');
        await forgotPassword.confirmNewPassword.fill('BANK@1234');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Password does not meet requirements');
        await expect(page.getByText('At least one lowercase letter')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a special character', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('Bank1234');
        await forgotPassword.confirmNewPassword.fill('Bank1234');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Password does not meet requirements');
        await expect(page.getByText('At least one special character')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password minimum length', async ({ page }) => {
        await forgotPassword.email.fill('user@premiumbank.com');
        await forgotPassword.btnContinue.click();
        await forgotPassword.securityCode.fill('BANK1234')
        await forgotPassword.btnVerifyCode.click();
        await forgotPassword.currentPassword.fill('Bank@123');
        await forgotPassword.newPassword.fill('B@n2');
        await forgotPassword.confirmNewPassword.fill('B@n2');
        await forgotPassword.btnForgotPassword.click();
        await expect(page.getByTestId('forgot-error')).toBeVisible();
        await expect(page.getByTestId('forgot-error')).toHaveText('Password does not meet requirements');
        await expect(page.getByText('Minimum 8 characters')).toHaveClass(/text-danger/);
    })

    /*
    ----- Concepts Learned while Practicing -----
    1. Page Object Model
    2. Assertions
    3. Group
    4. Hooks
    5. Annotations
    */

})