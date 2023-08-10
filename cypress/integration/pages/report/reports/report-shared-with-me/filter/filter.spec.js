
/// <reference types="Cypress" />

describe('Test filter', ()=>{
    
    let dataAPI= {};

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/reports/shared-with-me`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.intercept({
            method: 'GET',
            pathname: '/api/report/index',
        }).as('getFilter');
        
        cy.wait('@getFilter').then(xhr => {
            const {data = {}} = xhr.response.body;
            dataAPI= data;
            if(dataAPI.body.length > 0){
                cy.get('.text-left .box-edit-item .edit-item').should('be.visible');
                cy.get('.dropdown .input-search .search-input').type('TO DATE');
                cy.get('.dropdown-menu .position-relative .dropdown-item').should('be.visible').click();
            }else{
                //
            }
        });
    });

    it('Test data', ()=>{
        cy.wait(300);
    })
})