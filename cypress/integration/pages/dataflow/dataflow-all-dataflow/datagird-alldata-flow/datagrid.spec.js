
/// <reference types="Cypress" />

// const { forceCenter } = require("d3");

describe('Test dataGrid', ()=>{
    
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

    it('Test data', ()=>{
        cy.server(),
        cy.route('GET', '/v3.1/api/workflow/**').as('getDatagrid');
        cy.wait('@getDatagrid').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                if(xhr.response.body.data.body.lengh){
                    cy.get('.btn-secondary .icon-ants-three-dot-vertical').eq(0).click({force: true});
                    cy.get('.dropdown-menu.show .dropdown-item').eq(0).click({force: true});
                    cy.get('.edit-item .edit-label .form-control').type('a');
                    cy.get('.edit-label .group-button .btn-green').eq(0).click({force: true});
                    cy.wait(3000);
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
})