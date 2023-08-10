
/// <reference types="Cypress" />

import DropdownAddObject from '../../../../../components/dropdown-add-object/dropdown-add-object';
import Connector from '../../../../../components/connector/connector';

describe('Test add data source', () => {
    const dropdownAddObject = new DropdownAddObject('button.btn.btn-green','selector');
    const connectors = new Connector();

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

    it('Test add data source', () => {
        dropdownAddObject.clickDropdownAdd();

        connectors.selectConnector();
    });
});