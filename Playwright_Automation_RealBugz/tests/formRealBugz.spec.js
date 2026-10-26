import { test, expect } from '@playwright/test'
import { FormRealBugz } from '../Pages/formRealBugz'

test.describe('Registration Form Testing', async () => {

    let formRealBugz;

    test.beforeEach('Open Form Url', async ({ page }) => {
        formRealBugz = new FormRealBugz(page);
        await formRealBugz.gotoFormUrl();
    })

    //==============================================================================================================
    test.describe('General Form testing', () => {

        test('Verify all the elements in general', async ({ page }) => {
            // await page.pause();
            await expect.soft(page.getByRole('heading', { name: 'Register for the expedition' })).toBeVisible();
            await expect.soft(formRealBugz.lblFullName).toBeVisible();
            await expect.soft(formRealBugz.lblFullName).toContainText('*');
            await expect.soft(formRealBugz.fullName).toBeVisible();
            await expect.soft(formRealBugz.fullName).toBeEnabled();
            await expect.soft(formRealBugz.fullName).toHaveAttribute('placeholder', 'e.g., Peter Ford');
            await expect.soft(formRealBugz.fullName).toHaveAttribute('required');
            await expect.soft(formRealBugz.lblEmail).toBeVisible();
            await expect.soft(formRealBugz.lblEmail).toContainText('*');
            await expect.soft(formRealBugz.email).toBeVisible();
            await expect.soft(formRealBugz.email).toBeEnabled();
            await expect.soft(formRealBugz.email).toHaveAttribute('placeholder', 'e.g., test@email.com');
            await expect.soft(formRealBugz.lblContactNumber).toBeVisible();
            await expect.soft(formRealBugz.lblContactNumber).toContainText('*');
            await expect.soft(formRealBugz.contactNumber).toBeVisible();
            await expect.soft(formRealBugz.contactNumber).toBeEnabled();
            await expect.soft(formRealBugz.contactNumber).toHaveAttribute('placeholder', 'e.g., +1234567890');
            await expect.soft(formRealBugz.lblDateOfBirth).toBeVisible();
            await expect.soft(formRealBugz.lblDateOfBirth).toContainText('*');
            await expect.soft(formRealBugz.dateOfBirth).toBeVisible();
            await expect.soft(formRealBugz.dateOfBirth).toBeEnabled();
            await expect.soft(formRealBugz.dateOfBirth).toHaveAttribute('type', 'date');
            await expect.soft(formRealBugz.lblExperience).toBeVisible();
            await expect.soft(formRealBugz.lblExperience).toContainText('*');
            await expect.soft(formRealBugz.experience).toBeVisible();
            await expect.soft(formRealBugz.experience).toBeEnabled();
            await expect.soft(formRealBugz.experience).toContainText('No experience');
            await expect.soft(formRealBugz.lblRole).toBeVisible();
            await expect.soft(formRealBugz.lblRole).toContainText('*');
            await expect.soft(formRealBugz.lblRegion).toBeVisible();
            await expect.soft(formRealBugz.lblRegion).toContainText('*');
            await expect.soft(formRealBugz.lblSalary).toBeVisible();
            await expect.soft(formRealBugz.lblSalary).not.toContainText('*');
            await expect.soft(formRealBugz.sliderSalary).toBeVisible();
            await expect.soft(formRealBugz.sliderSalary).toBeEnabled();
            await expect.soft(formRealBugz.lblContactMethod).toBeVisible();
            await expect.soft(formRealBugz.lblContactMethod).not.toContainText('*');
            await expect.soft(formRealBugz.contactMethod).toBeVisible();
            await expect.soft(formRealBugz.contactMethod).toBeEnabled();
            await expect.soft(formRealBugz.lblUploadFile).toBeVisible();
            await expect.soft(formRealBugz.lblUploadFile).toContainText('*');
            await expect.soft(formRealBugz.btnUploadFile).toBeVisible();
            await expect.soft(formRealBugz.btnUploadFile).toBeEnabled();
            await expect.soft(formRealBugz.btnUploadFile).toHaveAttribute('type', 'file');
            await expect.soft(formRealBugz.lblComment).toBeVisible();
            await expect.soft(formRealBugz.lblComment).not.toContainText('*');
            await expect.soft(formRealBugz.comment).toBeVisible();
            await expect.soft(formRealBugz.comment).toBeEnabled();
            await expect.soft(page.getByText('I Agree to Terms and')).toBeVisible();
            await expect.soft(page.getByText('I Agree to Terms and')).toContainText('*');
            await expect.soft(formRealBugz.checkboxTnC).not.toBeChecked();
            await expect.soft(formRealBugz.btnSubmit).toBeVisible();
            await expect.soft(formRealBugz.btnSubmit).toBeEnabled();
            await expect.soft(formRealBugz.btnSubmit).toHaveText('Submit Registration');
            await expect.soft(formRealBugz.btnClear).toBeVisible();
            await expect.soft(formRealBugz.btnClear).toBeEnabled();
            await expect.soft(formRealBugz.btnClear).toHaveText('Clear Form');
        })


        test('Verify Registration with valid inputs', async () => {
            await formRealBugz.successDialog();
            await formRealBugz.validRegister();
        })

    })

    //==============================================================================================================
    //checking the fullname field
    test.describe('Testing Specific FullName Field', async () => {

        //check the minimum character limit of full name field
        test('Verify minimum character length of Full Name', async () => {
            await formRealBugz.fullName.fill('Ab');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(2);

            await formRealBugz.successDialog();
            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
        })


        //check the minimum character +1 length of full name
        test('Verify Minimum +1 character length of Full Name', async () => {
            await formRealBugz.fullName.fill('Abc');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(3);

            await formRealBugz.successDialog();
            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
        })


        //check the minimum character -1 length of full name
        test('Verify Minimum -1 character length of Full Name', async () => {
            await formRealBugz.fullName.fill('A');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(1)

            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidFullName).toHaveCount(1);
        })


        //check the maximum character limit of full name field
        test('Verify maximum character length of Full Name', async () => {
            await formRealBugz.fullName.fill('Lorem ipsum dolor sit amet, consectetuer adipiscin');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(50);

            await formRealBugz.successDialog();
            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
        })


        //check the maximum character +1 length of full name
        test('Verify Maximum +1 character length of Full Name', async () => {
            await formRealBugz.fullName.fill('Lorem ipsum dolor sit amet, consectetuer adipiscing');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(51);

            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidFullName).toHaveCount(1);
        })


        //check the maximum character -1 length of full name
        test('Verify Maximum -1 character length of Full Name', async () => {
            await formRealBugz.fullName.fill('Lorem ipsum dolor sit amet, consectetuer adipisci');
            const value = await formRealBugz.fullName.inputValue();
            expect(value.length).toBe(49)

            await formRealBugz.successDialog();
            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
        })


        //checking allowed characters for fullname
        test('Verify register with allowed characters of fullname', async () => {
            await formRealBugz.fullName.fill("logi'c-wind A");
            await expect(formRealBugz.fullName).toHaveValue(/^[A-Za-zA-Яа-яЁё\s'-]+$/);

            await formRealBugz.successDialog();
            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
        })


        //checking not allowed characters of fullname
        test('Verify register with not-allowed characters of fullname', async () => {
            await formRealBugz.fullName.fill("logi@c#wind123");
            await expect(formRealBugz.fullName).not.toHaveValue(/^[A-Za-zA-Яа-яЁё\s'-]+$/);

            await formRealBugz.testFullName();
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidFullName).toHaveCount(1);
        })

    })

    //-----------------------------------------------------------------------------------------------------
    //checking validations of email field
    test.describe('Testing Specific Email field', async () => {

        //email should not be empty and format must be email
        test('verify proper email format and cannot be empty', async ({ page }) => {
            await expect(formRealBugz.email).toHaveAttribute('type', 'email');
            await expect(formRealBugz.email).toHaveAttribute('required');
        })


        //checking maximum length of email field
        test('verify email maximum length', async () => {
            await formRealBugz.email.fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA@bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.com');
            const value = await formRealBugz.email.inputValue();
            expect(value.length).toBe(100);

            await formRealBugz.successDialog();
            await formRealBugz.testEmail();
            await formRealBugz.btnSubmit.click();
        })


        //boundary value checking for maximum email length +1
        test('verify email maximum length +1', async () => {
            await formRealBugz.email.fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA@cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.com');
            const value = await formRealBugz.email.inputValue();
            expect(value.length).toBe(101);

            await formRealBugz.testEmail();
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidEmail).toHaveCount(1);
        })


        //boundary value checking for maximum email length -1
        test('verify email maximum length -1', async () => {
            await formRealBugz.email.fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.com');
            const value = await formRealBugz.email.inputValue();
            expect(value.length).toBe(99);

            await formRealBugz.successDialog();
            await formRealBugz.testEmail();
            await formRealBugz.btnSubmit.click();
        })

    })

    //================================================================================================================
    // Only Contact Number related tests
    test.describe('Testing Specific Contact Number field', async () => {

        //test to check contact number cannot be empty and its type is telephone
        test('verify contact number type and cannot be empty', async () => {
            await expect(formRealBugz.contactNumber).toHaveAttribute('required');
            await expect(formRealBugz.contactNumber).toHaveAttribute('type', 'tel');
        })


        //boundary value test to check maximum length accepted by the contact number field
        test('verify contact number maximum length', async () => {
            await formRealBugz.contactNumber.fill('012345678915973');
            const value = await formRealBugz.contactNumber.inputValue();
            expect(value.length).toBe(15);

            await formRealBugz.successDialog();
            await formRealBugz.testContactNumber();
            await formRealBugz.btnSubmit.click();
        })


        //boundary value test to check more than maximum length is a accepted or not by contact number field
        test('verify contact number maximum length +1', async () => {
            await formRealBugz.contactNumber.fill('0123456789159730');
            const value = await formRealBugz.contactNumber.inputValue();
            expect(value.length).toBe(16);

            await formRealBugz.testContactNumber();
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidContactNumber).toHaveCount(1);
        })


        test('verify contact number maximum length -1', async () => {
            await formRealBugz.contactNumber.fill('12345678915973');
            const value = await formRealBugz.contactNumber.inputValue();
            expect(value.length).toBe(14);

            await formRealBugz.successDialog();
            await formRealBugz.testContactNumber();
            await formRealBugz.btnSubmit.click();
        })

        //************************************************************************************************************************** */
        // allowed character for Full namec
        test.fixme('verify contact number with allowed characters', async ({ page }) => {
            await formRealBugz.contactNumber.fill('+123456 -789159');
            await expect(formRealBugz.contactNumber).toHaveValue(/^[0-9\s+-]+$/);
            await formRealBugz.successDialog();
            await formRealBugz.testContactNumber();
            await formRealBugz.btnSubmit.click();
            //why this gets passed because alert box doesnt get open as it is invalid input
        });
        //************************************************************************************************************************** */


        //not allowed character for full name
        test('verify contact number with not allowed characters', async () => {
            // await page.pause();
            await formRealBugz.testContactNumber();
            await formRealBugz.contactNumber.fill('ind4567891597#');
            await expect(formRealBugz.contactNumber).not.toHaveValue(/^[0-9\s+-]+$/);
            await formRealBugz.btnSubmit.click();
            await expect(formRealBugz.invalidContactNumber).toHaveCount(1);
        })

    })


    //only date of birth related tests
    test.describe('Testing of Date of Birth Field', async () => {

        //checking the date of birth is compulsory and should be date type
        test('Verify that date of birth cannot be empty and its type', async () => {
            await expect(formRealBugz.dateOfBirth).toHaveAttribute('required');
            await expect(formRealBugz.dateOfBirth).toHaveAttribute('type', 'date');
        })

    })


    //only Archaeology Experience field test
    test.describe('Testing Archaeology Experience dropdown', async () => {

        //checking dropdown selection is compulsory and also default is 'No experience'
        test('Testing Archaeology Experience is required and default option', async () => {
            await formRealBugz.experience.selectOption('No experience');
            await expect.soft(formRealBugz.experience).toHaveAttribute('required');
        })
    })


    //only preferred role in expedition field test
    test.describe('Testing Role Expedition', async () => {

        //checking role default state
        test('Testing role default no checkbox should be checked', async () => {
            await expect(formRealBugz.mulCheckboxResearcher).not.toBeChecked();
            await expect(formRealBugz.mulCheckboxPhotographer).not.toBeChecked();
            await expect(formRealBugz.mulCheckboxDroneOperator).not.toBeChecked();
            await expect(formRealBugz.mulCheckboxCartographer).not.toBeChecked();
            await expect(formRealBugz.mulCheckboxMedic).not.toBeChecked();
            await expect(formRealBugz.mulCheckboxLogistician).not.toBeChecked();
        })


        //checking available options as per requirement
        test('Testing the Options available in role', async ({ page }) => {
            // await page.pause();
            await expect(page.getByText('Researcher')).toHaveText('Researcher');
            await expect(page.getByText('Photographer')).toHaveText('Photographer');
            await expect(page.getByText('Drone Operator')).toHaveText('Drone Operator');
            await expect(page.getByText('Cartographer')).toHaveText('Cartographer');
            await expect(page.getByText('Medic')).toHaveText('Medic');
            await expect(page.getByText('Logistician')).toHaveText('Logistician');
        })


        //checking clicking on role name also check the checkbox
        test('verify that clicking on role name also select the respective checkbox', async ({ page }) => {
            // await page.pause();
            await page.getByText('Researcher').click();
            await expect(formRealBugz.mulCheckboxResearcher).toBeChecked();
            await page.getByText('Photographer').click();
            await expect(formRealBugz.mulCheckboxPhotographer).toBeChecked();
            await page.getByText('Drone Operator').click();
            await expect(formRealBugz.mulCheckboxDroneOperator).toBeChecked();
            await page.getByText('Cartographer').click();
            await expect(formRealBugz.mulCheckboxCartographer).toBeChecked();
            await page.getByText('Medic').click();
            await expect(formRealBugz.mulCheckboxMedic).toBeChecked();
            await page.getByText('Logistician').click();
            await expect(formRealBugz.mulCheckboxLogistician).toBeChecked();
        })

    })


    // only Preferred Expedition Region field test
    test.describe('Testing Preferred Expedition Region field', async () => {

        //checking region selection is compulsory
        test('Verify that region cannot be empty', async ({ page }) => {
            await expect(page.locator('#southAmerica')).toHaveAttribute('required');
        })


        //checking region initial state
        test('verify that initially region is not selected', async () => {
            await expect(formRealBugz.radioSouthAmerica).not.toBeChecked();
            await expect(formRealBugz.radioAfrica).not.toBeChecked();
            await expect(formRealBugz.radioAsia).not.toBeChecked();
            await expect(formRealBugz.radioEurope).not.toBeChecked();
            await expect(formRealBugz.radioAustralia).not.toBeChecked();
        })


        //checking region available option
        test('Testing the option available in region', async ({ page }) => {
            // await page.pause();
            await expect(page.getByText('South America')).toHaveText('South America');
            await expect(page.getByText('Africa')).toHaveText('Africa');
            await expect(page.getByText('Asia')).toHaveText('Asia');
            await expect(page.getByText('Europe')).toHaveText('Europe');
            await expect(page.getByText('Australia')).toHaveText('Australia');
        })


        //checking region single selection only
        test('Verify that only one region can be selected', async () => {
            await formRealBugz.radioSouthAmerica.click();
            await expect(formRealBugz.radioSouthAmerica).toBeChecked();
            await expect(formRealBugz.radioAfrica).not.toBeChecked();
            await expect(formRealBugz.radioAsia).not.toBeChecked();
            await expect(formRealBugz.radioEurope).not.toBeChecked();
            await expect(formRealBugz.radioAustralia).not.toBeChecked();

            await formRealBugz.radioAfrica.click();
            await expect(formRealBugz.radioAfrica).toBeChecked();
            await expect(formRealBugz.radioSouthAmerica).not.toBeChecked();
            await expect(formRealBugz.radioAsia).not.toBeChecked();
            await expect(formRealBugz.radioEurope).not.toBeChecked();
            await expect(formRealBugz.radioAustralia).not.toBeChecked();

            await formRealBugz.radioAsia.click();
            await expect(formRealBugz.radioAsia).toBeChecked();
            await expect(formRealBugz.radioSouthAmerica).not.toBeChecked();
            await expect(formRealBugz.radioAfrica).not.toBeChecked();
            await expect(formRealBugz.radioEurope).not.toBeChecked();
            await expect(formRealBugz.radioAustralia).not.toBeChecked();

            await formRealBugz.radioEurope.click();
            await expect(formRealBugz.radioEurope).toBeChecked();
            await expect(formRealBugz.radioSouthAmerica).not.toBeChecked();
            await expect(formRealBugz.radioAfrica).not.toBeChecked();
            await expect(formRealBugz.radioAsia).not.toBeChecked();
            await expect(formRealBugz.radioAustralia).not.toBeChecked();

            await formRealBugz.radioAustralia.click();
            await expect(formRealBugz.radioAustralia).toBeChecked();
            await expect(formRealBugz.radioSouthAmerica).not.toBeChecked();
            await expect(formRealBugz.radioAfrica).not.toBeChecked();
            await expect(formRealBugz.radioAsia).not.toBeChecked();
            await expect(formRealBugz.radioEurope).not.toBeChecked();
        })


        //checking region is selected on region name click
        test('Verify that radio is selected on region name click', async ({ page }) => {
            await page.getByText('South America').click();
            await expect(formRealBugz.radioSouthAmerica).toBeChecked();
            await page.getByText('Africa').click();
            await expect(formRealBugz.radioAfrica).toBeChecked();
            await page.getByText('Asia').click();
            await expect(formRealBugz.radioAsia).toBeChecked();
            await page.getByText('Europe').click();
            await expect(formRealBugz.radioEurope).toBeChecked();
            await page.getByText('Australia').click();
            await expect(formRealBugz.radioAustralia).toBeChecked();
        })

    })


    //only salary slider tests
    test.describe('Testing Salary slider', async () => {

        //checking the title of the slider section
        test('Verify the label of slider section', async ({ page }) => {
            await expect(page.locator("label[for='range']")).toHaveText('Select your desired salary per week ($): 700');
            await expect.soft(formRealBugz.sliderSalary).not.toHaveAttribute('required');
        })


        //checking the default value of slider range
        test('Verify the default value of slider range', async () => {
            await expect(formRealBugz.rangeValue).toHaveText('700');
        })


        //checking the minimum value of slider
        test('verify the minimum value of slider', async () => {
            // await page.pause();
            await formRealBugz.sliderSalary.press('Home');
            await expect(formRealBugz.rangeValue).toHaveText('0');
        })


        //checking the maximum value of slider
        test('verify the maximum value of slider', async () => {
            // await page.pause();
            await formRealBugz.sliderSalary.press('End');
            await expect(formRealBugz.rangeValue).toHaveText('1700');
        })


        //checking the incremental/decremental steps of slider
        test('verify the incremental Steps value of slider', async () => {
            await formRealBugz.sliderSalary.focus();
            await formRealBugz.sliderSalary.press('ArrowRight');
            await expect(formRealBugz.rangeValue).toHaveText('710');
        })


        //checking the incremental/decremental steps of slider
        test('verify the decremental Steps value of slider', async () => {
            await formRealBugz.sliderSalary.focus();
            await formRealBugz.sliderSalary.press('ArrowLeft');
            await expect(formRealBugz.rangeValue).toHaveText('690');
        })


        // slider value dont get reset after sumbit button click event
        test('Verify that Slider value resets after Submit Registration button click', async () => {
            await formRealBugz.successDialog();
            await formRealBugz.validRegister();
            await expect(formRealBugz.rangeValue).toHaveText('700');
        })


        // slider value dont get reset after sumbit button click event
        test('Verify that Slider value resets after Clear Form button click', async () => {
            await formRealBugz.testFullName();
            await formRealBugz.btnClear.click();
            await expect(formRealBugz.rangeValue).toHaveText('700');
        })

    })


    //only contact method field testing
    test.describe('Testing Preferred Contact Method field', async () => {

        // check the type of field should be radio button
        test('Testing the type of field for radio button', async () => {
            await expect.soft(formRealBugz.contactMethod).toHaveAttribute('type', 'radio');
            await expect.soft(formRealBugz.contactMethod).not.toHaveAttribute('required');
        })


        //checking the available options for the contact methods as per requiements
        test('Testing the available contact method option', async ({ page }) => {
            // await page.pause();
            await formRealBugz.contactMethod.selectOption('Email');
            await expect(page.getByRole('option', { name: 'Email' })).toHaveText('Email');
            await formRealBugz.contactMethod.selectOption('Phone');
            await expect(page.getByRole('option', { name: 'Phone' })).toHaveText('Phone');
            await formRealBugz.contactMethod.selectOption('WhatsApp');
            await expect(page.getByRole('option', { name: 'WhatsApp' })).toHaveText('WhatsApp');
            await formRealBugz.contactMethod.selectOption('Telegram');
            await expect(page.getByRole('option', { name: 'Telegram' })).toHaveText('SMS');
        })

    })


    //only upload file tests
    test.describe('Testing upload file button', async () => {

        //checking uploading file is required
        test('Testing upload file is required', async () => {
            await expect(formRealBugz.btnUploadFile).toHaveAttribute('required');
            await expect(formRealBugz.btnUploadFile).toHaveAttribute('type', 'file');
        })

    })


    //only comments field test
    test.describe('Testing Addtional comment field', async () => {

        //checking that comments should not be compulsory
        test('Testing Additional comments required attribute', async () => {
            await expect(formRealBugz.comment).not.toHaveAttribute('required');
        })


        //checking maximum character limit for comments
        test('Testing Maximum character limit', async () => {
            await formRealBugz.successDialog();
            await formRealBugz.validComment();
            await formRealBugz.comment.fill('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N');
            const value = await formRealBugz.comment.inputValue();
            expect(value.length).toBe(1000);

            await formRealBugz.btnSubmit.click();
        })


        //checking maximum character limit for comments
        test('Testing Maximum -1 character limit', async () => {
            await formRealBugz.successDialog();
            await formRealBugz.validComment();
            await formRealBugz.comment.fill('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. ');
            const value = await formRealBugz.comment.inputValue();
            expect(value.length).toBe(999);

            await formRealBugz.btnSubmit.click();
        })


        //checking maximum character limit for comments
        test('Testing Maximum +1 character limit', async ({ page }) => {
            await formRealBugz.comment.fill('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. No');
            const value = await formRealBugz.comment.inputValue();
            expect(value.length).toBe(1001);

            await formRealBugz.validComment();
            await formRealBugz.btnSubmit.click();
            await expect(page.locator('#comments:invalid')).toHaveCount(1);
        })

    })


    //only terms and condition
    test.describe('Terms and condition field', async () => {

        //checking it should be compulsory and not checked
        test('Testing Terms and Condition should be compulsory and Initial state', async () => {
            await expect(formRealBugz.checkboxTnC).toHaveAttribute('required');
            await expect(formRealBugz.checkboxTnC).not.toBeChecked();
        })

    })

})