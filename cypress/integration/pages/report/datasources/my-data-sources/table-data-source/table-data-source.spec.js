import Table from '../../../../../components/table/table';

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

            cy.visit(`${user.user_id}/report/datasources/my-datasource-template`);
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

    it('Test change size table', () => {
        cy.server();
        cy.route('GET', '/v3.1/api/datasource/**').as('getDataTable');

        table.changeSizeTable(30);

        cy.wait('@getDataTable').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data = {}} = xhr.response.body;
                if(data.length){
                    table.checkBody(data);
                    table.checkEditButton();
                }
            }else{
                cy.get('.last-tfoot .wrap-table-footer .record-table').then(text =>{
                    const value = text.text();
                    expect(value.includes('No dataflow')).equal(true);
                })
            }
        });
    });
    it('Test checkbox table', () => {
        table.testCheckBox();
    });
});
