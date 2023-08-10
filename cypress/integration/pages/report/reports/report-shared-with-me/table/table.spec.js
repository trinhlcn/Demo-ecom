import Table from '../../../../../components/table/table';

const MODAL_CONTENT = '.modal-content';

describe('Test table data source report', () => {
    const table = new Table({option: 0});
    let dataTable = {};
    let textRow = '';

    before(() => {
        cy.login();

        cy.intercept({
            method: 'GET',
            pathname: '/api/report/index',
        }).as('getDataTable');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/reports/shared-with-me`);
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

    it('Test checkbox table', () => {
        table.testCheckBox();
    });

    it('Test change size table', () => {
        cy.server();
        cy.route('GET', '/api/report/**').as('getDataTable');

        table.changeSizeTable(30);

        cy.wait('@getDataTable').then(xhr => {
            const {data = {}} = xhr.response.body;

            table.checkBody(data);
        });
    });
});
