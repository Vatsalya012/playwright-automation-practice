import { expect } from '@playwright/test'

export class General {
    constructor(page) {
        this.page = page;

        //elements of Central Perk Staff Login
        this.staffUsername = page.locator('#login-username');
        this.staffPassword = page.locator('#login-password');
        this.btnSuccessLogin = page.locator('#login-submit');
        this.btnStaffLogout = page.locator('#login-logout');

        //elements of Starter Lab Team Picker
        this.starterlab_checkboxEmber = page.locator('#checkboxes-ember');
        this.starterlab_checkboxSquirt = page.locator('#checkboxes-squirt');
        this.starterlab_checkboxSprout = page.locator('#checkboxes-sprout');
        this.starterlab_radioFire = page.locator('#checkboxes-type-fire');
        this.starterlab_radioWater = page.locator('#checkboxes-type-water');
        this.starterlab_radioGrass = page.locator('#checkboxes-type-grass');
        this.starterlab_Summary = page.locator('#checkboxes-summary');

        //elements of sorting ceremony
        this.sortingceremony_dropdownNative = page.locator('#dropdown');
        this.sortingceremony_dropdownResult = page.locator('#dropdown-result');
        this.sortingceremony_dropdownCustom = page.locator('#dropdown-custom-trigger');

        //elements of barista keypad coffee shop
        this.baristakeypad_Shots = page.locator('#inputs-shots');
        this.baristakeypad_keyLoggerResult = page.locator('#inputs-key-result');
        this.baristakeypad_keyLogger = page.locator('#inputs-keys');
        this.baristakeypad_orderNoteCount = page.locator('#inputs-note-count');
        this.baristakeypad_orderNote = page.locator('#inputs-note');

        //elements of dundies alert page
        this.dundies_alertResult = page.locator('#alerts-result');
        this.dundies_alertAlert = page.locator('#alerts-alert');
        this.dundies_alertConfirm = page.locator('#alerts-confirm');
        this.dundies_alertPrompt = page.locator('#alerts-prompt');

        //elements of screenplay submissions page
        this.screenplay_btnUploadInput = page.locator('#upload-input');
        this.screenplay_uploadDropzone = page.locator('#upload-dropzone');
        this.screenplay_uploadResult = page.locator('#upload-result');
        this.screenplay_btnUploadSubmit = page.locator('#upload-submit');
        this.screenplay_uploadServerResult = page.locator('#upload-server-result');

        //elements of apothecary Index page
        this.apothecary_input = page.locator('#combobox-input');
        this.apothecary_result = page.locator('#combobox-result');
        this.apothecary_comboListBox = page.locator('#combobox-listbox');

        //elements of time circuit page
        this.timeCircuit_btnPrev = page.locator('#date-picker-prev');
        this.timeCircuit_btnNext = page.locator('#date-picker-next');
        this.timeCircuit_Month = page.locator('#date-picker-month');
        this.timeCircuit_Value = page.locator('#date-picker-value');
        this.timeCircuit_Native = page.locator('#date-picker-native');
        this.timeCircuit_nativeValue = page.locator('#date-picker-native-value');

        //elements of customs declaration page
        this.customDeclare_email = page.locator('#native-validation-email');
        this.customDeclare_quantity = page.locator('#native-validation-quantity');
        this.customDeclare_code = page.locator('#native-validation-code');
        this.customDeclare_btnSubmit = page.locator('#native-validation-submit');
        this.customDeclare_summary = page.locator('#native-validation-summary');
        this.customDeclare_flashSuccess = page.locator('#flash');

        //elements of transporter Room page
        this.transporterRoom_btnStart1 = page.locator('#dynamic-loading-start-1');
        this.transporterRoom_msgFinish1 = page.locator('#dynamic-loading-finish-1');
        this.transporterRoom_btnStart2 = page.locator('#dynamic-loading-start-2');
        this.transporterRoom_msgFinish2 = page.locator('#dynamic-loading-finish-2');

        //elements of paddock control page
        this.paddockControl_voltage = page.locator('#dynamic-controls-voltage');
        this.paddockControl_btnToggle = page.locator('#dynamic-controls-toggle-input');
        this.paddockControl_checkGoat = page.locator('#dynamic-controls-goat');
        this.paddockControl_btnToggleCheckbox = page.locator('#dynamic-controls-toggle-checkbox');
        this.paddockControl_message = page.locator('#dynamic-controls-message');

        //elements of squad bench page
        this.squadBench_btnAdd = page.locator('#add-remove-add');
        this.squadBench_count = page.locator('#add-remove-count');
        this.squadBench_bench = page.locator('#add-remove-bench');
        this.squadBench_manual = page.locator('.added-manually');

        //elements of pizza order toast page
        this.pizzaOrderToast_btnPizzaOrder = page.locator('#notifications-order');
        this.pizzaOrderToast_flash = page.locator('#flash');
        this.pizzaOrderToast_Success = page.locator('.flash-success');
        this.pizzaOrderToast_Fail = page.locator('.flash-error');

        //elements of Bounty Board page
        this.bountyBoard_btnRefresh = page.locator('#dynamic-content-refresh');
        this.bountyBoard_Board = page.locator('#dynamic-content-board');
        this.bountyBoard_Slot = page.locator('[data-testid="dynamic-content-slot"]');
        this.bountyBoard_Slot1 = page.locator('#dynamic-content-slot-1');
        this.bountyBoard_Slot2 = page.locator('#dynamic-content-slot-2');
        this.bountyBoard_Slot3 = page.locator('#dynamic-content-slot-3');
        this.bountyBoard_Names = page.locator('[data-testid="dynamic-content-name"]');
        this.bountyBoard_Bounty = page.locator('[data-testid="dynamic-content-bounty"]');
        this.bountyBoard_Count = page.locator('#dynamic-content-count');

        //elements of Endless Deals page
        this.endlessDeals_Counter = page.locator('#infinite-scroll-count');
        this.endlessDeals_Sentinel = page.locator('#infinite-scroll-sentinel');
        this.endlessDeals_End = page.locator('#infinite-scroll-end');
        this.endlessDeals_itemsCount = page.locator('[data-testid="infinite-scroll-item"]');
        this.endlessDeals_items10 = page.locator('#infinite-scroll-item-10');
        this.endlessDeals_items20 = page.locator('#infinite-scroll-item-20');
        this.endlessDeals_items30 = page.locator('#infinite-scroll-item-30');
        this.endlessDeals_items40 = page.locator('#infinite-scroll-item-40');
        this.endlessDeals_items50 = page.locator('#infinite-scroll-item-50');
        this.endlessDeals_items60 = page.locator('#infinite-scroll-item-60');
        this.endlessDeals_items70 = page.locator('#infinite-scroll-item-70');
        this.endlessDeals_items80 = page.locator('#infinite-scroll-item-80');
        this.endlessDeals_items90 = page.locator('#infinite-scroll-item-90');

        //elements of pit wall telemetry page
        this.pitWall_btnStart = page.locator('#live-feed-start');
        this.pitWall_feedCount = page.locator('#live-feed-count');
        this.pitWall_Logs = page.locator('#live-feed-log');
        this.pitWall_Reset = page.locator('#live-feed-reset');
        this.pitWall_End = page.locator('#live-feed-end');

        //elements of revolving door page
        this.revolvingDoor_btnCycleDoor = page.locator('#stale-element-cycle');
        this.revolvingDoor_autoCycle = page.locator('#stale-element-auto');
        this.revolvingDoor_Count = page.locator('#stale-element-count');
        this.revolvingDoor_Result = page.locator('#stale-element-result');
        this.revolvingDoor_guest1 = page.locator('#stale-element-guest-1');
        this.revolvingDoor_guest2 = page.locator('#stale-element-guest-2');
        this.revolvingDoor_guest3 = page.locator('#stale-element-guest-3');
        this.revolvingDoor_guest4 = page.locator('#stale-element-guest-4');
        this.revolvingDoor_guestList = page.locator('[data-testid="stale-element-guest"]');

        //elements of ring bearer page
        this.ringBearer_columnA = page.locator('#dnd-column-a');
        this.ringBearer_columnB = page.locator('#dnd-column-b');
        this.ringBearer_Ring = page.locator('#dnd-ring');
        this.ringBearer_Member = page.locator('[data-testid="dnd-member"]');
        this.ringBearer_Order = page.locator('#dnd-order');
        this.ringBearer_Fellowship = page.locator('#dnd-fellowship');

        //elements of hover sigils page
        this.hoverSigil_Sigils = page.locator('[data-testid="hovers-sigil"]');
        this.hoverSigil_sigil1 = page.locator('#hovers-sigil-1');
        this.hoverSigil_sigil1Profile = page.locator('#hovers-profile-link-1');
        this.hoverSigil_sigil2 = page.locator('#hovers-sigil-2');
        this.hoverSigil_sigil2Profile = page.locator('#hovers-profile-link-2');
        this.hoverSigil_sigil3 = page.locator('#hovers-sigil-3');
        this.hoverSigil_sigil3Profile = page.locator('#hovers-profile-link-3');
    }

    //-------------------------------------Url Sections Start-------------------------------------
    //base url function of central perk staff login
    async goto_StaffLoginUrl() {
        await this.page.goto('https://funui.dev/challenges/login');
    }


    //base url function of starter lab team picker
    async goto_StarterLabUrl() {
        await this.page.goto('https://funui.dev/challenges/checkboxes');
    }


    //base url function of sorting ceremony
    async goto_SortingCeremonyUrl() {
        await this.page.goto('https://funui.dev/challenges/dropdown');
    }


    //base url function of Barista Keypad coffee shop
    async goto_BaristaKeypadUrl() {
        await this.page.goto('https://funui.dev/challenges/inputs');
    }


    //base url function of Dundies alert page
    async goto_DundiesUrl() {
        await this.page.goto('https://funui.dev/challenges/alerts');
    }


    //base url function of screenplay submissions page
    async goto_ScreenplaySubmissionsUrl() {
        await this.page.goto('https://funui.dev/challenges/upload');
    }


    //base url function of apothecary index page
    async goto_ApothecaryIndexUrl() {
        await this.page.goto('https://funui.dev/challenges/combobox');
    }


    //base url function of time circuit page
    async goto_TimeCircuitsUrl() {
        await this.page.goto('https://funui.dev/challenges/date-picker');
    }


    //base url function of custom declaration page
    async goto_CustomDeclarationUrl() {
        await this.page.goto('https://funui.dev/challenges/native-validation');
    }


    //base url function of Transporter room page
    async goto_TransporterRoom() {
        await this.page.goto('https://funui.dev/challenges/dynamic-loading?delay=500');
    }


    //base url function of Paddock Control page
    async goto_PaddockControl() {
        await this.page.goto('https://funui.dev/challenges/dynamic-controls');
    }


    //base url function of Squad Bench page
    async goto_SquadBenchUrl() {
        await this.page.goto('https://funui.dev/challenges/add-remove');
    }


    //base url function of Pizza Order Toasts page
    async goto_PizzaOrderToastsUrl() {
        await this.page.goto('https://funui.dev/challenges/notifications');
    }


    //base url function of The Bounty Board page
    async goto_BountyBoard() {
        await this.page.goto('https://funui.dev/challenges/dynamic-content');
    }


    //base url function of endless deals page
    async goto_EndlessDealsUrl() {
        await this.page.goto('https://funui.dev/challenges/infinite-scroll');
    }


    //base url function of pit wall telemetry
    async goto_PitWallTelemetryUrl() {
        await this.page.goto('https://funui.dev/challenges/live-feed');
    }


    //base url function of revolving door page
    async goto_RevolvingDoorUrl() {
        await this.page.goto('https://funui.dev/challenges/stale-element');
    }


    //base url function of ring bearer page
    async goto_RingBearerUrl() {
        await this.page.goto('https://funui.dev/challenges/drag-and-drop');
    }


    //base url function of house sigils page
    async goto_HouseSigilsUrl(){
        await this.page.goto('https://funui.dev/challenges/hovers');
    }

    //-------------------------------------Url Sections End-------------------------------------


    //function of central park staff login
    async valid_centralParkStaffLogin() {
        await this.staffUsername.pressSequentially('gunther', { delay: 100 });
        await this.staffPassword.pressSequentially('CentralPerk123!', { delay: 100 });
    }


    //function to handle alert of Dundies award
    async dialogHandle() {
        await this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('🏆 You won a Dundie: "Best Automated Clicker"!');
            await dialog.accept();
        })
    }


    //function to handle accept the dundies award
    async acceptDundiesAward() {
        await this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('Do you accept the Dundie for "Best Automated Clicker"?');
            await dialog.accept();
        })
    }


    //function to handle prompt alert of dundies award
    async promptDundiesAward() {
        await this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('Your acceptance speech, please:');
            await dialog.accept('Thank you for the Dundie! I will continue to automate with excellence.');
        })
    }


    //function to handle prompt alert of dundies award with empty message
    async promptDundiesAwardEmpty() {
        await this.page.once('dialog', async (dialog) => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('Your acceptance speech, please:');
            await dialog.accept('');
        })
    }
}