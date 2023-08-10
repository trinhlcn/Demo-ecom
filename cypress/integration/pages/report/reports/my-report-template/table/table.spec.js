import Table from '../../../../../components/table/table';

const MODAL_CONTENT = '.modal-content';

describe('Test table data source report', () => {
    const table = new Table({option: 0});
    let dataTable = {};
    let textRow = '';

    before(() => {
        cy.login();
        // cy.server();
        // cy.route('GET', '/api/report/**').as('getDataTable');

        cy.intercept({
            method: 'GET',
            pathname: '/api/report/index',
        }).as('getDataTable');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/my-report-template`);
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

    it('Check edit Button', () => {
        table.checkEditButton();
    });

    it('Test change rename duplicate', () => {
        cy.server();
        cy.route('PUT', '/api/report/**').as('renameReport');
        cy.route('GET', '/api/report/**').as('getReport');

        table.getEditButton(0).click({force: true});

        table.getInputEdit().clear().type(dataTable.body[2].report_name);

        table.getSaveButton().click();

        cy.wait('@renameReport').then(() => {
            cy.get(MODAL_CONTENT).contains('Warning').should('be.visible');

            cy.get(MODAL_CONTENT).contains('Cancel').click();

            cy.wait('@getReport');
        });
    });

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
        cy.route('GET', '/api/report/**').as('getDataTable');

        table.changeSizeTable(30);

        cy.wait('@getDataTable').then(xhr => {
            const {data = {}} = xhr.response.body;

            table.checkBody(data);
        });
    });
});
