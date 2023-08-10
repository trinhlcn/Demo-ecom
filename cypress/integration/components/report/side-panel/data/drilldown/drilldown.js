import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    DRILL_DOWN_SECTION: '.side-panel [class*=section-drill-down]',
    DRILL_DOWN_SWITCH: 'span.custom-switch',
    DRILL_DOWN_DROPDOWN: 'div.dropdown-line button.dropdown-toggle',
    DRILL_DOWN_INPUT: 'input[type="checkbox"]'
};

class DrillDown {
    constructor() {

    }

    getDrillDownSection() {
        return cy.get(ELEMENTS.DRILL_DOWN_SECTION);
    }

    getDrillDownInput() {
        return this.getDrillDownSection().find(ELEMENTS.DRILL_DOWN_INPUT);
    }

    getDrillDownSwitch() {
        return cy.get(ELEMENTS.DRILL_DOWN_SECTION).find(globalElements.CHECKBOX);
    }

    getDrillDownDropdown(index) {
        return cy.get(ELEMENTS.DRILL_DOWN_SECTION).find(ELEMENTS.DRILL_DOWN_DROPDOWN).eq(index);
    }

    switch() {
        this.getDrillDownSection().find(ELEMENTS.DRILL_DOWN_SWITCH).click();
    }
}

export default DrillDown;