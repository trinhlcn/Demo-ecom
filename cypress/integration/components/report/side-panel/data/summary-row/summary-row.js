const ELEMENTS = {
    SUMMARY_ROW_SECTION: '.side-panel .section',
    CHECKBOX_MULTI: '.checkbox-multi',
    CHECKBOX: 'input[type=checkbox]'
};

class SummaryRow {
    constructor() {

    }

    getSummaryRowSection() {
        return cy.get(ELEMENTS.SUMMARY_ROW_SECTION).contains(/^Summary row$/).parent();
    }

    getShowSummaryRow() {
        return this.getSummaryRowSection().find(ELEMENTS.CHECKBOX_MULTI);
    }

    getShowSummaryRowCheckBox() {
        return this.getShowSummaryRow().find(ELEMENTS.CHECKBOX);
    }
}

export default SummaryRow;