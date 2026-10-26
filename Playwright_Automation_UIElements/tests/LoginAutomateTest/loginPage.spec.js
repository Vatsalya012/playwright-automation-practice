import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginAutomatePage/loginPage';

test.describe('Login Page Testing', () => {

    let loginPage;

    test.beforeEach('Open Login Url', async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.gotoLogin();
    })


    test('verify all the element', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Login to Your Practice Account' })).toBeVisible();
        await expect(page.locator('label[for="formBasicEmail"]')).toBeVisible();
        await expect(page.locator('label[for="formBasicEmail"]')).toHaveText('Email Address');
        await expect(page.locator('label[for="formBasicPassword"]')).toBeVisible();
        await expect(page.locator('label[for="formBasicPassword"]')).toHaveText(('Password'));
        await expect(loginPage.email).toBeVisible();
        await expect(loginPage.email).toBeEnabled();
        await expect(loginPage.email).toHaveAttribute('placeholder', 'Enter your email');
        await expect(loginPage.password).toBeVisible();
        await expect(loginPage.password).toBeEnabled();
        await expect(loginPage.password).toHaveAttribute('placeholder', 'Enter your password');
        await expect(loginPage.btnRemMe).toBeVisible();
        await expect(loginPage.btnRemMe).not.toBeChecked();
        await expect(loginPage.linkForgotPass).toBeVisible();
        await expect(loginPage.linkForgotPass).toHaveAttribute('href', /.+/);
        await expect(loginPage.linkRegNow).toBeVisible();
        await expect(loginPage.linkRegNow).toHaveAttribute('href', /.+/);
    })


    test('Login with valid Credentials', async ({ page }) => {
        await loginPage.validCredentials();
        await expect(loginPage.password).toHaveAttribute('type', 'password');
        await loginPage.btnRemMe.click();
        await expect(loginPage.btnRemMe).toBeChecked();
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-success')).toHaveText('Login Successful! Welcome to Premium Banking.');
    })


    test('Login with both invalid credentials', async ({ page }) => {
        // await page.pause();
        await loginPage.email.fill('user@prebank.com');
        await loginPage.password.fill('Bank123');
        await expect(loginPage.password).toHaveAttribute('type', 'password');
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Invalid email id and password');
    })


    test('Login with invalid email', async ({ page }) => {
        await loginPage.email.fill('user@rebank.cm');
        await loginPage.password.fill('Bank@123');
        await expect(loginPage.password).toHaveAttribute('type', 'password');
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Invalid email id and password');
    })


    test('Login with invalid password', async ({ page }) => {
        await loginPage.email.fill('user@premiumbank.com');
        await loginPage.password.fill('Bank123');
        await expect(loginPage.password).toHaveAttribute('type', 'password');
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Invalid email id and password');
    })


    test('Login with both empty', async ({ page }) => {
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Email and Password are required');
    })


    test('Login with empty email', async ({ page }) => {
        await loginPage.password.fill('Bank@123');
        await expect(loginPage.password).toHaveAttribute('type', 'password');
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Email is required');
    })


    test('Login with empty password', async ({ page }) => {
        await loginPage.email.fill('user@premiumbank.com');
        await loginPage.btnSignIn.click();
        await expect(page.getByTestId('login-error')).toBeVisible();
        await expect(page.getByTestId('login-error')).toHaveText('Password is required');
    })


    test('Verify the email format', async () => {
        await loginPage.email.fill('abc123');
        await expect(loginPage.email).toHaveAttribute('type', 'email');
        await loginPage.btnSignIn.click();
    })


    test('Verify the Forgot Password Link', async ({ page }) => {
        await loginPage.linkForgotPass.click();
        await expect(page).toHaveURL('https://www.qapractice.com/forget-password');
    })


    test('Verify the Register Now link', async ({ page }) => {
        await loginPage.linkRegNow.click();
        await expect(page).toHaveURL('https://www.qapractice.com/register');
    })

})