import TemplateReport from '../../../../../components/template-report/template-report';

const DROPDOWN = 'REPORT';

describe('Test template report', () => {
    const templateReport = new TemplateReport(DROPDOWN);

    before(() => {
        // login had been define as cypress/support/commands.js
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/my-report-template`);
        });
        
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    // templateReport.testAll();
});