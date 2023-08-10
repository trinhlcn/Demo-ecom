
import {globalElements} from 'Cypress/constant';

class TableHeader {
    constructor() {
  
    }

    getTableHeaderSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Table Header').next(globalElements.SECTION_CONTAINER);
    }

    getShowHeader() {
        return this.getTableHeaderSection().get(globalElements.CHECKBOX_MULTI).contains('Show header').parent();
    }

    getShowHeaderCheckbox() {
        return this.getShowHeader().find(globalElements.ICON_CHECK);
    }
}

export default TableHeader;