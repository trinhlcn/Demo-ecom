
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SECTION_CONTAINER_LABEL: '.section-container-label',
    COLOR: '.dropdown-icon.dropdown-toggle span[class^=background-color]',
};

class Padding {
    constructor() {
  
    }

    getPaddingSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Padding').parent();
    }

    getValueLineHeight() {
        return this.getPaddingSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains('Line Height').parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getValueLeft() {
        return this.getPaddingSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains('Left').parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getValueRight() {
        return this.getPaddingSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains('Right').parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getValueTop() {
        return this.getPaddingSection().find(ELEMENTS.SECTION_CONTAINER_LABEL).contains('Top').parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }
}

export default Padding;