/// <reference types="Cypress" />

describe('Test Filter destination', () => {

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/destination/connector/destinations`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test visible add connector', () => {
        cy.get('.filter-bar .split-v .btn-green').contains('DESTINATION').click();
        cy.url().should('include', '/destination/connector/create');
        
        cy.wait(3000);
    });
});