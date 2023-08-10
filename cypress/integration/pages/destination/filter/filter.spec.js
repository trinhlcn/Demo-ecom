/// <reference types="Cypress" />

import Filter from 'Components/filter/filter.js';

describe('Test Filter connector', () => {
    const filter = new Filter(0);

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/destination/connector/destinations`);
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
                cy.get('[class*=dropdown-sub-menu] [class*=select-search]').click();
                cy.get('.dropdown-menu li').contains('Destination name').click();
                cy.get('.align-items-center .form-control').type('test');
                cy.get('.text-right .btn-green').eq(1).click({multiple: true});
                cy.contains('Save filter').click();
                cy.get('.block-new-filter input.form-control ').type('test' + Math.random(0,1));
                cy.contains('Apply').click();
                cy.get('[class*=page-filter-v2] [class*=btn-close]').click();
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