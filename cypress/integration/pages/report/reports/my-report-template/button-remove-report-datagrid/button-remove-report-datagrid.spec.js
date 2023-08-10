const CHECK_BOX = '.checkbox-multi';
const MODAL_DIALOG = '.modal-dialog';

import RemoveButton from '../../../../../components/remove-button-datagrid/remove-button-datagrid';

describe('Test button remove report data grid', () => {
    const removeButton = new RemoveButton({selector: 'Remove', type: 'text'});

    before(() => {
        // login had been define as cypress/support/commands.js
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/my-report-template`);
        });
        
    });

    beforeEach(() => {
        cy.login();

        cy.wait(2000);

        cy.server();
    });

    it('Test remove button is disabled or not', () => {
        removeButton.isDisabled();

        cy.wait(2000);
        
    });

    it('Test remove button is available', () => {
        cy.get(CHECK_BOX).eq(1).click();

        removeButton.isAvailable();
    });

    it('Test click remove button', () => {
        removeButton.isAvailable();

        removeButton.clickRemove();
    });

    it('Test cancel remove', () => {
        removeButton.cancelRemove();

        cy.get(MODAL_DIALOG).should('not.be.visible');
    });

    it('Test confirm remove', () => {
        cy.route('DELETE', '/api/report/**').as('deleteReport');

        removeButton.clickRemove();

        removeButton.confirmRemove();

        cy.wait('@deleteReport').then(xhr => {
            const {body = {}} = xhr.response;

            expect(body.code, 'Test api delete report is success or not').equal(200);

            expect(body.data.message).not.to.be.empty;
        });

        cy.get(MODAL_DIALOG).should('be.visible');

        cy.contains('Close').click();

        cy.get(MODAL_DIALOG).should('not.be.visible');
    });
});