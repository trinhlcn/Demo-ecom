
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SECTION_CONTAINER_LABEL: '.section-container-label',
    FONT_COLOR_BTN: '.dropdown-icon div[class*="color-picker"] >span'
};

class TableLabels {
    constructor() {

    }

    getHeaderSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Table Labels$/).next(globalElements.SECTION_CONTAINER);
    }

    getFontColorButton() {
        return this.getHeaderSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains(/^Font color$/).parent().find(ELEMENTS.FONT_COLOR_BTN);
    }

    getFontSizeButton() {
        return this.getHeaderSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains(/^Font size$/).parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getFontButton() {
        return this.getHeaderSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains(/^Font$/).parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }
}

export default TableLabels;