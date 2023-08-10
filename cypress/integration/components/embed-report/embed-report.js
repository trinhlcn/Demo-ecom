/// <reference types="Cypress" />

const SCROLLBAR_CUSTOM = '[class*=scrollbar-custom]';
const DATA_SOURCE_ITEM = '[class*=data-source-item]';
const BOX_BUTTON = '[class*=box-button]';
const BTN_GREEN = '[class*=btn-green]';
const CREATE_REPORT = '[class*=create-report]';
const MODAL_CONTENT = '[class*=modal-content]';
const SWITCH = '[class*=switch]';
const SWITCH_CHECKED = '[class*=switch-checked]';
const FILTER_EXPRESSION = '[class*=filter-expression]';
const CONTENT_FILTER_TYPE = '[class*=content-filter-type]';
const CONTENT_ICON = '[class*=content-icon]';
const FILTER_TYPE = '[class*=filter-type]';
const FILTER_ITEM = '[class*=filter-item]';
const CONTENT_ERROR = '[class*=content-error]';
const TOOBAR_RIGHT = '[class*=toolbar-right]';
const GROUP_ICON = '[class*=group-icon]';

export default class EmbedReport {
    constructor() {
    }

    getDataSourceItem() {
        return cy.get(`${SCROLLBAR_CUSTOM} ${DATA_SOURCE_ITEM}`);
    }

    getChildElementCountElement(element, length) {
        cy.get(element).then(($ele) => {
            expect($ele[0].childElementCount).equal(length);
        });
    }

    async getTextElement(element, index, elementTwo) {
        let ele = await cy.get(element).eq(index).find(elementTwo);

        return ele[1].innerText;
    }

    getContentIcon() {
        return cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${CONTENT_ICON}`);
    }

    getContentError() {
        return cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${FILTER_TYPE} ${CONTENT_ERROR}`);
    }

    openModalEmbed() {
        cy.contains('Share').click();

        cy.contains('Embed Report').click();
    }

    getButtonSave() {
        return cy.get('.modal-footer .btn-green');
    }

    testAll() {
        let type = '';

        it('Redirect report detail', () => {
            cy.route('GET', '/v3.1/api/datasource/**').as('getDatasource');

            cy.wait('@getDatasource').then(xhr => {
                const datasources = xhr.response.body.data.dataSources;

                if (datasources.length) {
                    cy.get(CREATE_REPORT).click();

                    this.getDataSourceItem().eq(0).click();

                    cy.get(`${MODAL_CONTENT} ${BOX_BUTTON} ${BTN_GREEN}`).click();
                }
            });
        });

        it('Click select embed report', () => {
            cy.wait(3000);

            cy.get(`${TOOBAR_RIGHT} ${GROUP_ICON} ${BTN_GREEN}`).click();

            this.openModalEmbed();
        });

        it('Test filter embed', () => {
            cy.get(`${SWITCH} button`).click();

            cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`).should('be.visible');

            cy.contains('Add filter').click();

            this.getChildElementCountElement(CONTENT_FILTER_TYPE, 3);

            this.getContentIcon().should('be.visible');

            this.getContentIcon().eq(0).click();

            this.getChildElementCountElement(CONTENT_FILTER_TYPE, 2);

        });

        it('Test type master filter', () => {
            cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${FILTER_TYPE} ${FILTER_ITEM} button`).eq(0).click();

            cy.contains('Master filter').click();

            this.getChildElementCountElement(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`, 4);

            // type = await this.getTextElement(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${FILTER_TYPE}`, 0, `${FILTER_ITEM} button`)
        });

        it('Test save embed master filter', () => {
            this.getButtonSave().click();

            this.getContentError().should('be.visible');

            cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${FILTER_TYPE} input`).eq(1).type('test');

            this.getButtonSave().click();

            this.openModalEmbed();

            this.getChildElementCountElement(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`, 4);
        });

        it('Test type master daterange', () => {
            cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION} ${FILTER_TYPE} ${FILTER_ITEM} button`).eq(0).click();

            cy.contains('Master daterange').click();

            this.getChildElementCountElement(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`, 2);
        });

        it('Test save embed master daterange', () => {
            this.getButtonSave().click();

            this.openModalEmbed();

            this.getChildElementCountElement(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`, 2);
        });

        it('Test only have one type maste daterange in filter', () => {
            cy.contains('Add filter').click();

            cy.contains('Select filter type').click();

            cy.get(`${CONTENT_FILTER_TYPE} ${FILTER_EXPRESSION}`).eq(1).find(`${FILTER_TYPE} ${FILTER_ITEM} .dropdown-menu button`).eq(1).should('have.css', 'display', 'none');
        });
    }
}