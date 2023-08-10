import {commonDataConfig} from 'Cypress/integration/pages/report/report-design/workspace/constant';

const ELEMENTS = {
    SORT_SECTION: '.side-panel .section',
    SORT_ITEM: '.dimension-item',
    AZ_ITEM: 'div.dropdown-menu button.dropdown-item',
    AZ_BTN: '.btn-full.section-container-label.dropdown-toggle',
    POPOVER_UPDATE_SORT: '#popover-dimension-metric'
};

const SORT_TYPE = {
    SORT: 'Sort',
    BREAKDOWN_DIMENSION_SORT: 'Breakdown dimension sort'
};

class Metric {
    constructor(sortType = SORT_TYPE.SORT) {
        this.sortType = sortType;
    }

    getSortSection() {
        return cy.get(ELEMENTS.SORT_SECTION).contains(new RegExp(`^${this.sortType}$`, 'g')).parent();
    }

    getSortItems() {
        return this.getSortSection().find(ELEMENTS.SORT_ITEM);
    }

    getAzItem(az = commonDataConfig.SORT_DIRECTION.DESCENDING.label) {
        return this.getSortSection().find(ELEMENTS.AZ_ITEM).contains(az);
    }

    getAzBtn() {
        return this.getSortSection().find(ELEMENTS.AZ_BTN);
    }

    changeAzSort(az = commonDataConfig.SORT_DIRECTION.DESCENDING.label) {
        this.getAzBtn().click();

        this.getAzItem(az).click();
    }

    changeSortItem(sort = '') {
        this.getSortSection().find(ELEMENTS.SORT_ITEM).click();
        cy.get(ELEMENTS.POPOVER_UPDATE_SORT).contains(sort).click();
    }
}

export default Metric;
