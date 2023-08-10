import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
};

class Labels {
    constructor() {

    }

    getLabelSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp('^Label$', 'g')).parent();
    }

    getSliceLabelDropdown() {
        return this.getLabelSection().contains('Slice label').parent().find(globalElements.DROPDOWN_TOGGLE);
    }

    getDecimalDropdown() {
        return this.getLabelSection().contains('Decimal precision').parent().find(globalElements.DROPDOWN_TOGGLE);
    }
}

export default Labels;