/// <reference types="Cypress" />

describe('Test edit', () => {
    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/my-workflow`);
        });
    });

    beforeEach(() => {
        cy.login();
        cy.server();
    });

    it('Test delete', () => {
        
        cy.server(),
        cy.route('GET', '/v3.1/api/workflow/**').as('getEdit');
        cy.wait('@getEdit').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data = []} = xhr.response.body.data;
                if (data.length) {
                    cy.get('.checkbox .checkbox-multi .icon-check').eq(1).click();
                    cy.get('.filter-bar .dropdown-edit .dropdown-toggle ').click();
                    cy.get('.dropdown-edit .dropdown-menu .remove').click();
                    cy.wait(1000);
                    cy.get('.modal-content .modal-footer .btn-green ').click();
                    cy.get('.modal-content .modal-footer-uML9D .btn-default').click();
                }else {
                    cy.get('.last-tfoot .wrap-table-footer .record-table').then(text =>{
                        const value = text.text();
                        expect(value.includes('No dataflow')).equal(true);
                    })
                }
            }
        });
        cy.wait(300);
    })

    it('Test edit', () => {
        //create data
        cy.get('.filter-bar .split-v .btn-green').click();
        cy.wait(2000);
        cy.get('.card .card-body .btn-green').click();
        cy.get('.dropdown-toggle-wkgDl').click();
        //cy.wait(2000);
        //cy.get('[class*=data-source-item] [class*=block-right-content]').eq(2).click();

    })
})