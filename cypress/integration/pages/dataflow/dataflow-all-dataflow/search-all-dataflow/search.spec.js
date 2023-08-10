

describe('Test search connector',() =>{

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/my-workflow`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test search', ()=>{
        cy.server(),
        cy.route('GET', '/v3.1/api/workflow/**').as('getSearch');
        cy.get('.filter-bar .dropdown .input-search .search-input').type('a');
        cy.get('.dropdown-menu .position-relative .dropdown-item').then(text => {
            const value = text.text();
            expect(value.includes('a')).equal(true);
        });
        cy.wait('@getSearch').then((xhr) =>{
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {body=[]} = xhr.response.body.data;
                body.map(item=>{
                    cy.get('.dropdown-menu .position-relative .dropdown-item').then(text => {
                        const value=item.workflowName;
                        expect(value.includes('a')).equal(true);
                    });
                })
            }
        });
        cy.wait(300);
    })
})