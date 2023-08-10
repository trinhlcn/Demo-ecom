// Components
import {Calendar} from 'Components/common';

// Constants
import {api, masterDateRange} from 'Pages/report/report-design/workspace/constant';

const ELEMENTS = {
    ICON_CALENDAR: '.icon-ants-calendar',
    ANTS_WORKSPACE: '#ants-workspace'
};

const calendar = new Calendar();

class MasterDateRange {
    constructor() {

    }

    getMasterDateRangeBtn() {
        return cy.get(ELEMENTS.ICON_CALENDAR).parent();
    }

    /**
     * Method to create new master date range
     * @param {number} x - x position
     * @param {number} y - y position
     * @example 
     * createMasterDateRange(500, 50)
     */
    createMasterDateRange(x = 500, y = 50) {
        cy.intercept({
            method: 'GET',
            url: api.PACKAGE_USER,
            query: {
                type: 'check-permission-limit'
            }
        }).as('checkPermission');

        this.getMasterDateRangeBtn().click('center');

        cy.wait('@checkPermission');

        cy.get(ELEMENTS.ANTS_WORKSPACE).click(x, y);
    }

    /**
     * Method to change value of master date range
     * @property {object} options - Option to change 
     * @property {string} options.label - Label of range
     * @property {string} options.fromDate - From date of range 
     * @property {string} options.toDate - To date of range
     */
    changeMasterDateRange(options) {

        calendar.changeDateRangeCalendar(options);
    }
}

export default MasterDateRange;