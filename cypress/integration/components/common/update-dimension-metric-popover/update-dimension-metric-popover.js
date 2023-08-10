
// Constants
import {globalElements} from 'Cypress/constant';
import {commonDataConfig} from 'Pages/report/report-design/workspace/constant';

const ELEMENTS = {
    FORM_GROUP: '.form-group',
    UPDATE_DIMENSION_METRIC_POPOVER: '.popover-reactstrap.update-dimension-metric.box-shadow .popover-body',
    DATA_TYPE_MENU_ITEM: '.dropdown-menu [class*=sub]'

};

class UpdateDimensionMetricPopover {
    constructor() {

    }

    getUpdateDimensionMetricPopover() {
        return cy.get(ELEMENTS.UPDATE_DIMENSION_METRIC_POPOVER);
    }

    getAliasInput() {
        return this.getMetricPopoverFormGroup('Name').find('input');
    }

    getMetricPopoverFormGroup(label = '') {
        return this.getUpdateDimensionMetricPopover().find(ELEMENTS.FORM_GROUP).contains(label).parent();
    }

    getAggregationItems() {
        return this.getUpdateDimensionMetricPopover().find(globalElements.RADIO_MULTI);
    }

    getDataTypeItem(dataType = commonDataConfig.DATA_TYPE.NUMBER.label, subType) {
        this.getMetricPopoverFormGroup('Type').find(globalElements.BUTTON_DROPDOWN_TOGGLE).click(); // Show change type dropdown

        switch (dataType) {
            case commonDataConfig.DATA_TYPE.NUMBER.label:
            case commonDataConfig.DATA_TYPE.PERCENT.label:
                return cy.get(ELEMENTS.DATA_TYPE_MENU_ITEM).contains(dataType);

            case commonDataConfig.DATA_TYPE.DATE.label:
            case commonDataConfig.DATA_TYPE.CURRENCY.label:
                return cy.get(ELEMENTS.DATA_TYPE_MENU_ITEM).contains(dataType).parent().find(globalElements.DROPDOWN_MENU).contains(subType);
        }
    }
}

export default UpdateDimensionMetricPopover;