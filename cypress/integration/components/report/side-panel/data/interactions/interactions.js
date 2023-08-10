const ELEMENTS = {
    INTERACTIONS_SECTION: '.side-panel .section',
    CHECKBOX_MULTI: '.checkbox-multi >label',
    CHECKBOX: 'input[type=checkbox]'
};

class Interactions {
    constructor() {

    }

    getInteractionsSection() {
        return cy.get(ELEMENTS.INTERACTIONS_SECTION).contains(/^Interactions$/).parent();
    }

    getApplyFilter() {
        return this.getInteractionsSection().find(ELEMENTS.CHECKBOX_MULTI);
    }

    getApplyFilterCheckbox() {
        return this.getApplyFilter().find(ELEMENTS.CHECKBOX);
    }
}

export default Interactions;