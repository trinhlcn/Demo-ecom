// Components
import {UpdateDimensionMetricPopover} from 'Cypress/integration/components/common';

// Constants
import {globalElements} from 'Cypress/constant';
import {Schema} from 'Components/report/side-panel/data';
import {commonDataConfig} from 'Cypress/integration/pages/report/report-design/workspace/constant';

const ELEMENTS = {
    DIMENSION_SECTION: '.side-panel .section.section-sortable',
    DIMENSION_ITEM: '.list-dragdrop-handle .dimension-item',
    POPOVER_FIELDS: '.popover-reactstrap.search-fields.box-shadow .popover-inner',
    DIMENSION_FIELD: '.list-dragdrop-handle .dragdrop-handle'
};

const DIMENTION_TYPE = {
    DIMENSION: 'Dimension',
    TIME_DIMENSION: 'Time dimension'
};

class Dimension {
    constructor(dimentionType = DIMENTION_TYPE.DIMENSION) {
        this.updateDimensionMetricPopover = new UpdateDimensionMetricPopover();
        this.schema = new Schema();
        this.dimentionType = dimentionType;
    }

    getDimensionSection() {
        return cy.get(ELEMENTS.DIMENSION_SECTION).contains(new RegExp(`^${this.dimentionType}$`, 'g')).parent();
    }

    getAddDimensionSection() {
        return this.getDimensionSection().contains('Add dimension');
    }

    getDimensionItems() {
        return this.getDimensionSection().find(ELEMENTS.DIMENSION_ITEM);
    }

    getPopoverDimension() {
        return cy.get(ELEMENTS.POPOVER_FIELDS);
    }

    /**
     * 
     * @param {string | number} identity - Name of dimension or index of dimension
     */
    getPopoverDimensionField(identity = 0) {
        if (typeof identity === 'number') {
            return this.getPopoverDimension().find(ELEMENTS.DIMENSION_FIELD).eq(identity);
        }

        return this.getPopoverDimension().find(ELEMENTS.DIMENSION_FIELD).contains(identity);
    }

    /**
     * 
     * @param {string | number} identity - Name of dimension or index of dimension
     */
    getDimensionItem(identity = 0) {
        if (typeof identity === 'number') {
            return this.getDimensionItems().eq(identity);
        }

        return this.getDimensionItems().contains(identity).parent().parent().parent();
    }

    getDimensionBoxType(identiy = 0) {
        return this.getDimensionItem(identiy).find(globalElements.BOX_TYPE);
    }

    getAddDimensionBtn() {
        return this.getDimensionSection().contains('Add dimension');
    }

    addDimension(nameDimension = '', isDrag = true) {
        if (isDrag) {
            this.schema.getField(nameDimension).trigger('dragstart');
            this.getAddDimensionBtn()
                .trigger('dragenter', {force: true})
                .trigger('dragover', {force: true})
                .wait(1000)
                .trigger('drop', {force: true})
                .wait(50)
                .trigger('dragend', {force: true});

            return;
        }

        this.getDimensionSection().contains('Add dimension').click();

        cy.get(ELEMENTS.POPOVER_FIELDS).should('be.visible');

        this.getPopoverDimensionField(nameDimension).click();
    }

    removeDimension(identity = 0) {
        this.getDimensionItem(identity).trigger('mouseover').find(globalElements.ICON_CLOSE).click({force: true});
    }

    /**
     * 
     * @param {string} currentDimension - Name of current dimension you want to change
     * @param {string} dimension - Name of dimension you want to change
     * 
     */
    changeDimension(currentDimension = '', dimension = 0) {
        this.getDimensionItem(currentDimension).click();

        this.getPopoverDimensionField(dimension).click();
    }

    changeDataType(identity = 0, dataType = commonDataConfig.DATA_TYPE.NUMBER.label, subType = '') {
        this.getDimensionBoxType(identity).click();

        this.updateDimensionMetricPopover.getDataTypeItem(dataType, subType).click({force: true});

        cy.get(globalElements.SIDE_PANEL).click({force: true});
    }

    changeAliasName(identity = 0, aliasName = '') {
        this.getDimensionBoxType(identity).click();

        this.updateDimensionMetricPopover.getAliasInput().clear().type(aliasName);

        cy.get(globalElements.SIDE_PANEL).click({force: true});
    }
}

export default Dimension;
