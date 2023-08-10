import {globalElements} from 'Cypress/constant';

class TableFooter {
    constructor() {
  
    }

    getTableFooterSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Table Footer').next(globalElements.SECTION_CONTAINER);
    }

    getShowPagination() {
        return this.getTableFooterSection().get(globalElements.CHECKBOX_MULTI).contains('Show pagination').parent();
    }

    getShowPaginationCheckbox() {
        return this.getShowPagination().find(globalElements.ICON_CHECK);
    }
}

export default TableFooter;