import {commonDataConfig} from 'Cypress/integration/pages/report/report-design/workspace/constant';

const ELEMENTS = {
    DEFAULT_DATE_RANGE_SECTION: '.section',
    ADD_CHART_DROPDOWN: 'div.dropdown-menu.show',
    ANTS_WORKSPACE: '#ants-workspace',
    RADIO_MULTI: '.radio-multi',
    RADIO_CHECK: 'input[type=radio]',
    CALENDAR_BTN: '[role="btn-calendar"]'
};

class DefaultDateRange {
    constructor() {

    }

    getDefaultDateRangeSection() {
        return cy.get(ELEMENTS.DEFAULT_DATE_RANGE_SECTION).contains('Default date range').parent();
    }

    getAutoOption() {
        return this.getDefaultDateRangeSection().find(ELEMENTS.RADIO_MULTI).contains('Auto');
    }

    getAutoCheckBox() {
        return this.getAutoOption().find(ELEMENTS.RADIO_CHECK);
    }

    getCustomOption() {
        return this.getDefaultDateRangeSection().find(ELEMENTS.RADIO_MULTI).contains('Custom');
    }

    getCustomCheckbox() {
        return this.getCustomOption().find(ELEMENTS.RADIO_CHECK);
    }

    getCalendarBtn() {
        return this.getDefaultDateRangeSection().find(ELEMENTS.CALENDAR_BTN);
    }

    addCustomDateRange({
        label = 'Custom',
        fromDate = ''
    }) {
        this.getCustomOption().scrollIntoView();
        this.getCustomOption().click({force: true});
        this.getCalendarBtn().click();
    }
   
    checkTypeDateRange(label = commonDataConfig.DEFAULT_DATE_RANGE.AUTO.label) {
        switch (label) {
            case commonDataConfig.DEFAULT_DATE_RANGE.AUTO.label:
                this.getAutoCheckBox().should('be.checked');
                break;
            case commonDataConfig.DEFAULT_DATE_RANGE.CUSTOM.label:
                this.getCustomCheckbox().should('be.checked');
                break;
            default:
                break;
        }
    }
}

export default DefaultDateRange;