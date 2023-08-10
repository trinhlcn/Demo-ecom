/// <reference types="Cypress" />

import DropdownAddSource from '../../../../components/dropdown-add-object/dropdown-add-object';

const REPORT_TITLE = '[class*=box-title] [class*=title]:visible';

describe('Create new report from data sources', () => {

    const dropdownAddSource = new DropdownAddSource('EXPLORER', 'text', 'popover');
    
    // This call for all block
    before(() => {
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/explorers`);
        });
    });

    // This callback function called per function it run
    beforeEach(() => {
        // login had been define as cypress/support/commands.js
        cy.login();

        cy.viewport(1920, 1080);

        cy.wait(2000);

    });

    it('Test open data source and create report', () => {
        cy.server();
        // use cy.route() when you want to wait a promise, we define first and use ít in cy.wait()
        cy.route('GET', '/v3.1/api/datasource/**').as('getDataSource');
        cy.route('GET', '/api/report/index/**').as('getReportCreated');
        cy.route('GET', '/v3/package/api/client/user-package/**').as('authentication');
        cy.route('PUT', '/api/report/index/**').as('updateReport');

        dropdownAddSource.openDropdown();

        cy.wait('@getDataSource').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data = {}} = xhr.response.body;

                dropdownAddSource.checkDataSource(data.dataSources);
            }
        });

        if (Cypress.env('ENV') !== 'sandbox-a1' && Cypress.env('ENV') !== 'staging') {
            dropdownAddSource.searchDataSource('trello');

            cy.wait('@getDataSource').then(xhr => {
                if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                    const {data = {}} = xhr.response.body;

                    dropdownAddSource.checkDataSource(data.dataSources);
                }
            });

            dropdownAddSource.clearSearch();
        }

        cy.wait(2000);

    });

    it('Test Create report is success or failed', () => {
        // cy.server();

        // cy.route('GET', '/api/report/**').as('getReportInfo');
        // cy.route('POST', '/api/report/**').as('createReport');
        
        // cy.wait(1000);

        // dropdownAddSource.createDataSource(2)

        // cy.wait('@createReport').then(xhr => {
        //     const {data = {}} = xhr.response.body;

        //     expect(data.reportId).to.be.a('number');

        //     cy.url().should('include', `report/explorers/${data.reportId}/design`);
        // });

        // cy.wait('@getReportInfo').then(xhr => {
        //     const {data = {}} = xhr.response.body;
            
        //     cy.get(REPORT_TITLE).first().should('have.text', data.report_name);
                
        // }).wait(2000);

        
    });

    it('Test add chart', () => {
        // cy.get('[class*=dropdown-add-chart] button').click()
        // cy.contains('Add a chart').click()

        // cy.contains('Table').click()

        // cy.get('.main-workspace-report [class*=workspace]').should('have.length', 2)
    })

    it('Test create a table chart', () => {
        // cy.server();
        // cy.contains('Add a chart').click();
    });
});
