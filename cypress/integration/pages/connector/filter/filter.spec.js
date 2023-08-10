/// <reference types="Cypress" />

import Filter from 'Components/filter/filter.js';

describe('Test Filter connector', () => {
    const filter = new Filter(0);

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/connector/my-connectors`);
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
                cy.get('.dropdown-menu li').contains('Connector name').click();
                filter.inputFromFilter('test');
                cy.contains('Apply').click();
                cy.get('[class*=campaign-filter-v2] [class*=btn-pen]').click();
                cy.get('.block-new-filter input.form-control ').type('test' + Math.random(0,1));
                cy.contains('Apply').click();
                cy.get('[class*=campaign-filter-v2] [class*=btn-close]').click();
            }
        });
        cy.wait(3000);
    });

    it('Test delete filter', () => {
        filter.getButtonFilter().click();
        filter.removeFilterSaved(0);
        cy.get('.modal-content .btn-default').click();
    });
});