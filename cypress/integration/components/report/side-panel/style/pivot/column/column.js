
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SECTION_CONTAINER: '>.section-container',
    SECTION_CONTAINER_SUB: '>div',
    COMPACT_CHECKBOX: '.checkbox-multi >span.icon-check',
    TYPE_TOGGLE: '.dropdown-icon .dropdown-line.dropdown >button.dropdown-toggle.btn-default',
    COLOR: 'div[class*="color-picker-"] >span[class^="color-"]',
    SHOW_NUMBER_CHECKBOX: '.checkbox-multi >span.icon-check'
};

const POSITIONS = {
    TYPE: 1,
    COMPACT_NUMBER: 2,
    DECIMAL_PRECISION: 4
};

class Column {
    constructor() {

    }

    getColumnSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Column$/).parent();
    }

    getAllColumnSections() {
        return this.getColumnSection().find(ELEMENTS.SECTION_CONTAINER);
    }

    getTypeToggle(columnSection = undefined) {
        return (columnSection ? cy.wrap(columnSection) : this.getAllColumnSections().eq(0)).find(ELEMENTS.SECTION_CONTAINER_SUB).eq(POSITIONS.TYPE).find(ELEMENTS.TYPE_TOGGLE);
    }

    getColor(columnSection = undefined) {
        return (columnSection ? cy.wrap(columnSection) : this.getAllColumnSections().eq(0)).find(ELEMENTS.SECTION_CONTAINER_SUB).eq(POSITIONS.TYPE).find(ELEMENTS.COLOR);
    }

    getShowNumberCheckbox(columnSection = undefined) {
        return (columnSection ? cy.wrap(columnSection) : this.getAllColumnSections().eq(0)).find(ELEMENTS.SECTION_CONTAINER_SUB).eq(POSITIONS.TYPE).find(ELEMENTS.SHOW_NUMBER_CHECKBOX);
    }

    getCompactNumberCheckbox(columnSection = undefined) {
        return (columnSection ? cy.wrap(columnSection) : this.getAllColumnSections().eq(0)).find(ELEMENTS.SECTION_CONTAINER_SUB).eq(POSITIONS.COMPACT_NUMBER).find(ELEMENTS.COMPACT_CHECKBOX);
    }

    getDecimalPrecisionToggle(columnSection = undefined) {
        return (columnSection ? cy.wrap(columnSection) : this.getAllColumnSections().eq(0)).find(ELEMENTS.SECTION_CONTAINER_SUB).eq(POSITIONS.DECIMAL_PRECISION).find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }
}

export default Column;