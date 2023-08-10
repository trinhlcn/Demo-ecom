import moment from 'moment';

import {globalElements} from 'Cypress/constant';
import {ChartComponent} from '../../../';

const ELEMENTS = {
    LINES: 'div[class^="ants-line-chart"] .recharts-wrapper >svg.recharts-surface >g.recharts-layer.recharts-line >path',
    VERTICAL_CARTESIAN: '.recharts-cartesian-grid-vertical >line',
    RECHART_TOOLTIP_DATE: '.recharts-tooltip-wrapper div[class*="ants-tooltip-line-chart"] >p.date-name',
    CIRCLE_HOVER: 'circle[opacity="0.3"][r="8"]',
    CIRCLE_ACTIVE: 'circle[opacity="1"][r="5"]'
};

class LineChartComponent extends ChartComponent {
    getLines() {
        return this.getComponent().find(ELEMENTS.LINES);
    }

    getVerticalCartesians() {
        return this.getComponent().find(ELEMENTS.VERTICAL_CARTESIAN);
    }

    clickCircleAtIndex(index = 0) {
        const lines = Cypress.$(globalElements.WORK_SPACE).find(`[data-component=${this.componentId}]`).find(ELEMENTS.VERTICAL_CARTESIAN);

        cy.wrap(lines.eq(index)).trigger('mouseover', {force: true});
        this.getComponent().find(ELEMENTS.CIRCLE_HOVER).trigger('mouseover', {force: true});
        this.getComponent().find(ELEMENTS.CIRCLE_HOVER).click({force: true});
    }

    clickCircleAtDate(date, format = 'DD/MM/YYYY') {
        const dateSelect = moment(date, format);
        const dateSelectFormat = dateSelect.format('MMM DD, YYYY');

        const lines = Cypress.$(globalElements.WORK_SPACE).find(`[data-component=${this.componentId}]`).find(ELEMENTS.VERTICAL_CARTESIAN);

        const me = this;
        let isDone = false;

        if (lines && lines.length) {
            lines.each(async function (i) {
                if (isDone) {
                    return false;
                }

                cy.wrap(this).trigger('mouseover', {force: true});
                cy.get(globalElements.WORK_SPACE).find(`[data-component=${me.componentId}]`).find(ELEMENTS.RECHART_TOOLTIP_DATE).then($el => {
                    if (!isDone && $el.text() === dateSelectFormat) {
                        isDone = true;
                        cy.wrap(this).trigger('mouseover', {force: true});
                        me.getComponent().find(ELEMENTS.CIRCLE_HOVER).trigger('mouseover', {force: true});
                        me.getComponent().find(ELEMENTS.CIRCLE_HOVER).click({force: true});
                    }

                });
            });
        }
    }

    getHoverCircle() {
        return this.getComponent().find(ELEMENTS.CIRCLE_HOVER);
    }

    getActiveCircle() {
        return this.getComponent().find(ELEMENTS.CIRCLE_ACTIVE);
    }
}

export default LineChartComponent;