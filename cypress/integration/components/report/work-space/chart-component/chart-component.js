import {globalElements} from 'Cypress/constant';
import {checkIfElExists} from 'Cypress/utils';

const ELEMENTS = {
    ANTS_COMPONENT: '#ants-workspace .ants-component',
    ANTS_COMPONENT_CLASSNAME: 'ants-component',
    MENU_RIGHT_MOUSE: '.menu-right-mouse',
    DELETE_MENU_ITEM: '.menu-item[title=Delete]',
    CHART_HEADER: 'div.ants-header',
    OPTIONAL_METRIC_ITEM: 'ul[class*=dropdown-list-wrapper] li',
    OPTIONAL_METRIC_CHECKBOX: '[class*=ants-input-list]',
    ICON_DRILLDOWN_UP: 'i.icon-ants-arrow-up',
    ICON_DRILLDOWN_DOWN: 'i.icon-ants-arrow-down',
    ICON_OPTIONAL_METRIC: 'i[id*=chart-header-optional-metric]',
    ICON_UNDO: 'i.icon-ants-undo'

};

class ChartComponent {
    constructor(componentId) {
        this.componentId = componentId;
    }

    hasChildComponent() {
        let className = [];

        return cy.get(globalElements.WORK_SPACE)
            .children('div')
            .each($el => cy.wrap($el)
                .invoke('attr', 'class')
                .then(name => {
                    if (name.indexOf(globalElements.ANTS_COMPONENT_CLASSNAME) > -1) {
                        className.push(name);
                    }
                })
            )
            .then(() => className.length);
    }

    getAllComponent() {
        return cy.get(ELEMENTS.ANTS_COMPONENT);
    }

    getAllComponentId(callback) {
        cy.checkIfEleExists(ELEMENTS.ANTS_COMPONENT, isExits => {
            if (isExits) {
                this.getAllComponent().then(arrayEl => {
                    const componentIds = [];

                    arrayEl.map(index => {
                        componentIds.push(arrayEl[index].getAttribute('data-component'));
                    });

                    callback(componentIds);
                });

                return;
            }

            callback([]);
        });

    }

    getComponent(componentId) {
        return cy.get(globalElements.WORK_SPACE).find(`[data-component=${componentId || this.componentId}]`);
    }

    getChartHeader() {
        return this.getComponent().find(ELEMENTS.CHART_HEADER);
    }

    // Drill down
    getIconDrillDownUp() {
        return this.getChartHeader().find(ELEMENTS.ICON_DRILLDOWN_UP).parent();
    }

    getIconDrillDownDown() {
        return this.getChartHeader().find(ELEMENTS.ICON_DRILLDOWN_DOWN).parent();
    }

    checkDrillDownUp(isDisable = true) {
        this.getIconDrillDownUp().invoke('attr', 'class').should(isDisable ? 'contain' : 'not.contain', 'btn-disable');
    }

    checkDrillDownDown(isDisable = true) {
        this.getIconDrillDownDown().invoke('attr', 'class').should(isDisable ? 'contain' : 'not.contain', 'btn-disable');
    }

    // Optional Metric
    getIconOptionalMetric() {
        this.getComponent().trigger('mouseover');

        return this.getChartHeader().find(ELEMENTS.ICON_OPTIONAL_METRIC);
    }

    getOptionalMetricItem(identity = 0) {
        if (typeof identity === 'number') {
            return cy.get(ELEMENTS.OPTIONAL_METRIC_ITEM).eq(identity);
        }

        return cy.get(ELEMENTS.OPTIONAL_METRIC_ITEM).contains(identity).parent();
    }

    getOptionalMetricCheckbox(identity = 0) {
        return this.getOptionalMetricItem(identity).find(ELEMENTS.OPTIONAL_METRIC_CHECKBOX);
    }

    getOptionalMetricRadio(identity = 0) {
        return this.getOptionalMetricItem(identity).find(globalElements.RADIO);
    }

    checkIconOptionalMetric(isDisable = true) {
        this.getIconOptionalMetric().should('be.visible').should('have.css', 'opacity', isDisable ? '0.5' : '1');
    }

    // Undo
    getIconUndo() {
        return this.getChartHeader().find(ELEMENTS.ICON_UNDO);
    }

    getComponentWithAttribute(attributeName, attributeValue) {
        return cy.get(`div[${attributeName}="${attributeValue}"]`);
    }
}

export default ChartComponent;