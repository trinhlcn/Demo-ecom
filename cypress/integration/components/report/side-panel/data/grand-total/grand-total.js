// Constants
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SUMMARY_ROW_SECTION: '.side-panel .section',
    CHECKBOX_MULTI: '.checkbox-multi',
    CHECKBOX: 'input[type=checkbox]'
};

class GrandTotal {
    constructor() {

    }

    getGrandTotalSection() {
        return cy.get(ELEMENTS.SUMMARY_ROW_SECTION).contains(/^Total$/).parent();
    }

    getCheckboxType(type = 'Rows') {
        return this.getGrandTotalSection().find(globalElements.SECTION_LABEL).contains(type).parent().find(ELEMENTS.CHECKBOX_MULTI).find(ELEMENTS.CHECKBOX);
    }
}

export default GrandTotal;