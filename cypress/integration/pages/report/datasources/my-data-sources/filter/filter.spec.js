/// <reference types="Cypress" />

import Filter from 'Components/filter/filter';

describe('Test Filter data source', () => {
    const filter = new Filter(0);

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/datasources/my-datasource-template`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test visible filter', () => {
        cy.route('GET', '/v3.1/api/filter/**').as('getFilter');
        filter.getButtonFilter().click();
        cy.wait('@getFilter').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data = {}} = xhr.response.body;
                const {filters = []} = data;

                if (!filters.length) {
                    filter.getRowNoSavedFilter();
                }

                filter.getContentCreateFilter().click();
                filter.inputFilter('a');
                filter.saveNewFilter();
                filter.closeFilter();
            }
        });
        
    });

    it('Test delete filter', () => {
        filter.getButtonFilter().click();
        cy.get('.dropdown-menu [class*=btn-remove]').contains('Remove').eq(0).click();
        cy.get('.modal-footer .btn-green').click();
        cy.contains('Close')
    });
});