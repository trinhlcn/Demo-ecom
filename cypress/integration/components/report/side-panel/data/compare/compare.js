const ELEMENTS = {
    COMPARE_SECTION: '.side-panel .section',
    COMPARE_TOGGLE: '#side-panel-compare',
    COMPARE_OPTION: '.popover >.popover.show >.popover-inner >.list-menu-data-range >.list-date >a.dropdown-item',
    COMPARE_APPLY_BTN: '.popover >.popover.show >.popover-inner >.list-menu-data-range >.submit >.btn-green'
};

class Compare {
    constructor() {

    }

    getCompareSection() {
        return cy.get(ELEMENTS.COMPARE_SECTION).contains(/^Compare$/).parent();
    }

    getCompareToggle() {
        return this.getCompareSection().find(ELEMENTS.COMPARE_TOGGLE);
    }

    selectCompareOption(optionName = 'None') {
        this.getCompareToggle().click();

        cy.get(ELEMENTS.COMPARE_OPTION).contains(optionName).should('be.visible').click();
        cy.get(ELEMENTS.COMPARE_APPLY_BTN).contains('Apply').click();
    }
}

export default Compare;