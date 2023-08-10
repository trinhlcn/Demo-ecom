// Constants
const ELEMENTS = {
    SWITCH_VIEW_BTN: '[class*=toolbar-right] .icon-view-font',
    SWITCH_EDIT_BTN: '[class*=toolbar-right] .icon-edit-font'
};

const MODES = {
    VIEW: {label: 'View'},
    EDIT: {label: 'Edit'}
};

class SwitchModeReport {
    constructor() {

    }

    getSwitchViewBtn() {
        return cy.get(ELEMENTS.SWITCH_VIEW_BTN);
    }

    getSwitchEditBtn() {
        return cy.get(ELEMENTS.SWITCH_EDIT_BTN);
    }

    switchViewMode() {
        this.getSwitchViewBtn().click();
    }

    switchEditMode() {
        this.getSwitchEditBtn().click();
    }
}

export default SwitchModeReport;