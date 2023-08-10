
import {globalElements} from 'Cypress/constant';

class PrimaryMetric {
    constructor() {
  
    }

    getCompactNumbersSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Primary metric').next(globalElements.SECTION_CONTAINER);
    }

    getDecimalPrecisionSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Decimal Precision').parent().find(globalElements.SECTION_CONTAINER);
    }

    getHideMetricSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Labels').parent().find(globalElements.CHECKBOX_MULTI);
    }

    getShowCompactNumbers() {
        return this.getCompactNumbersSection().find(globalElements.CHECKBOX_MULTI).contains('Compact numbers').parent().find('.icon-check');
    }

    getValueDecimalPrecision() {
        return this.getDecimalPrecisionSection().find(globalElements.BUTTON_DROPDOWN_TOGGLE);
    }

    getShowHideMetric() {
        return this.getHideMetricSection().contains('Hide metric name').parent().find('.icon-check');
    }
}

export default PrimaryMetric;