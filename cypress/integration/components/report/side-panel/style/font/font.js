// Constants
import {Schema} from 'Components/report/side-panel/data';

import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    FAMILY: '.icon-font-family',
    COLOR: '.dropdown-icon.dropdown-toggle span[class^=background-color]',
};

class Font {
    constructor(stringLabel) {
        this.label = stringLabel;
    }

    getFontSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp(`^${this.label}$`, 'g')).parent();
    }

    getFontColor(index = 0) {
        return this.getFontSection().eq(index).find(ELEMENTS.COLOR);
    }

    checkFontColor(color = '#1700FF', index = 0) {
        this.getFontColor(index)
            .scrollIntoView()
            .should('be.visible')
            .should('have.css', 'background-color', color);
    }

    getFontSize(index = 0) {
        return this.getFontSection().eq(index).find(globalElements.BUTTON_DROPDOWN_TOGGLE).eq(0);
    }

    checkFontSize(size = '28 px', index = 0) {
        this.getFontSize(index)
            .should('contain', size);
    }

    getFontFamily(index = 0) {
        return this.getFontSection().eq(index).find(ELEMENTS.FAMILY).parent().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    checkFontFamily(font = 'Roboto', index = 0) {
        this.getFontFamily(index)
            .should('contain', font);
    }
}

export default Font;