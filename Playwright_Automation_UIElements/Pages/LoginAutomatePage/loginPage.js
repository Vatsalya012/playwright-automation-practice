export class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByTestId('login-email');

        this.password = page.getByTestId('login-password');

        this.btnSignIn = page.getByTestId('login-submit');

        this.btnRemMe = page.getByTestId('login-remember');

        this.linkForgotPass = page.getByTestId('login-forgot-password');

        this.linkRegNow = page.getByTestId('login-register');
    }

    async gotoLogin() {
        await this.page.goto('https://www.qapractice.com/practice-login-form');
    }

    async validCredentials() {
        await this.email.fill('user@premiumbank.com');
        await this.password.fill('Bank@123')
    }
}