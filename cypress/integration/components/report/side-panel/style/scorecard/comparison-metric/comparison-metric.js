
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    COLOR: '.dropdown-icon.dropdown-toggle span[class^=background-color]',
};

class ComparisonMetric {
    constructor() {
  
    }
    getComparisonMetricSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Comparison metric').parent().find(ELEMENTS.COLOR);
    }

    getComparisonMetric(index = 0) {
        return this.getComparisonMetricSection().eq(index);
    }

    checkComparisonMetricColor(color = '#1700FF', index = 0) {
        this.getComparisonMetric(index)
            .scrollIntoView()
            .should('be.visible')
            .should('have.css', 'background-color', color);
    }
}

export default ComparisonMetric;