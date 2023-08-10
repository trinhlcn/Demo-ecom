import {globalElements} from 'Cypress/constant';
import {commonDataConfig} from 'Pages/report/report-design/workspace/constant';
import {Schema} from 'Components/report/side-panel/data';

// Components

const ELEMENTS = {
    SIDE_PANEL: '.side-panel',
    METRIC_SECTION: '.side-panel .section.section-sortable',
    METRIC_ITEM: '.metric-item',
    FORM_GROUP: '.form-group',
    FORM_CONTROL: '.form-control',
    BOX_TYPE: '[class*=box-type]',
    UPDATE_METRIC_POPOVER: '.update-dimension-metric .popover-body',
    RADIO_MULTI: '.radio-multi',
    RADIO_ICON: '.icon-radio',
    BUTTON_DROPDOWN_TOGGLE: '.btn-full.dropdown-toggle',
    FIELDS_POPOVER: '.popover-reactstrap.search-fields.box-shadow .popover-inner',
    FIELD: '.popover-reactstrap.search-fields.box-shadow .popover-inner .dragdrop-handle',
    AVAILABLE_FIELD: '.side-panel .block-right .list-dragdrop-handle [id*=target-field-schema]'
};

class Metric {
    constructor() {
        this.schema = new Schema();
    }

    getAvailableFields() {
        return cy.get(ELEMENTS.AVAILABLE_FIELD);
    }

    getMetricSection() {
        return cy.get(ELEMENTS.METRIC_SECTION).contains(/^Metric$/).parent();
    }

    getUpdateMetricPopover() {
        return cy.get(ELEMENTS.UPDATE_METRIC_POPOVER);
    }

    getMetricItems() {
        return this.getMetricSection().find(ELEMENTS.METRIC_ITEM);
    }

    getMetricItem(identiy = 0) {
        if (typeof identiy === 'number') {
            return this.getMetricItems().eq(0);
        }

        return this.getMetricItems().contains(identiy);
    }

    getMetricPopoverField(identity = 0) {
        if (typeof identity === 'number') {
            return this.getUpdateMetricPopover().find(ELEMENTS.FIELD).eq(identity);
        }

        return this.getUpdateMetricPopover().find(ELEMENTS.FIELD).contains(identity);
    }

    getMetricBoxType(identity = 0) {
        if (typeof identity === 'number') {
            return this.getMetricItems().eq(identity).find(ELEMENTS.BOX_TYPE);
        }

        return this.getMetricItems().contains(identity).parent().parent().prev(ELEMENTS.BOX_TYPE);
    }

    getMetricPopoverFormGroup(label = '') {
        return cy.get(ELEMENTS.FORM_GROUP).contains(label).parent();
    }

    getAggregationItems() {
        return this.getUpdateMetricPopover().find(ELEMENTS.RADIO_MULTI);
    }

    getDataTypeItem(identity = 0, dataType = commonDataConfig.DATA_TYPE.NUMBER.label, currency) {
        this.getMetricBoxType(identity).click(); // Show Metric update popover
        this.getMetricPopoverFormGroup('Type').find(ELEMENTS.BUTTON_DROPDOWN_TOGGLE).click({force: true}); // Show change type dropdown

        switch (dataType) {
            case commonDataConfig.DATA_TYPE.NUMBER.label:
            case commonDataConfig.DATA_TYPE.PERCENT.label:
                return cy.get('.dropdown-menu [class*=sub]').contains(dataType);

            case commonDataConfig.DATA_TYPE.CURRENCY.label:
                return cy.get('.dropdown-menu [class*=sub]').contains(dataType).parent().find('.dropdown-menu').contains(currency);
        }
    }

    getAddMetricBtn() {
        return this.getMetricSection().contains('Add metric');
    }

    changeDataType(identity = 0, dataType = commonDataConfig.DATA_TYPE.NUMBER.label, currency = '') {
        this.getDataTypeItem(identity, dataType, currency).click({force: true});

        cy.get(ELEMENTS.SIDE_PANEL).click({force: true});
    }

    /**
     * Method check type of aggregation
     * @param {string} aggregation - type of aggregation to check
     */
    checkAggregation(identiy = 0, aggregation = 'Sum') {
        this.getMetricBoxType(identiy).click();

        this.getAggregationItems().contains(aggregation).parent().find(ELEMENTS.RADIO_ICON).should('have.class', 'active');
        cy.get(ELEMENTS.SIDE_PANEL).click({force: true});
    }

    checkDataType(identity = 0, dataType = commonDataConfig.DATA_TYPE.NUMBER.label, currency = '') {
        this.getDataTypeItem(identity, dataType, currency).should('have.attr', 'class').and('contain', 'active');
        cy.get(ELEMENTS.SIDE_PANEL).click({force: true});
    }

    addMetric(metricName = '', isDrag = false) {
        if (isDrag) {
            this.schema.getField(metricName).trigger('dragstart');
            this.getAddMetricBtn().trigger('drop');
            return;
        }

        this.getAddMetricBtn().scrollIntoView().click();

        cy.get(ELEMENTS.FIELDS_POPOVER).should('be.visible');

        if (metricName !== '') {
            cy.get(ELEMENTS.FIELD).contains(metricName).click();
        } else {
            cy.get(ELEMENTS.FIELD).eq(0).click();
        }

    }

    /**
     *
     * @param {string} currentMetric - Name of current dimension you want to change
     * @param {string} dimension - Name of dimension you want to change
     *
     */
    changeMetric(currentMetric = '', metric = '', isDrag = false) {
        if (isDrag) {
            this.getAvailableFields().contains(metric).parent().trigger('dragstart');
            this.getMetricItem(currentMetric)
                .parent()
                .trigger('dragenter', {force: true})
                .trigger('dragover', {force: true})
                .wait(1000)
                .trigger('drop', {force: true})
                .wait(50);
            this.getMetricItem(metric)
                .parent()
                .trigger('dragend', {force: true});
            return;
        }

        this.getMetricItem(currentMetric).click();

        this.getMetricPopoverField(metric).click();
    }

    removeMetric(index = 0) {
        this.getMetricItems().eq(index).find(globalElements.ICON_CLOSE).click({force: true});
    }

    changeAggregation(identiy = 0, aggregation = commonDataConfig.AGGREGATION_TYPE.SUM.label) {
        this.getMetricBoxType(identiy).click();

        this.getAggregationItems().contains(aggregation).children().eq(1).click();

        cy.get(ELEMENTS.SIDE_PANEL).click({force: true});
    }

    changeAliasName(identity = 0, aliasName = '') {
        this.getMetricBoxType(identity).click();
        this.getMetricPopoverFormGroup('Name').find(ELEMENTS.FORM_CONTROL).clear().type(aliasName);

        cy.get(ELEMENTS.SIDE_PANEL).click({force: true});
    }
}

export default Metric;
