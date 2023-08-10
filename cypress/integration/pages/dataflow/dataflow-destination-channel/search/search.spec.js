/// <reference types="Cypress" />

import Search from 'Components/search/search';

describe('Test Filter connector', () => {
    const search = new Search({position: 0});

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/destination/destination-channel`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test input search',() => {
        cy.server();
        search.isVisible();
        search.type('a');
        cy.route('GET', '/api/search/**').as('getSearch');
        cy.wait('@getSearch').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data = {}} = xhr.response.body;
                const {rows = []} = data;

                const newRows = rows.map(item => ({
                    key: item.user_id,
                    value: item.dest_channel_name
                }));

                const destChannelId = rows[0].dest_channel_id;

                if (rows.length) {
                    search.checkData(newRows);
                    search.getItemSearch(0).click();
                    // cy.url().should('include', `workflow/destination/destination-channel//detail`);
                }

            }
        });         
    });
    
});