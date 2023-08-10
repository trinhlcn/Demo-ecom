import Table from '../../../../components/table/table';

const MODAL_CONTENT = '.modal-content';

describe('Test data grid Explorer page', () => {
    const table = new Table({option: 0});
    let dataTable = {};
    let textRow = '';

    before(() =>{
        cy.login();
        cy.server();
        cy.route('GET', '/api/report/**?**limit=10&page=1**').as('getDataTable');
        
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie =>{
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/explorers`);
        });
        cy.wait('@getDataTable').then(xhr => {
            if (xhr && xhr.response && xhr.response.body ) {
                const {data = {}} = xhr.response.body;

                dataTable = data;
                // expect(data.body.length > 0).equal(true);
            }
  
        });
        // if (Cypress.env('ENV') === 'sandbox-a1') {
        //     cy.wait(4000);
        //     cy.wait('@getDataTable').then(xhr => {
        //         if (xhr && xhr.response && xhr.response.body ) {
        //             const {data = {}} = xhr.response.body;

        //             dataTable = data;
        //         // expect(data.body.length > 0).equal(true);
        //         }
            
        //     });
        // }
    });

    beforeEach(()=>{
        cy.login();
    });

    it('Test visible data table ', () => {
        table.getTable().should('be.visible');

        cy.wait(3000);
    });

    it('Test data from Api', () => {
        cy.server();
        table.checkHeader(dataTable);
        table.checkBody(dataTable);
    });
    
    it('Check edit button', () => {
        const {body = []} = dataTable;

        if (body.length > 0) {
            table.checkEditButton();
            table.checkEditButton();
        }
    });

    // it('Test change rename duplicate', () => {
    //     cy.server();
    //     const {body = []} = dataTable;

    //     if (body.length > 0) {
    //         cy.route('PUT', '/api/report/**').as('renameReport');
    //         cy.route('GET', '/api/report/**').as('getReport');

    //         table.getEditButton(0).click({force: true});

    //         table.getInputEdit().clear().type(dataTable.body[2].report_name);

    //         table.getSaveButton().click();

    //         cy.wait('@renameReport').then(() => {
    //             cy.get(MODAL_CONTENT).contains('Warning').should('be.visible');

    //             cy.get(MODAL_CONTENT).contains('Cancel').click();
    //         });

    //         cy.wait('@getReport');
    //     }
    // });

    it('Confirm rename report name', () => {
        cy.server();
        cy.route('PUT', '/api/report/**').as('renameReport');

        if (dataTable.body.length > 0) {
            dataTable.body.map((row, index) => {
                if (index === 2) {
                    table.getItemRow(index).then(text => {
                        textRow = text.text();
                        cy.wrap(textRow).as('valueText');
                    });
                   
                    table.getEditButton(index).click({force: true});

                    table.getInputEdit(index).type('draft');
                        
                    table.getSaveButton(index).click();

                    cy.wait('@renameReport').then(() => {
                        cy.get('body').click(10, 10);
                    });

                    cy.get('@valueText').then(text => {

                        table.getEditButton(index).click({force: true});

                        table.getInputEdit(index).clear().type(text);

                        table.getSaveButton(index).click();

                        cy.wait(3000);

                        cy.get('body').click(10, 10);
                        
                    });
                }
            });
        }
    });

    it('Test checkbox table', () => {
        table.testCheckBox();
    });

    it('Test change size table', () => {
        cy.server();
        const {body = []} = dataTable;

        if (body.length > 0) {
            cy.route('GET', '/api/report/**').as('getDataTable');

            table.changeSizeTable(30);
    
            cy.wait('@getDataTable').then(xhr => {
                const {data = {}} = xhr.response.body;
    
                table.checkBody(data);
            });
        }
    });
});
