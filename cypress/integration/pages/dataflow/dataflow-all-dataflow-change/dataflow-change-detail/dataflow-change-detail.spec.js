describe('Test api dataflow change detail', () => {
    let dataWorkflowChange;

    beforeEach(() => {
        cy.login();

        cy.server();

    });

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
    
    it('Test api dataflow change detail', () => {
        const objWorkflow = dataWorkflowChange.body[0];
        
        if (objWorkflow) {
            cy.contains(objWorkflow.objectName).click();
            cy.url().should('include', `${objWorkflow.workflowId}/design`);
    
            cy.contains('Dataflow change').click();
            cy.route('GET', '/v3.1/api/workflow/**').as('getDataWorkflowChangeDetailWf');
            cy.wait('@getDataWorkflowChangeDetailWf').then((xhr) => {
                const data = xhr.response.body.data;
    
                if (data.header && data.header.length > 0) {
                    data.header.map((item, index) => {
                        cy.get('[class*=header-row] [class*=header-column]').eq(index).should('have.text', item.label);
                    });
                }
                if (data.body && data.body.length > 0) {
    
                    cy.get('[class*=body-row]').as('linkClassWorkflowChange');
                    data.body.map((item, index) => {
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span strong').first().should('have.text', item.timestamp);
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] [class*=timestamp-column] span').eq(1).should('have.text', item.user); 
                        cy.get('@linkClassWorkflowChange').eq(index).find('[class*=body-column] ').eq(1).should('have.text', item.action);
                    });
                } else {
                    cy.get('[class*=no-data]').should('have-text', 'No data');
                }
            });
        }

        cy.checkIfEleExists('[class*=see-more]', (isExits) => {
            if (isExits) {
                cy.wait(1000);
                cy.get('[class*=see-more]').first().click();
                cy.get('[class*=transition-list]').first().should('not.have.css', 'height','0px');
                cy.get('[class*=see-more]').first().click();
                cy.get('[class*=transition-list]').first().should('have.css', 'height','0px');
            }
        });
        
    });
    
});