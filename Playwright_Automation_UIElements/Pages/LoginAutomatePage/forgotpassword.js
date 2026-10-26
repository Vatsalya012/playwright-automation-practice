export class ForgotPassword {
    constructor(page) {
        this.page = page;

        this.email = page.getByTestId('forgot-email');

        this.btnContinue = page.getByTestId('forgot-email-submit');

        this.securityCode = page.getByTestId('forgot-code');

        this.btnVerifyCode = page.getByTestId('forgot-code-submit');

        this.currentPassword = page.getByTestId('forgot-current-password');

        this.newPassword = page.getByTestId('forgot-new-password');

        this.confirmNewPassword = page.getByTestId('forgot-confirm-password');

        this.btnForgotPassword = page.getByTestId('forgot-submit');
    }

    async forgotPasswordUrl() {
        await this.page.goto('https://www.qapractice.com/forget-password');
    }

    async validForgotPasswordFlow() {
        await this.email.fill('user@premiumbank.com');
        await this.btnContinue.click();
        await this.securityCode.fill('BANK1234');
        await this.btnVerifyCode.click();
        await this.currentPassword.fill('Bank@123');
        await this.newPassword.fill('Bank@1234');
        await this.confirmNewPassword.fill('Bank@1234');
        await this.btnForgotPassword.click();
    }

}