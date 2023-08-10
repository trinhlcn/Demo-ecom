/// <reference types="Cypress" />

describe('Test Filter connector', () => {

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

    it('Test input search',() => {
        cy.server();
        cy.route('GET', '/v3.1/api/destination/channel/**').as('getSearch');
        cy.wait(3000);
        cy.wait('@getSearch').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {body = []} = xhr.response.body.data;

                if (body.length) {
                    cy.get('.table-bordered .checkbox-multi span.icon-check').click();
                } else {
                    cy.contains('No destination connector');
                }
            }
        
        });
    });
    
});