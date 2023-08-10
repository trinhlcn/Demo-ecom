const CHECK_BOX_TABLE_BODY = '.checkbox-multi';
const MODAL_DIALOG_MESSAGE_REMOVE = '.modal-dialog';

import RemoveButton from 'Components/remove-button-datagrid/remove-button-datagrid';

describe('Test button remove data source', () => {
    const removeButton = new RemoveButton({selector: 'Remove', type: 'text'});

    before(() => {
        // login had been define as cypress/support/commands.js
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/datasources`);
        });
        
    });

    beforeEach(() => {
        cy.login();

        cy.wait(2000);

        cy.server();
    });

    it('Test remove button is disabled or not', () => {
        removeButton.isDisabled();
        
    });

    // it('Test remove button is available', () => {
    //     cy.get(CHECK_BOX_TABLE_BODY).eq(1).click();

    //     removeButton.isAvailable();
    // });

    // it('Test cancel remove', () => {
    //    // removeButton.isAvailable();

    //     removeButton.clickRemove();

    //     removeButton.cancelRemove();

    //     cy.get(MODAL_DIALOG_MESSAGE_REMOVE).should('not.be.visible');
    // });

    // it('Test confirm remove', () => {
    //     cy.route('DELETE', '/v3.1/api/datasource/**').as('deleteReport');

    //     removeButton.clickRemove();

    //     removeButton.confirmRemove();

    //     cy.wait('@deleteReport').then(xhr => {
    //         const {body = {}} = xhr.response;

    //         expect(body.code, 'Test api delete report is success or not').equal(200);

    //         cy.get(MODAL_DIALOG_MESSAGE_REMOVE).should('be.visible');

    //         cy.contains('Close').click();
    
    //         cy.get(MODAL_DIALOG_MESSAGE_REMOVE).should('not.be.visible');
    
    //         removeButton.isDisabled();
    //     });
    // });
});