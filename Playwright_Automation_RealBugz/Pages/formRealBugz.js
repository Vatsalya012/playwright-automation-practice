import { expect } from "@playwright/test";

export class FormRealBugz {
    constructor(page) {
        this.page = page;

        this.lblFullName = page.getByText('Full Name*');
        this.fullName = page.getByRole('textbox', { name: 'Full Name*' });

        this.lblEmail = page.getByText('Email*');
        this.email = page.getByRole('textbox', { name: 'Email*' });

        this.lblContactNumber = page.getByText('Contact Number*');
        this.contactNumber = page.getByRole('textbox', { name: 'Contact Number*' });

        this.lblDateOfBirth = page.getByText('Date of Birth*');
        this.dateOfBirth = page.getByRole('textbox', { name: 'Date of Birth*' });

        this.lblExperience = page.getByText('Archaeology Experience');
        this.experience = page.getByLabel('Archaeology Experience');

        this.lblRole = page.getByText('Preferred Role in the');
        this.mulCheckboxResearcher = page.getByRole('checkbox', { name: 'Researcher' });
        this.mulCheckboxPhotographer = page.getByRole('checkbox', { name: 'Photographer' });
        this.mulCheckboxDroneOperator = page.getByRole('checkbox', { name: 'Drone Operator' });
        this.mulCheckboxCartographer = page.getByRole('checkbox', { name: 'Cartographer' });
        this.mulCheckboxMedic = page.getByRole('checkbox', { name: 'Medic' });
        this.mulCheckboxLogistician = page.getByRole('checkbox', { name: 'Logistician' });

        this.lblRegion = page.getByText('Preferred Expedition Region');
        this.radioSouthAmerica = page.getByRole('radio', { name: 'South America' });
        this.radioAfrica = page.getByRole('radio', { name: 'Africa' });
        this.radioAsia = page.getByRole('radio', { name: 'Asia' });
        this.radioEurope = page.getByRole('radio', { name: 'Europe' });
        this.radioAustralia = page.getByRole('radio', { name: 'Australia' });

        this.lblContactMethod = page.getByText('Preferred Contact Method');
        this.contactMethod = page.locator('#contactMethod');

        this.lblSalary = page.getByText('Select your desired salary');
        this.sliderSalary = page.getByRole('slider', { name: 'Select your desired salary' });
        this.rangeValue = page.locator('#rangeValue');

        this.lblUploadFile = page.getByText('Upload Passport/ID* (JPG, PNG');
        this.btnUploadFile = page.getByRole('button', { name: 'Upload Passport/ID* (JPG, PNG' });

        this.lblComment = page.getByText('Additional Comments');
        this.comment = page.getByRole('textbox', { name: 'Additional Comments' });

        this.checkboxTnC = page.getByRole('checkbox', { name: 'I Agree to Terms and' });

        this.btnSubmit = page.getByRole('button', { name: 'Submit Registration' });

        this.btnClear = page.getByRole('button', { name: 'Clear Form' });


        //Invalid State of elements
        this.invalidFullName = page.locator('#fullName:invalid');

        this.invalidContactNumber = page.locator('#contactNumber:invalid');

        this.invalidEmail = page.locator('#email:invalid');
    }

    async gotoFormUrl() {
        await this.page.goto('https://www.realbugz.com/en/task-form');
    }

    async validRegister() {
        await this.fullName.fill('Logic Wind');
        await this.email.fill('logic@wind.com');
        await this.contactNumber.fill('5486524587');
        await this.dateOfBirth.fill('2000-12-01');
        await this.experience.selectOption({ label: 'Amateur (up to 1 year)' });
        await this.mulCheckboxMedic.click();
        await this.mulCheckboxPhotographer.click();
        await this.radioAsia.click();
        await this.sliderSalary.focus();
        await this.sliderSalary.press('ArrowLeft');
        await this.contactMethod.selectOption({ label: 'WhatsApp' });
        await this.btnUploadFile.setInputFiles('C:/Users/ABCD/Downloads/2014bappa7.png')
        await this.comment.fill('this is the test comment');
        await this.checkboxTnC.click();
        await this.btnSubmit.click();
    }

    async successDialog() {
        this.page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('The form has been submitted!');
            await dialog.accept();
        });
    }


    async testFullName() {
        await this.email.fill('logic@wind.com');
        await this.contactNumber.fill('5486524587');
        await this.dateOfBirth.fill('2000-12-01');
        await this.experience.selectOption({ label: 'Amateur (up to 1 year)' });
        await this.mulCheckboxMedic.click();
        await this.mulCheckboxPhotographer.click();
        await this.radioAsia.click();
        await this.sliderSalary.focus();
        await this.sliderSalary.press('ArrowLeft');
        await this.contactMethod.selectOption({ label: 'WhatsApp' });
        await this.btnUploadFile.setInputFiles('C:/Users/ABCD/Downloads/2014bappa7.png')
        await this.comment.fill('this is the test comment');
        await this.checkboxTnC.click();
    }


    async testEmail() {
        await this.fullName.fill('Logic Wind');
        await this.contactNumber.fill('5486524587');
        await this.dateOfBirth.fill('2000-12-01');
        await this.experience.selectOption({ label: 'Amateur (up to 1 year)' });
        await this.mulCheckboxMedic.click();
        await this.mulCheckboxPhotographer.click();
        await this.radioAsia.click();
        await this.sliderSalary.focus();
        await this.sliderSalary.press('ArrowLeft');
        await this.contactMethod.selectOption({ label: 'WhatsApp' });
        await this.btnUploadFile.setInputFiles('C:/Users/ABCD/Downloads/2014bappa7.png')
        await this.comment.fill('this is the test comment');
        await this.checkboxTnC.click();
    }


    async testContactNumber() {
        await this.fullName.fill('Logic Wind');
        await this.email.fill('logic@wind.com');
        await this.dateOfBirth.fill('2000-12-01');
        await this.experience.selectOption({ label: 'Amateur (up to 1 year)' });
        await this.mulCheckboxMedic.click();
        await this.mulCheckboxPhotographer.click();
        await this.radioAsia.click();
        await this.sliderSalary.focus();
        await this.sliderSalary.press('ArrowLeft');
        await this.contactMethod.selectOption({ label: 'WhatsApp' });
        await this.btnUploadFile.setInputFiles('C:/Users/ABCD/Downloads/2014bappa7.png')
        await this.comment.fill('this is the test comment');
        await this.checkboxTnC.click();
    }

    async validComment() {
        await this.fullName.fill('Logic Wind');
        await this.email.fill('logic@wind.com');
        await this.contactNumber.fill('5486524587');
        await this.dateOfBirth.fill('2000-12-01');
        await this.experience.selectOption({ label: 'Amateur (up to 1 year)' });
        await this.mulCheckboxMedic.click();
        await this.mulCheckboxPhotographer.click();
        await this.radioAsia.click();
        await this.sliderSalary.focus();
        await this.sliderSalary.press('ArrowLeft');
        await this.contactMethod.selectOption({ label: 'WhatsApp' });
        await this.btnUploadFile.setInputFiles('C:/Users/ABCD/Downloads/2014bappa7.png')
        await this.checkboxTnC.click();
    }

}