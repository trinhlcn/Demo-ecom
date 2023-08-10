/// <reference types="Cypress" />

const WRAP_TABLE = '.wrap-table';
const HEADER_COLUMN = '.table thead tr th';
const BODY_ROW = '.table tbody tr';
const BODY_COLUMN = 'td';
const EDIT_ICON = 'i.icon-edit';
const EDIT_ITEM = '.wrap-table .text-left .box-edit-item';
const INPUT_EDIT = 'div.edit-label input.form-control';
const SAVE_BTN_EDIT = 'div.edit-label button.btn.btn-green';
const CANCEL_BTN_EDIT = 'div.edit-label button.btn.btn-default';
const CHECK_BOX = '.checkbox-multi';
const FOOTER = 'tfoot';
const SIZE_ROWS = 'button.btn-full.dropdown-toggle';

class Table {

    constructor(option) {
        const {position = 0} = option;

        this._position = position;
    }

    getTable() {
        return cy.get(WRAP_TABLE).eq(this._position);
    }

    getBodyRow(position = 0) {
        if (typeof position === 'number') {
            return cy.get(WRAP_TABLE).eq(this._position).find(BODY_ROW).eq(position);
        } 
    }

    getBodyColumn(positionRow = 0, position = 1) {
        if (typeof position === 'number') {
            return cy.get(WRAP_TABLE).eq(this._position).find(BODY_ROW).eq(positionRow).find(BODY_COLUMN).eq(position);
        }
    }

    getBodyColumnByText(text = '') {
        return cy.get(WRAP_TABLE).eq(this._position).contains(text);
    }

    getItemRow(position) {
        return cy.get(EDIT_ITEM).eq(position);
    }

    getEditButton(positionRow = 0, position = 1) {
        return this.getBodyColumn(positionRow, position).find(EDIT_ICON);
    }
    
    getSaveButton(positionRow = 0, position = 1) {
        return this.getBodyColumn(positionRow, position).find(SAVE_BTN_EDIT);
    }

    getCancelButton(positionRow = 0, position = 1) {
        return this.getBodyColumn(positionRow, position).find(CANCEL_BTN_EDIT);
    }
    
    getInputEdit(positionRow = 0, position = 1) {
        return this.getBodyColumn(positionRow, position).find(INPUT_EDIT);
    }

    getCheckBoxBody(positionRow = 0, position = 0) {
        return this.getBodyColumn(positionRow, position).find(CHECK_BOX);
    }

    getSizeRowTable() {
        return this.getTable().find(FOOTER).find(SIZE_ROWS);
    }

    getCheckBoxHeader(position = 0) {
        return this.getTable().find(HEADER_COLUMN).eq(position).get(CHECK_BOX);
    }

    checkHeader(data) {
        const {header = []} = data;

        if (header.length > 0) {
            this.getTable().find(HEADER_COLUMN).then(res => {
                const length = res.length;
                let isValid = true;

                expect(length - 1, 'Check header column is equal column api response').equal(header.length);

                for (let i = 1; i < res.length; i++) {
                    if (res[i].innerText !== header[i - 1].label) {
                        isValid = false;

                        break;
                    }
                }

                expect(isValid, 'Check header is equal api response header').equal(true);
            });
        }

    }

    checkBody(data) {
        const {header = [], body = []} = data;

        if (body.length > 0) {
            this.getBodyRow(0).find(BODY_COLUMN).then(res => {
                const lengthColumns = res.length;
    
                expect(lengthColumns - 1, 'Expect column body is equal header column').equal(header.length);
            });
    
            this.getTable().find(BODY_ROW).then(res => {
                const lengthRows = res.length;
    
                expect(lengthRows, 'Expect row is equal api row').equal(body.length);
            });
        }
    }

    checkEditButton() {
        cy.get(BODY_ROW).then(res => {
            if (res.length > 0) {
                for (let i = 0; i < (res.length > 2 ? 2 : res.length); i++) {
                    this.getEditButton(i).click({force: true});

                    this.getInputEdit(i).should('be.visible').type(Math.floor(Math.random() * 20));

                    this.getCancelButton(i).should('be.visible').click();
                }
            }
        });
    }

    testCheckBox() {
        this.getTable().find(CHECK_BOX).click({multiple: true});
    }

    changeSizeTable(pageSize = 30) {
        return this.getTable().find(FOOTER).find('.dropdown').click({force: true}).contains(pageSize).click({force: true});
    }

    testAll(data) {
        it('Test table', () => {
            if (data.length > 0) {
                this.getTable().should('be.visible');

                this.checkHeader(data);

                this.checkBody(data);

                this.checkEditButton();

            } else {
                cy.contains('No dataflow').should('be.visible');
            }
        });
    }
}

export default Table;