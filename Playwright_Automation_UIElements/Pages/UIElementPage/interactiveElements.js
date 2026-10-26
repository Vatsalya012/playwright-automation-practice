import { General } from '../UIElementPage/general';

export class InteractiveElements extends General {
    constructor(page) {
        super(page);

        this.anchorTag = page.getByTestId('ui-link');

        this.clickImage = page.getByTestId('ui-image');

        this.toolTip = page.getByTestId('ui-tooltip-trigger');

        this.slider = page.getByTestId('ui-slider');

        this.btnProgressBar = page.getByTestId('ui-progress-increment');

        this.optProgressBar = page.getByText('Slider Value:');
    }
}