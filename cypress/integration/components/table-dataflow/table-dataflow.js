const WRAP_TABLE = '[class*=wrap-table]';
const TABLE_BORDERED = '.table-bordered';
const BOX_EDIT_ITEM = '.box-edit-item';
const EDIT_ITEM = '.edit-item';
const EDIT_NAME = '.edit-name';
const BTN_OPTION = '.btn-option';
const FORM_EXPORT = '.form-export';
const EDIT_LABEL = '.edit-label';
const WRAP_TABLE_FOOTER = '.wrap-table-footer';
const RECORD_TABLE = '.record-table';

class TableDataflow {
    constructor(option) {
        const {position = 0} = option;

        this._position = position;
    }

    checkTableVisible() {
        return cy.get(WRAP_TABLE).eq(this._position).should('be.visible');
    }

    getTbody() {
        return cy.get(`${TABLE_BORDERED} tbody tr`);
    }

    getBodyDataflowName(index) {
        return this.getTbody().eq(index).find(`${BOX_EDIT_ITEM} ${EDIT_ITEM} a ${EDIT_NAME}`);
    }

    testBodyDataTable(data) {
        if (data.length) {
            this.getDataflowName(0).should('have.text', data[0].workflowName);
        }
    }

    getDataflowName(index) {
        return this.getTbody().eq(index).find(`${BOX_EDIT_ITEM} ${EDIT_ITEM} ${EDIT_NAME}`);
    }

    testHeaderDataTable(headerData) {
        if (headerData.length) {
            headerData.map(item => {
                cy.contains(item.label).should('be.visible');
            });
        }
    }

    showModalEdit() {
        return cy.get(`${TABLE_BORDERED} tbody tr .box-edit-item .btn-option .btn-secondary`);
    }

    testChangeName() {
        this.showModalEdit().eq(0).click({force: true});

        cy.contains('Change name').click();

        cy.get(`${EDIT_LABEL} input`).type('Storm');

        cy.contains('Save').click();

        cy.wait(2000);

        cy.contains('Close').click();
    }

    testDeleteDataflow() {
        this.showModalEdit().eq(0).click({force: true});

        cy.get(`${BTN_OPTION} .dropdown-menu .dropdown-item`).eq(4).click();

        cy.contains('Confirm').click();

        cy.wait(2000);

        cy.contains('Close').click();
    }

    testCloneDataflow() {
        this.showModalEdit().eq(0).click({force: true});

        cy.contains('Clone this dataflow').click();

        cy.get(`${FORM_EXPORT} input`).type('Test');
        cy.contains('Submit').click();
        if (cy.contains('This dataflow name already exists').should('be.visible')) {
            cy.contains('Cancel').click();
            
        } else {
            cy.contains('Close').click();
        }
    }

    checkShowRows() {
        cy.get(`${WRAP_TABLE_FOOTER} ${RECORD_TABLE} .dropdown button`).click();

        cy.get(`${WRAP_TABLE_FOOTER} ${RECORD_TABLE} .dropdown .dropdown-menu button`).eq(1).click();

    }

    testAll() {
        it('Test table', () => {
            this.checkTableVisible();

            cy.route('GET', '/v3.1/api/workflow/**').as('getDataPerformance');

            cy.wait('@getDataPerformance').then(xhr => {
                const dataTable = xhr.response.body.data;

                if (dataTable && Object.values(dataTable).length) {
                    this.testHeaderDataTable(dataTable.header);

                    this.testBodyDataTable(dataTable.body);

                    this.testCloneDataflow();

                    cy.wait(3000);

                    this.testChangeName();

                    this.testDeleteDataflow();

                    // this.checkShowRows();
                } else {
                    cy.contains('No dataflow').should('be.visible');
                }
            });
        });
    }
}

export default TableDataflow;