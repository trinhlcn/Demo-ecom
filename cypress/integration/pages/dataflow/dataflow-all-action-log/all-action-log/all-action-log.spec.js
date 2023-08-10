/// <reference types="Cypress" />

const constants = {
    ACTION_LOG_STATUS_PROCESSING: 42,
    ACTION_LOG_STATUS_COMPLETED: 54,
    ACTION_LOG_STATUS_FAILED: 82,
    ACTION_LOG_STATUS_SUCCESS: 50
};

const checkStatus = (status) => {
    switch (status) {
        case constants.ACTION_LOG_STATUS_FAILED: 
            return 'Failed';
        case constants.ACTION_LOG_STATUS_SUCCESS:
            return 'Success';
        case constants.ACTION_LOG_STATUS_PROCESSING:
            return 'Processing';
        case constants.ACTION_LOG_STATUS_COMPLETED:
            return 'Completed';
        default:
            break;
    }
};

describe('Test api workflow action log', () => {
    beforeEach(() => {
        cy.login();

        cy.server();
    });

    before(() => {
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/action-log`);
        });

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
    
    it('Test api action log', () => {

        cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLogDetail');

        cy.checkIfEleExists('[class*=body-column] [class*=btn]', (isExits) => {
            if (isExits) {
                cy.get('[class*=body-column] [class*=btn]').first().click();

                cy.wait('@getDataActionLogDetail').then((xhr) => {
                    if (xhr.response.body.data.header.length > 0) {
                        xhr.response.body.data.header.map((item, index) => {
                            cy.get('[class*=header-row] [class*=column-sub-table]').eq(index).should('have.text', item.label);
                        });
                    }
                    if (xhr.response.body.data.body.length > 0) {
                        const workflow = xhr.response.body.data.body;
        
                        cy.get('[class*=grid-display-body-expand] [class*=body-row]').as('linkClassWorkflowDetail');
                        workflow.map((item, index) => {
                            cy.get('@linkClassWorkflowDetail').eq(index).find('[class*=body-column]').first().should('have.text', item.action);
                            cy.get('@linkClassWorkflowDetail').eq(index).find('[class*=body-column] .square-name').first().should('have.text', checkStatus(item.status));
                            cy.get('@linkClassWorkflowDetail').eq(index).find('[class*=body-column]').eq(2).should('have.text', item.startTime);
                            item.description.map((name, number) => {
                                cy.get('@linkClassWorkflowDetail').eq(index).find('[class*=body-column] ul li').eq(number).should('have.text', name);     
                            });  
                        });
                    } else {
                        cy.get('[class*=no-data]').should('have-text', 'No data');
                    }  
                });

                cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLog');
                // cy.get('[class*=record-table] input').clear().type('3{enter}');
                // cy.wait('@getDataActionLog').then(xhr => {
                //     if (xhr.response.body.data.header.length > 0) {
                //         xhr.response.body.data.header.map((item, index) => {
                //             cy.get('[class*=header-row] [class*=header-column]').eq(index).should('have.text', item.label);
                //         });
                //     }
                //     if (xhr.response.body.data.body.length > 0) {
                //         const workflow = xhr.response.body.data.body;

                //         workflow.map((item, index) => {
                //             cy.get('[class*=body-row]').eq(index).find('[class*=body-column] div').first().should('have.text', item.objectName);
                //             cy.get('[class*=body-row]').eq(index).find('[class*=body-column]').eq(1).should('have.text', item.workflowRunningId);
                //             cy.get('[class*=body-row]').eq(index).find('[class*=body-column] .square-name').first().should('have.text', checkStatus(item.status));
                //             cy.get('[class*=body-row]').eq(index).find('[class*=body-column]').eq(3).should('have.text', item.startTime);
                //             cy.get('[class*=body-row]').eq(index).find('[class*=body-column]').eq(4).should('have.text', item.endTime);   
                //         });
                //     } else {
                //         cy.get('[class*=no-data]').should('have-text', 'No data');
                //     } 
                // });

                cy.get('[class*=btn-full]').click();
                cy.get('[class*=dropdown-menu-rows] [class*=dropdown-menu-rows-item]').eq(1).click();
                cy.wait('@getDataActionLog').then(xhr => {
                    expect(xhr.response.body.data.body.length).equal(30);
                });

                cy.get('[class*=pagination] [class*=page-item]').eq(3).click();
                cy.wait('@getDataActionLog').then(xhr => {
                    expect(xhr.response.body.data.body.length).greaterThan(0);
                });
            } else {
                cy.contains('No data');
            }
        });

    });
}); 