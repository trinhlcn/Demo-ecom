import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    SLICE_DROPDOWN: 'button.dropdown-toggle'
};

class PieChart {
    constructor(params) {
    
    }

    getPieChartSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp('^Pie chart$', 'g')).parent(globalElements.SECTION);
    }

    getSliceDropdown() {
        return this.getPieChartSection().find(ELEMENTS.SLICE_DROPDOWN);
    }
}

export default PieChart;