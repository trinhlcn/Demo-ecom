/// <reference types="Cypress" />

describe('Test Filter destination', () => {

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/destination/destination-channel`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test visible add connector', () => {
        cy.get('.filter-bar .split-v .btn-green').contains('DESTINATION').click();
        cy.url().should('include', 'workflow/destination/create');
        
        cy.wait(3000);
    });
});