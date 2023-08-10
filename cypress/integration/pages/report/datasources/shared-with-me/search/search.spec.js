/// <reference types="Cypress" />
import Search from 'Components/search/search';

const FILTER = '.campaign-filter';
const VALUE_FILTER = '.campaign-filter .wrap-row .inner-row .three input';
const TITLE_REPORT = '[class*=box-title] [class*=title]';

describe('Test search page data sources', () => {
    const search = new Search({position: 0});

    // This call for all block
    before(() => {
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/datasources/shared-with-me`);
        });

        cy.wait(3000);
    });

    // This callback function called per function it run
    beforeEach(() => {
        // login had been define as cypress/support/commands.js
        cy.login();
    });

    it('Test search data source is available or not', () => {
        search.isVisible();

        cy.wait(3000);
    });

    it('Test type search data source input', () => {
        cy.server();
        cy.route('/api/report/**').as('searchReport');

        search.type('w2dqw');
        cy.route('/v3.1/api/datasource/**').as('searchReport');
        cy.wait('@searchReport').then(xhr => {
            const {data = []} = xhr.response.body;

            if (data.length) {
                const newRows = data.map(item => ({
                    key: item.id,
                    value: item.name
                }));
    
                search.checkData(newRows);
            }
        });
    });

    it('Test click filter in dropdown search data source', () => {
        search.getFilterValue().click();
        
        search.getDropdownMenu().should('not.be.visible');

        cy.wait(2000);
    });

    it('Test click report in dropdown menu search data source', () => {
        cy.server();
        cy.route('/v3.1/api/datasource/**').as('getReportInfo');
        
        search.getSearchInput().clear();

        search.type('a');

        cy.wait('@getReportInfo').then(xhr => {
            const {data = []} = xhr.response.body;

            if (data.length) {
                search.getItemSearch(0).should('be.visible').click();
                cy.url().should('include', '/fields');
            }
        });
    });

});
