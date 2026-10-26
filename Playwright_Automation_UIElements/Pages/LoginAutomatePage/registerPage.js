export class RegisterPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByTestId('register-email');

        this.password = page.getByTestId('register-password');

        this.confirmpassword = page.getByTestId('register-confirm-password');

        this.btnRegister = page.getByTestId('register-submit');
    }

    async gotoRegister() {
        await this.page.goto('https://www.qapractice.com/register');
    }

    async validRegisterCredentials() {
        await this.email.fill('logic@wind.com');
        await this.password.fill('logicWind@1');
        await this.confirmpassword.fill('logicWind@1');
        await this.btnRegister.click();
    }
}