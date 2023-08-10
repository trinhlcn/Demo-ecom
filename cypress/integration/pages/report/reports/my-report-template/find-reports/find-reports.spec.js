/// <reference types="Cypress" />
import Search from '../../../../../components/search/search';

const TITLE_REPORT = '[class*=box-title] [class*=title]';

describe('Test search page reports', () => {
    const search = new Search({position: 0});

    // This call for all block
    before(() => {
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/my-report-template`);
        });

        cy.wait(3000);
    });

    // This callback function called per function it run
    beforeEach(() => {
        // login had been define as cypress/support/commands.js
        cy.login();
    });

    it('Test find report is available or not', () => {
        search.isVisible();

        cy.wait(3000);
    });

    it('Test type find report input', () => {
        cy.server();
        cy.route('/api/search/**').as('searchReport');

        search.type('w2dqw');

        cy.wait('@searchReport').then(xhr => {
            const {data = {}} = xhr.response.body;

            const newRows = data.rows.map(item => ({
                key: item.id,
                value: item.name
            })); 

            search.checkData(newRows);
        });
    });

    it('Test click filter in dropdown find report', () => {
        cy.server();
        cy.route('/api/report/**').as('getReportInfo');

        search.getFilterValue().click();
        
        search.getDropdownMenu().should('not.be.visible');

        cy.wait('@getReportInfo');
    });

    it('Test click report in dropdown menu search report', () => {
        cy.server();
        cy.route('/api/report/**').as('getReportInfo');
        
        search.getSearchInput().clear();

        search.type('a');

        search.getItemSearch(0).should('be.visible').click();

        cy.wait('@getReportInfo').then(xhr => {
            const {data = {}} = xhr.response.body;

            cy.url().should('include', `${data.report_id}/view`);

            cy.get(TITLE_REPORT).should('have.text', data.report_name);
        });
    });

});
