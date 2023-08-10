// Constants
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    METRIC_CHART_TYPE: '.btn-full.section-container-label',
    OPTIONS_DROPDOWN: '.btn-full.section-container-label',
    DECIMAL_PRECISION_DROPDOWN: '.dropdown-line.dropdown',
    METRIC_CHART_COLOR: '.dropdown-icon.dropdown-toggle span[class^=background-color]',
};

const CHART_TYPE = {
    NUMBER: 'Number',
    HEAT_MAP: 'Heat map',
    BAR: 'Bar'
};

class Metrics {
    constructor() {

    }

    getMetricsSection() {
        return cy.get(globalElements.SECTION_LABEL).contains('Metrics').parent(globalElements.SECTION);
    }

    getColumnsSection() {
        return this.getMetricsSection().find(globalElements.SECTION_CONTAINER);
    }

    /**
     * Method to get column option dropdown
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @example
     * metrics.getColumnOption(0)
     */
    getColumnOption(index = 0) {
        return this.getColumnsSection().eq(index).find(ELEMENTS.OPTIONS_DROPDOWN);
    }

    /**
     * Method to get column option dropdown
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @example
     * metrics.getMetricChartType(0)
     */
    getMetricChartType(index = 0) {
        return this.getColumnsSection().eq(index).find(ELEMENTS.METRIC_CHART_TYPE);
    }

    getMetricChartColor(index = 0) {
        return this.getColumnsSection().eq(index).find(ELEMENTS.METRIC_CHART_COLOR);
    }

    /**
     * Method to get column compact number and Decimal Section
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @example
     * metrics.getColumnCompactDecimalSection(0)
     */
    getColumnCompactDecimalSection(index = 0) {
        return this.getColumnsSection().eq(index).nextAll(globalElements.SECTION).eq(1);
    }

    /**
     * Method to get column compact number
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @example
     * metrics.getCompactNumber(0)
     */
    getCompactNumber(index = 0) {
        return this.getColumnCompactDecimalSection(index).find(globalElements.CHECKBOX_MULTI).contains('Compact numbers');
    }

    getCompactNumberCheckbox(index = 0) {
        return this.getCompactNumber(index).find(globalElements.CHECKBOX);
    }

    /**
     * Method to get column decimal precision
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @example
     * metrics.getDecimalPrecision(0)
     */
    getDecimalPrecision(index = 0) {
        return this.getColumnCompactDecimalSection(index).find(ELEMENTS.DECIMAL_PRECISION_DROPDOWN);
    }

    /**
     * Method to check Metric Style's Compact Number section has check box to compact decimal or not
     *
     * @param {number} index - A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
     * @return {Cypress.Chainable<boolean>}
     */
    hasCompactNumberCheckbox(index = 0) {
        return this.getColumnCompactDecimalSection(index).children('div').invoke('attr', 'class').then(className => (className.indexOf(globalElements.CHECKBOX_MULTI_CLASSNAME) > -1));
    }

    checkMetricChartColor(color = '#1700FF', index = 0) {
        this.getMetricChartColor(index)
            .scrollIntoView()
            .should('be.visible')
            .should('have.css', 'background-color', color);
    }

    checkMetricChartType(type = CHART_TYPE.NUMBER, index = 0) {
        return this.getMetricChartType(index).should('contain', type);
    }

}

export default Metrics;
