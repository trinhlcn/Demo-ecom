
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    CHECKING_SECTION_CONTAINER: '>.section-container',
    BACKGROUND_COLOR: '.dropdown-icon.dropdown-toggle div[class^="color-picker"] >span',
    CHECKBOX_MULTI: '.checkbox-multi >.icon-check'
};

const POSITIONS = {
    BACKGROUND_COLOR: 0,
    BORDER_COLOR: 1,
    BORDER_SHADOW: 2
};

const POSITIONS_BORDER = {
    BORDER_COLOR: 0,
    BORDER_WEIGHT: 1,
    BORDER_STYLE: 2
};

class BackgroundBorder {
    constructor() {

    }

    getSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Background and Border$/).parent();
    }

    getSectionRows() {
        return this.getSection().find(ELEMENTS.CHECKING_SECTION_CONTAINER);
    }

    getBackgroundColor() {
        return this.getSectionRows().eq(POSITIONS.BACKGROUND_COLOR).find(ELEMENTS.BACKGROUND_COLOR);
    }

    getBorderColor() {
        return this.getSectionRows().eq(POSITIONS.BORDER_COLOR).find('>.section').eq(POSITIONS_BORDER.BORDER_COLOR).find(ELEMENTS.BACKGROUND_COLOR);
    }

    getBorderWeightToggle() {
        return this.getSectionRows().eq(POSITIONS.BORDER_COLOR).find('>.section').eq(POSITIONS_BORDER.BORDER_WEIGHT).find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getBorderStyleToggle() {
        return this.getSectionRows().eq(POSITIONS.BORDER_COLOR).find('>.section').eq(POSITIONS_BORDER.BORDER_STYLE).find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getBorderShadowCheckbox() {
        return this.getSectionRows().eq(POSITIONS.BORDER_SHADOW).find(ELEMENTS.CHECKBOX_MULTI);
    }

    getCompactViewCheckbox() {
        return cy.get(globalElements.SECTION).contains(/^Compact view$/).parent().find('.icon-check');
    }
}

export default BackgroundBorder;