/// <reference types="Cypress" />

describe('Test Filter connector', () => {

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/connector/my-connectors`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test visible add connector', () => {
        cy.get('.filter-bar .split-v .btn-green').contains('ADD CONNECTOR').click();
        cy.url().should('include', '/connector/my-connectors/create');
        cy.wait(3000);
    });
});