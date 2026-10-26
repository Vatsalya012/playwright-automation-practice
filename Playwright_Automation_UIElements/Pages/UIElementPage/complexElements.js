import { General } from '../UIElementPage/general';

export class ComplexElements extends General {
    constructor(page) {
        super(page);

        this.btnShowModal = page.getByTestId('ui-modal-open');

        this.modalPopup = page.locator('.modal-dialog');

        this.fieldDatePicker = page.getByTestId('ui-datepicker');

        this.uploadFile = page.getByTestId('ui-file-upload');

        this.btnUploadFile = page.getByRole('button', { name: 'Simulate Download' });

        this.dragMe = page.getByText('Drag Me', { exact: true });

        this.dropMe = page.getByText('Drop Here', { exact: true });

        this.iFrame = page.locator('iframe[title="iframe-practice"]').contentFrame().locator('html');
    }
}