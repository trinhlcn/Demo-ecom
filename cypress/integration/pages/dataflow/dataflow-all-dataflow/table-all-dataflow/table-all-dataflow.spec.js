import TableDataflow from 'Components/table-dataflow/table-dataflow';

describe('Test filter dataflow', () => {
    const table = new TableDataflow(0);

    before(() => {
        // login had been define as cypress/support/commands.js
        cy.login();
        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/workflow/my-workflow`);
        });
        
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    table.testAll();
});