import { General } from '../UIElementPage/general';

export class BasicElement extends General {
    constructor(page) {
        super(page);

        this.textField = page.getByTestId('ui-text-field');

        this.textArea = page.getByTestId('ui-textarea');

        this.clickMeButton = page.getByTestId('ui-click-button');

        this.sinCheckBox = page.getByTestId('ui-single-checkbox');

        this.mulCheckBox1 = page.getByTestId('ui-checkbox-option1');

        this.mulCheckBox2 = page.getByTestId('ui-checkbox-option2');

        this.mulCheckBox3 = page.getByTestId('ui-checkbox-option3');

        this.radioButton1 = page.getByTestId('ui-radio-Radio 1');

        this.radioButton2 = page.getByTestId('ui-radio-Radio 2');

        this.radioButton3 = page.getByTestId('ui-radio-Radio 3');

        this.sinSelDropdown = page.getByTestId('ui-single-dropdown');

        this.mulSelDropdown = page.getByTestId('ui-multi-dropdown');
    }
}