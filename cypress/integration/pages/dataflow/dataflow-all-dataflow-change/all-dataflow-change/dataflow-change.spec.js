describe('Test api dataflow change', () => {
    let dataWorkflowChange;

    before(() => {

        cy.login();
        
        cy.server();
        cy.route('GET', '/v3.1/api/workflow/**').as('getDataWorkflowChange');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/workflow-change`);
        });

        cy.wait('@getDataWorkflowChange').then(xhr => {
            dataWorkflowChange = xhr.response.body.data;
        });

    });
    
    beforeEach(() => {
        cy.login();

        cy.server();
    });

    it('Test filter', () => {
        cy.route('GET', '/v3.1/api/filter/**').as('getSavedFilter');
    
        cy.contains('Filter').click();
        cy.wait('@getSavedFilter').then((xhr) => {
            if (xhr.response.body.data.filters.length > 0) {
                cy.get('.dropdown-item').should('be.visible');
            } else {
                cy.contains('No saved filter').should('be.visible');
            }
        });

        cy.contains('Create filter').click();
        cy.wait('@getSavedFilter').then((xhr) => {
            if (xhr.response.body.data.filters.length > 0) {
                cy.contains('Action log Attributes').click();
            }
        });
    });

    it('Test api dataflow change', () => {
        if (dataWorkflowChange.body && dataWorkflowChange.body.length > 0) {
            cy.get('[class*=grid-display-body-data] [class*=body-row]').as('linkClassWorkflowChange');
            dataWorkflowChange.body.map((item, index) => {
                cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] a').first().should('have.text', item.objectName);
                cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] ').eq(1).should('have.text', item.action);
                cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span strong').first().should('have.text', item.timestamp);
                cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span').eq(1).should('have.text', item.user); 
            });
        }
        else {
            cy.get('[class*=no-data]').first().should('have.text', 'No data');
        }

        const page = Number.isInteger(+dataWorkflowChange.total / 10) ? 
            Math.floor(+dataWorkflowChange.total / 10) : 
            Math.floor(+dataWorkflowChange.total / 10 + 1);

        if (page > 1) {
            cy.route('GET', '/v3.1/api/workflow/**').as('getDataWorkflowChange');
            cy.get('[class*=record-table] input').clear().type(`${page}{enter}`);
            cy.wait('@getDataWorkflowChange').then((xhr) => {
                if (xhr.response.body.data.body && xhr.response.body.data.body.length > 0) {
                    cy.get('[class*=grid-display-body-data] [class*=body-row]').as('linkClassWorkflowChange');
                    xhr.response.body.data.body.map((item, index) => {
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] a').first().should('have.text', item.objectName);
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] ').eq(1).should('have.text', item.action);
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span strong').first().should('have.text', item.timestamp);
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span').eq(1).should('have.text', item.user); 
                    });
                }
                else {
                    cy.get('[class*=no-data]').should('have-text', 'No data');
                }  
            });
        }

        cy.checkIfEleExists('[class*=btn-full]', (isExits) => {
            if (isExits) {
                cy.get('[class*=btn-full]').click();
                cy.route('GET', '/v3.1/api/workflow/**').as('getDataWorkflowChange');
                cy.get('[class*=dropdown-menu-rows] [class*=dropdown-menu-rows-item]').eq(1).click();
                cy.wait('@getDataWorkflowChange').then(xhr => {
                    if(xhr && xhr.response && xhr.response.body && xhr.response.body.data && xhr.response.body.data.body){
                        const {body = []} = xhr.response.body.data;
                        // console.log('body', body)
                        //expect(body.length <= 30).equal(true)
                        if (page > 1 && body.length > 30) {
                            cy.route('GET', '/v3.1/api/workflow/**').as('getDataWorkflowChange');
                            cy.get('[class*=pagination] [class*=page-item]').eq(3).click();
                            cy.wait('@getDataWorkflowChange').then((xhr) => {
                                if (xhr.response.body.data.body && xhr.response.body.data.body.length > 0) {
                                    cy.get('[class*=grid-display-body-data] [class*=body-row]').as('linkClassWorkflowChange');
                                    xhr.response.body.data.body.map((item, index) => {
                                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] a').first().should('have.text', item.objectName);
                                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] ').eq(1).should('have.text', item.action);
                                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span strong').first().should('have.text', item.timestamp);
                                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span').eq(1).should('have.text', item.user); 
                                    });
                                }
                                else {
                                    cy.get('[class*=no-data]').should('have-text', 'No data');
                                }  
                            });
                        }
                    }
                    
                });
        
                
            }
        });
    });
});