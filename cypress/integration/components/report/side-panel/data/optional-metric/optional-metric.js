// Components
import {Schema} from 'Components/report/side-panel/data';
import {UpdateDimensionMetricPopover} from 'Cypress/integration/components/common';

// Constants
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    OPTIONAL_METRIC_SECTION: '.side-panel [class*=section-optional-metric]',
    OPTIONAL_METRIC_SWITCH: 'span.custom-switch',
    POPOVER_FIELDS: '.popover-reactstrap.search-fields.box-shadow .popover-inner',
    FIELD: '.popover-reactstrap.search-fields.box-shadow .popover-inner .dragdrop-handle',
    OPTIONAL_METRIC_INPUT: 'input[type="checkbox"]',
    METRIC_ITEM: '.metric-item'
};

class OptionalMetric {
    constructor() {
        this.updateDimensionMetricPopover = new UpdateDimensionMetricPopover();
        this.schema = new Schema();
    }

    getOptionalMetricSection() {
        return cy.get(ELEMENTS.OPTIONAL_METRIC_SECTION);
    }

    getOptionalMetricItems() {
        return this.getOptionalMetricSection().find(ELEMENTS.METRIC_ITEM);
    }

    getOptionalMetricBoxType(identity = 0) {
        if (typeof identity === 'number') {
            return this.getOptionalMetricItems().eq(identity).find(globalElements.BOX_TYPE);
        }
    
        return this.getOptionalMetricItems().contains(identity).parent().parent().prev(globalElements.BOX_TYPE);
    }

    getOptionalMetricInput() {
        return this.getOptionalMetricSection().find(ELEMENTS.OPTIONAL_METRIC_INPUT);
    }

    getOptionalMetricSwitch() {
        return this.getOptionalMetricSection().find(ELEMENTS.OPTIONAL_METRIC_SWITCH);
    }

    getOptionalMetricPopoverField(identiy = 0) {
        if (typeof identiy === 'number') {
            return cy.get(ELEMENTS.FIELD).eq(0).click();
        }

        return cy.get(ELEMENTS.FIELD).contains(identiy).click();
    }

    getAddMetricBtn() {
        return this.getOptionalMetricSection().contains('Add metric');
    }

    addOptionalMetric(metricName = '', isDrag = false) {
        if (isDrag) {
            this.schema.getField(metricName).trigger('dragstart');
            this.getAddMetricBtn().trigger('drop');
            return;
        }

        this.getAddMetricBtn().click({force: true});

        cy.get(ELEMENTS.POPOVER_FIELDS).should('be.visible');

        this.getOptionalMetricPopoverField(metricName);
      
    }

    changeAliasOptionalMetric(aliasName = '', identity = 0) {
        this.getOptionalMetricBoxType(identity).click();

        this.updateDimensionMetricPopover.getAliasInput().clear().type(aliasName);

        cy.get(globalElements.SIDE_PANEL).click({force: true});
    }
}

export default OptionalMetric;