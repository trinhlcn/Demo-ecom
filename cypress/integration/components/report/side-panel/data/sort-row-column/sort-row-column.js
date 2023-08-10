import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SORT_SECTION: '.side-panel .section',
    FIELD_OPTION: '.dropdown .dropdown-menu button',
    CHECKING_ROW_DIV: '>div:not([class="section-label"])',
    NUMBER_OF_INPUT: 'input[type="number"]'
};

const sortType = {
    ROW: 'row',
    COLUMN: 'column'
};

const ROW_POSITION = {
    FIELD: 0,
    AZ: 1,
    NUMBER_OF: 2
};

class SortRowColumn {
    constructor() {

    }

    getSortSections(sortType = '', sortNum = '') {
        cy.log('GET REGEX', `Sort ${sortType || '(row|column)'} #${sortNum || '\\d+'}`);
        return cy.get(ELEMENTS.SORT_SECTION).contains(new RegExp(`Sort ${sortType || '(row|column)'} #${sortNum || '\\d+'}`)).parent();
    }

    getSortSection(sortTypeName = '') {
        return cy.get(ELEMENTS.SORT_SECTION).contains(new RegExp(`^${sortTypeName}$`)).parent();
    }

    getSortFieldToggle(sortSection = undefined) {
        return (sortSection || this.getSortSection().eq(0)).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.FIELD).find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getSortFieldOption(optionName = '', sortSection = undefined) {
        return optionName ? (sortSection || this.getSortSection()).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.FIELD).find(ELEMENTS.FIELD_OPTION).contains(optionName) :
            (sortSection || this.getSortSection().eq(0)).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.FIELD).find(ELEMENTS.FIELD_OPTION).eq(0);
    }

    getSortAZToggle(sortSection = undefined) {
        return (sortSection || this.getSortSection().eq(0)).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.AZ).find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getSortAZOption(optionName = '', sortSection = undefined) {
        return optionName ? (sortSection || this.getSortSection()).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.AZ).find(ELEMENTS.FIELD_OPTION).contains(optionName) :
            (sortSection || this.getSortSection().eq(0)).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.AZ).find(ELEMENTS.FIELD_OPTION).eq(0);
    }

    getNumberOfInput(sortSection = undefined) {
        return (sortSection || this.getSortSection().eq(0)).find(ELEMENTS.CHECKING_ROW_DIV).eq(ROW_POSITION.NUMBER_OF).find(ELEMENTS.NUMBER_OF_INPUT);
    }

}

export default SortRowColumn;