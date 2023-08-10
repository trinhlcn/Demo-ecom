import RemoveButton from '../../../../components/remove-button-datagrid/remove-button-datagrid';

describe('Test remove report in Explorer page', () => {
    const removeButton = new RemoveButton({selector: '.inner-content .filter-bar .btn-default'});

    before(()=>{
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie =>{
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/explorers`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.wait(2000);

        cy.server();  
    });

    it('Test remove button disable', () => {
        removeButton.isDisabled();
        
        cy.wait(2000);
    });

    it('Test remove button active', () => {
        // if(cy.get('.checkbox .checkbox-multi [type="checkbox"]').should('be.visible').equal(true)){
        //     cy.get('.checkbox .checkbox-multi [type="checkbox"]').eq(1).check({force: true});
        //     removeButton.isAvailable();
        // }
        // else{
        //     console.log('a');
        // }

    });

    it('Test click remove button',() => {
        // removeButton.clickRemove();
    });

    it('Test click cancel button', () => {
        // removeButton.cancelRemove();
        // cy.get('.modal-dialog .modal-content').should('not.be.visible');
    });

    it('Test confirm button modal', () => {
        // cy.route('DELETE', '/api/report/**').as('deleteReport');

        // removeButton.clickRemove();

        // removeButton.confirmRemove();

        // cy.wait('@deleteReport').then(xhr => {
        //     const {body = {}} = xhr.response;

        //     expect(body.code, 'Test api delete report is success or not').equal(200);

        //     expect(body.data.message).not.to.be.empty;
        // });

        // cy.get('.modal-dialog .modal-content').should('be.visible');

        // cy.contains('Close').click();

        // cy.get('.modal-dialog .modal-content').should('not.be.visible');
    });
});
