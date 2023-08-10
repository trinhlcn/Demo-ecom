
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    CHECKING_SECTION: '>.section',
    COLOR_BTN: '.dropdown-icon div[class^="color-picker"] >span'
};

const POSITIONS = {
    HEADER_BG_COLOR: 0,
    CELL_BORDER_COLOR: 1,
    ODD_ROW_COLOR: 2,
    EVEN_ROW_COLOR: 3,
    HIGHLIGHT_COLOR: 4
};

class TableColor {
    constructor() {

    }

    getColorSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Table Color$/).next(globalElements.SECTION_CONTAINER);
    }

    getHeaderBackgroundColor() {
        return this.getColorSection().find(ELEMENTS.CHECKING_SECTION).eq(POSITIONS.HEADER_BG_COLOR).find(ELEMENTS.COLOR_BTN);
    }

    getCellBorderColor() {
        return this.getColorSection().find(ELEMENTS.CHECKING_SECTION).eq(POSITIONS.CELL_BORDER_COLOR).find(ELEMENTS.COLOR_BTN);
    }

    getOddRowColor() {
        return this.getColorSection().find(ELEMENTS.CHECKING_SECTION).eq(POSITIONS.ODD_ROW_COLOR).find(ELEMENTS.COLOR_BTN);
    }

    getEvenColor() {
        return this.getColorSection().find(ELEMENTS.CHECKING_SECTION).eq(POSITIONS.EVEN_ROW_COLOR).find(ELEMENTS.COLOR_BTN);
    }

    getHighlightColor() {
        return this.getColorSection().find(ELEMENTS.CHECKING_SECTION).eq(POSITIONS.HIGHLIGHT_COLOR).find(ELEMENTS.COLOR_BTN);
    }
}

export default TableColor;