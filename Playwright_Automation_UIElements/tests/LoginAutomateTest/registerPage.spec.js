import { test, expect } from '@playwright/test'
import { RegisterPage } from '../../Pages/LoginAutomatePage/registerPage'

test.describe('Register Page Testing', () => {

    let registerPage;

    test.beforeEach('Open Url of Register Page', async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gotoRegister();
    })


    test('Verify all the elements', async ({ page }) => {
        // await page.pause();
        await expect(page.getByRole('heading', { name: 'Master Registration Automation' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Create a New Account' })).toBeVisible();
        await expect(page.getByText('Email Address')).toBeVisible();
        await expect(page.getByText('Email Address')).toHaveText('Email Address');
        await expect(registerPage.email).toBeVisible();
        await expect(registerPage.email).toBeEnabled();
        await expect(registerPage.email).toHaveAttribute('placeholder', 'Enter your email');
        await expect(page.getByText('Password', { exact: true })).toBeVisible();
        await expect(page.getByText('Password', { exact: true })).toHaveText('Password');
        await expect(registerPage.password).toBeVisible();
        await expect(registerPage.password).toBeEnabled();
        await expect(registerPage.password).toHaveAttribute('placeholder', 'Create a password');
        await expect(page.getByText('Confirm Password')).toBeVisible();
        await expect(page.getByText('Confirm Password')).toHaveText('Confirm Password');
        await expect(registerPage.confirmpassword).toBeVisible();
        await expect(registerPage.confirmpassword).toBeEnabled();
        await expect(registerPage.confirmpassword).toHaveAttribute('placeholder', 'Confirm your password');
        await expect(registerPage.btnRegister).toBeVisible();
        await expect(registerPage.btnRegister).toBeEnabled();
        await expect(registerPage.btnRegister).toHaveText('Register');
        await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '/practice-login-form');
        await expect(page.getByText('At least 8 characters')).toBeVisible();
        await expect(page.getByText('At least one uppercase letter')).toBeVisible();
        await expect(page.getByText('At least one lowercase letter')).toBeVisible();
        await expect(page.getByText('At least one number (0-9)')).toBeVisible();
        await expect(page.getByText('At least one special')).toBeVisible();
    })


    test('Register with valid credentials', async ({ page }) => {
        await registerPage.validRegisterCredentials();
        await expect(page.getByTestId('register-success')).toBeVisible();
        await expect(page.getByText('Your account has been created')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Go to Login' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Go to Login' })).toBeEnabled();
        await expect(page.getByRole('button', { name: 'Go to Login' })).toHaveText('Go to Login');
    })


    test('Verify Register with All empty value', async ({ page }) => {
        await expect(page.getByTestId('register-error')).not.toBeVisible();
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
    })


    test('Verify Register with empty email', async ({ page }) => {
        await expect(page.getByTestId('register-error')).not.toBeVisible();
        await registerPage.password.fill('logicWind@1');
        await registerPage.confirmpassword.fill('logicWind@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Email is required')
    })


    test('Verify Register with empty password', async ({ page }) => {
        await expect(page.getByTestId('register-error')).not.toBeVisible();
        await registerPage.email.fill('logic@wind.com');
        await registerPage.confirmpassword.fill('logicWind@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password is required')
    })


    test('Verify Register with empty confirm password', async ({ page }) => {
        await expect(page.getByTestId('register-error')).not.toBeVisible();
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('logicWind@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Please confirm your password')
    })


    test('Verify register with invalid email', async ({ page }) => {
        await registerPage.email.fill('logic@windcom');
        await registerPage.password.fill('logicWind@1');
        await registerPage.confirmpassword.fill('logicWind@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-success')).not.toBeVisible();
    })


    test('cheking password and confirm password matching', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('logicWind@1');
        await registerPage.confirmpassword.fill('logicWind@');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Passwords do not match')
    })


    test('Verify registration with password missing a number', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('logicWind@');
        await registerPage.confirmpassword.fill('logicWind@');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password does not meet the requirements');
        await expect(page.getByText('At least one number (0-9)')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a uppercase', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('logicwind@1');
        await registerPage.confirmpassword.fill('logicwind@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password does not meet the requirements');
        await expect(page.getByText('At least one uppercase letter (A-Z)')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a lowercase', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('LOGICWIND@1');
        await registerPage.confirmpassword.fill('LOGICWIND@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password does not meet the requirements');
        await expect(page.getByText('At least one lowercase letter (a-z)')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password missing a special character', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('logicWind1');
        await registerPage.confirmpassword.fill('logicWind1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password does not meet the requirements');
        await expect(page.getByText('At least one special character (!@#$%^&*()_+)')).toHaveClass(/text-danger/);
    })


    test('Verify registration with password minimum length', async ({ page }) => {
        await registerPage.email.fill('logic@wind.com');
        await registerPage.password.fill('loWi@1');
        await registerPage.confirmpassword.fill('loWi@1');
        await registerPage.btnRegister.click();
        await expect(page.getByTestId('register-error')).toBeVisible();
        await expect(page.getByTestId('register-error')).toHaveText('Password does not meet the requirements');
        await expect(page.getByText('At least 8 characters')).toHaveClass(/text-danger/);
    })

})