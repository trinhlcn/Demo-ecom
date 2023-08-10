import Table from 'Components/table/table';

const MODAL_CONTENT = '.modal-content';

describe('Test table data source', () => {
    const table = new Table({option: 0});
    let dataTable = {};

    before(() => {
        cy.login();
        cy.server();
        cy.route('GET', '/v3.1/api/datasource/**').as('getDataTable');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/datasources/shared-with-me`);
        });

        cy.wait('@getDataTable').then(xhr => {
            const {data = {}} = xhr.response.body;

            dataTable = data;

            expect(xhr.response.body.code, 'Check status response data').equal(200);

        });
    });

    beforeEach(() => {
        cy.login();

        cy.wait(2000);

    });

    it('Test table is visible or not',  () => {
        table.getTable().should('be.visible');
    });

    it('Check header table', function () {
        table.checkHeader(dataTable);
    });

    it('Check body table', () => {
        table.checkBody(dataTable);
    });


    // it('Confirm rename data source name', () => {
    //     cy.server();
    //     cy.route('PUT', '/v3.1/api/datasource/**').as('renameReport');

    //     if (dataTable.body.length > 0) {
    //         dataTable.body.map((row, index) => {
    //             if (index < 2) {
    //                 table.getEditButton(index).click({force: true});

    //                 table.getInputEdit(index).type('draft');

    //                 table.getSaveButton(index).click();

    //                 cy.wait('@renameReport').then(xhr => {
    //                     const {body = {}} = xhr.request;

    //                     cy.get(MODAL_CONTENT).should('be.visible').contains('Close').click().wait(1000);
                        
    //                     table.getBodyColumn(index).invoke('text').then(text => {
    //                         expect(text).equal(body.dataSourceName);
    //                     });
    //                 });
    //             }
    //         });
    //     }
    // });

    it('Test checkbox table', () => {
        table.testCheckBox();
    });

    it('Test change size table', () => {
        cy.server();
        cy.route('GET', '/v3.1/api/datasource/**').as('getDataTable');

        table.changeSizeTable(30);

        cy.wait('@getDataTable').then(xhr => {
            const {data = {}} = xhr.response.body;

            table.checkBody(data);
        });
    });
});
