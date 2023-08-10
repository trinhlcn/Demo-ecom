const BODY_ROW = '[class*=body-row]';

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

describe('Test api dataflow change detail', () => {
    let dataActionLog;
    let total = 0;

    before(() => {

        cy.login();
        
        cy.server();
        cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLog');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/workflow/action-log`);
        });

        cy.wait('@getDataActionLog').then(xhr => {
            dataActionLog = xhr.response.body.data;
        });

    });

    beforeEach(() => {
        cy.login();

        cy.server();    

    });

    it('Test api action detail', function () {
        const objWorkflow = dataActionLog.body[0];

        if (dataActionLog.body.length > 0) {
            cy.contains(objWorkflow.objectName).click();
            cy.url().should('include', `${objWorkflow.workflowId}/design`);

            cy.contains('Action log').click();
            cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLogDetailWf');
            cy.wait('@getDataActionLogDetailWf').then((xhr) => {
                if (xhr.response.body.data.header.length > 0) {
                    xhr.response.body.data.header.map((item, index) => {
                        cy.get('[class*=header-row] [class*=header-column]').eq(index).should('have.text', item.label);
                    });
                    if (xhr.response.body.data.body.length > 0) {
                        const workflow = xhr.response.body.data.body;

                        cy.get('[class*=body-row]').as('linkClassWorkflow');

                        workflow.map((item, index) => {
                            cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column] .btn').first().should('have.text', item.workflowRunningId);
                            cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column] .square-name').first().should('have.text', checkStatus(item.status));
                            cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column]').eq(2).should('have.text', item.startTime);
                            cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column]').eq(3).should('have.text', item.endTime);
                        });
                    } else {
                        cy.get('[class*=no-data]').should('have-text', 'No data');
                    }
                } 
            });

            cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLogDetail');
            cy.get('[class*=body-row] [class*=body-column] .btn').first().click();
            
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

            if (parseInt(+total / 10) > 1) {
                const page = parseInt(+total / 10);

                cy.route('GET', '/v3.1/api/workflow/**').as('getDataActionLogDetailWf');
                cy.get('[class*=record-table').clear().type(`${page}{enter}`);
               
                cy.wait('@getDataActionLogDetailWf').then((xhr) => {
                    total = xhr.response.body.data.total;
                    if (xhr.response.body.data.header.length > 0) {
                        xhr.response.body.data.header.map((item, index) => {
                            cy.get('[class*=header-row] [class*=header-column]').eq(index).should('have.text', item.label);
                        });
                        if (xhr.response.body.data.body.length > 0) {
                            const workflow = xhr.response.body.data.body;
    
                            cy.get('[class*=body-row]').as('linkClassWorkflow');
    
                            workflow.map((item, index) => {
                                cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column] .btn').first().should('have.text', item.workflowRunningId);
                                cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column] .square-name').first().should('have.text', checkStatus(item.status));
                                cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column]').eq(2).should('have.text', item.startTime);
                                cy.get('@linkClassWorkflow').eq(index).find('[class*=body-column]').eq(3).should('have.text', item.endTime);
                            });
                        } else {
                            cy.get('[class*=no-data]').should('have-text', 'No data');
                        }
                    } 
                });
            }
        } else {
            cy.get(BODY_ROW).contains('No data').should('be.visible');
        }
    });
});