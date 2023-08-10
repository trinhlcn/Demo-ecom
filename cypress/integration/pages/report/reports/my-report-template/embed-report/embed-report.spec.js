import EmbedReport from '../../../../../components/embed-report/embed-report';

describe('Test template report', () => {
    const embedReport = new EmbedReport();

    before(() => {
        cy.intercept({
            method: 'GET',
            pathname: '/v3.1/api/datasource/index'
        }).as('apiDatasource');

        // login had been define as cypress/support/commands.js
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/my-report-template`);
        });

        cy.wait('@apiDatasource');
        
    });

    beforeEach(() => {
        cy.login();

        cy.server();

        cy.wait(2000);
    });

    // embedReport.testAll();
});