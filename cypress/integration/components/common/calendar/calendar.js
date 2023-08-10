// Constants
import {masterDateRange} from 'Pages/report/report-design/workspace/constant';

const ELEMENTS = {
    CALENDAR_BTN: '[class*=btn-calendar]',
    SIDE_PANEL_CALENDAR_BTN: '.side-panel [class*=btn-calendar]',
    CALENDAR_POPOVER: '[class*=popover][style*="visibility: visible"]',
    RANGE_ITEM: '[role=range-item]',
    INPUT_TIME: '[class*=input-time]',
    APPLY_BTN: '[class*=btn-green]',
    CANCEL_BTN: '[class=*btn-grey]'
};

class DefaultDateRange {
    constructor() {

    }
    
    getCalendarBtn() {
        return cy.get(ELEMENTS.CALENDAR_BTN);
    }

    getSidePanelCalendarBtn() {
        return cy.get(ELEMENTS.SIDE_PANEL_CALENDAR_BTN);
    }

    getCalendarPopover() {
        return cy.get(ELEMENTS.CALENDAR_POPOVER); 
    }

    getApplyBtn() {
        return this.getCalendarPopover().find(ELEMENTS.APPLY_BTN).contains('Apply');
    }

    getCancelBtn() {
        return this.getCalendarPopover().find(ELEMENTS.CANCEL_BTN);
    }

    getCalendarItem(label = 'Custom') {
        return this.getCalendarPopover().find(ELEMENTS.RANGE_ITEM).contains(label).parent();
    }

    /**
     * Method to change value of master date range
     * @property {object} options - Option to change 
     * @property {string} options.label - Label of range
     * @property {string} options.fromDate - From date of range 
     * @property {string} options.toDate - To date of range
     */
    changeDateRangeCalendar({
        label = 'Custom',
        fromDate = '01/11/2021',
        toDate = '14/11/2021'
    }) {
        this.getSidePanelCalendarBtn().click();

        this.getCalendarItem(label).click();
        switch (label) {
            case masterDateRange.CUSTOM.label:
                this.getCalendarItem(label).find(ELEMENTS.INPUT_TIME).eq(0).clear().type(fromDate);
                this.getCalendarItem(label).find(ELEMENTS.INPUT_TIME).eq(1).clear().type(toDate);

                this.getApplyBtn().click();
                break;
            default:
                break;
        }
    }
}

export default DefaultDateRange;