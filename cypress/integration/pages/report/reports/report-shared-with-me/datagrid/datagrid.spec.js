
/// <reference types="Cypress" />

describe('Test dataGrid', ()=>{
    
    let dataGrid= {};

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
        }).as('getDatagrid');
        cy.wait('@getDatagrid').then(xhr => {
            const {data = {}} = xhr.response.body;
            dataGrid= data;
            if(dataGrid.body.length > 0){
                cy.get('.text-left .box-edit-item .edit-item').should('be.visible');
            }else{
                //
            }
        });
    });

    it('Test data', ()=>{
        cy.wait(300);
    })
})