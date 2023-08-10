import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    DATE_RANGE_SECTION: '.section.section-sortable',
    ADD_CHART_DROPDOWN: 'div.dropdown-menu.show',
    ANTS_WORKSPACE: '#ants-workspace',
    DIMENSION_ITEM: '.dimension-item'
};

class DateRangeDimension {
    constructor() {

    }

    getDateRangeDimensionSection() {
        return cy.get(ELEMENTS.DATE_RANGE_SECTION).contains('Date Range Dimension').parent();
    }

    /**
     * Get list of dimension field
     * @example
     * getDimensionItems() => []
     */
    getDimensionItems() {
        return this.getDateRangeDimensionSection().find(ELEMENTS.DIMENSION_ITEM);
    }

    /**
     *
     * @param {string | number} identity - Name of dimension or index of dimension
     */
    getDimensionItem(identity = 0) {
        if (typeof identity === 'number') {
            return this.getDimensionItems().eq(identity);
        }

        return this.getDimensionItems().contains(identity).parent().parent();
    }

    /**
     *
     * @param {string | number} identity - Name of dimension or index of dimension
     */
    removeDimension(identity = 0) {
        this.getDimensionItem(identity).trigger('mouseover').find(globalElements.ICON_CLOSE).click({force: true});
    }
}

export default DateRangeDimension;
