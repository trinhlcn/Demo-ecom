/// <reference types="Cypress" />

const DES = '[class*=des]';
const ANCHOR_TEMPLATE = '[class*=anchor-template]';
const OVERPLAY_ICON_PAID = '[class*=overplay-icon-paid]';
const ICON_ANTS_LAPTOP = '[class*=icon-ants-laptop]';
const ICON_ANTS_PHONE = '[class*=icon-ants-phone]';
const LIST_ICON = '[class*=list-icon]';
const FOOTER_RIGHT = '[class*=footer-right]';
const WRAP_TEXT = '[class*=wrap-text]';
const CREATE_REPORT = '[class*=create-report]';
const MODAL_TITLE = '[class*=modal-title]';
const SCROLLBAR_CUSTOM = '[class*=scrollbar-custom]';
const DATA_SOURCE_ITEM = '[class*=data-source-item]';
const BOX_ICON = '[class*=box-icon]';
const BLOCK_RIGHT_CONTENT = '[class*=block-right-content]';
const INNER_NAME = '[class*=inner-name]';
const INNER_NUMBER = '[class*=inner-number]';
const BOX_BUTTON = '[class*=box-button]';
const BTN_GREEN = '[class*=btn-green]';
const BTN_WHITE = '[class*=btn-white]';
const BLOCK_LEFT = '[class*=block-left]';
const HEAD = '[class*=head]'
const INPUT_SEARCH = '[class*=input-search]'
const RADIO_MULTI = '[class*=radio-multi]'
const BODY = '[class*=body]'
const TEMPLATE_COVER_WRAPPER = '[class*=template-cover-wrapper]'
const CONTENT_BUTTON = '[class*=content-button]'
const SINGLE_ROW = '[class*=single-row]'
const BTN_GROUP = '[class*=btn-group]'
const BTN_CLOSE = '[class*=btn-close]'
const MORE_TEMPLATE = '[class*=more-template]'
const DROPDOWN_CONNECTORS = '[class*=dropdown-connectors]'
const DROPDOWN_TOGGLE = '[class*=dropdown-toggle]'
const DROPDOWN_MENU = '[class*=dropdown-menu]'

export default class TemplateReport {
    constructor(type) {
        this._type = type;
        this.deviceLaptop = 1;
        this.devicePhone = 2;
    }

    clickMoreTemplate() {
        cy.get(ANCHOR_TEMPLATE).click();
    }

    /**
     * Function to check icon support
     * @param {boolean} isPremium 
     */

    checkPremium(isPremium) {
        isPremium && cy.get(OVERPLAY_ICON_PAID).should('be.visible');
    }

    /**
     * Function to check icon support
     * @param {number} deviceTypeId 
     */

    checkDeviceType(deviceTypeId) {
        if (deviceTypeId) {
            switch (deviceTypeId) {
                case this.deviceLaptop: {
                    cy.get(ICON_ANTS_LAPTOP).should('be.visible');
                    break;
                }
                case this.devicePhone: {
                    cy.get(ICON_ANTS_PHONE).should('be.visible');
                    break;
                }
            }
        }
    }

    /**
     * Function to check name icon
     * @param {string} name 
     */

    checkNameIcon(name) {
        return name.includes('icon') ? `.${name}` : `.icon-${name}`;
    }

    /**
     * Function to check icon support
     * @param {array} list 
     */

    listIconInvisible(list) {
        if (list && list.length) {
            list.map((item) => {
                cy.get(`${WRAP_TEXT}` `${LIST_ICON}` `${this.checkNameIcon(item)}`).should('be.visible');
            });
        }
    }

    /**
     * Function to check icon support
     * @param {array} supports 
     * @param {number} index 
     */

    checkIconSupport(supports, index) {
        let eleFooters = document.getElementsByClassName('width-footer-right-icon');
        let wrapCard = document.getElementsByClassName('width-thumbnail-report-card');
        let isOverWrap = false;

        const widthEleFooters = eleFooters && eleFooters[index] && eleFooters[index].clientWidth ? eleFooters[index].clientWidth : 0;
        const WidthWrapCard = wrapCard && wrapCard[index] && wrapCard[index].clientWidth ? wrapCard[index].clientWidth : 0;

        if (widthEleFooters && WidthWrapCard && widthEleFooters > (WidthWrapCard / 2)) {
            isOverWrap = true;
        }

        if (supports && supports.length) {
            if (supports.length > 2) {
                cy.get(`${FOOTER_RIGHT}` `${WRAP_TEXT}`).should('have.text', `+${supports.length - (isOverWrap ? 1 : 2)}`);
                this.listIconInvisible(supports.slice(isOverWrap ? 1 : 2));

                cy.get(`${FOOTER_RIGHT}` `${this.checkNameIcon(supports[0])}`).should('be.visible');
                !isOverWrap && cy.get(`${FOOTER_RIGHT}` `${this.checkNameIcon(supports[1])}`).should('be.visible');

            } else {
                supports.map((item) => {
                    cy.get(`${FOOTER_RIGHT}` `${this.checkNameIcon(item)}`).should('be.visible');
                });
            }
        }
    }

    /**
     * Function to check template
     * @param {array} data 
     */

    showTemplate(data) {
        if (data && data.length) {
            const { description, isPremium, deviceTypeId, supports } = data[0];

            cy.get(DES).eq(0).should('have.text', description);

            this.checkPremium(isPremium);

            this.checkDeviceType(deviceTypeId);

            this.checkIconSupport(supports, 0);
        }
    }

    getDataSourceItem() {
        return cy.get(`${SCROLLBAR_CUSTOM} ${DATA_SOURCE_ITEM}`);
    }

    checkDataSourceName(index) {
        return this.getDataSourceItem().eq(index).find(`${BLOCK_RIGHT_CONTENT} ${INNER_NAME}`);
    }

    checkDataSourceId(index) {
        return this.getDataSourceItem().eq(index).find(`${BLOCK_RIGHT_CONTENT} ${INNER_NUMBER}`);
    }

    checkIconDataSource(index) {
        return this.getDataSourceItem().eq(index).find(`${BOX_ICON} i`);
    }

    cancelModalCreateReport() {
        return cy.contains('Cancel');
    }

    checkDataCreateReport(data) {
        if (data.length) {
            const item = data[0];

            if (item && item.connector && item.connector.icon) {
                this.checkIconDataSource(0).should('have.class', item.connector.icon);
            }

            this.checkDataSourceName(0).should('have.text', item.dataSourceName);

            this.checkDataSourceId(0).should('have.text', item.dataSourceId + '');
        }
    }

    checkTotalDataSource(total) {
        if (total) {
            cy.get(`${BLOCK_LEFT} ${HEAD} span`).should('have.text', total)
        }
    }

    searchDataSource() {
        cy.get(`${BLOCK_LEFT} ${INPUT_SEARCH} input`).type('test')
    }

    changeDeviceType() {
        cy.get(`${BODY} .d-flex ${RADIO_MULTI}`).eq(1).find('label').click();

        cy.get(`${BODY} .d-flex ${RADIO_MULTI}`).eq(1).find('label .icon-radio').should('have.class', 'active')
    }

    checkUseTemplate() {
        cy.get(`${TEMPLATE_COVER_WRAPPER}`).eq(0).find(`${BOX_BUTTON} ${CONTENT_BUTTON} ${BTN_GREEN}`).click({force: true})

        cy.get(`${SINGLE_ROW}`).should('be.visible')

        cy.contains('Cancel').click()
    }

    checkPreviewTemplate(data) {
        cy.get(`${TEMPLATE_COVER_WRAPPER}`).eq(0).find(`${BOX_BUTTON} ${CONTENT_BUTTON} ${BTN_WHITE}`).click({force: true})

        if (data) {
            cy.contains(data.description).should('be.visible')
        }

        cy.get(`${MODAL_TITLE} ${BTN_GROUP} ${BTN_CLOSE}`).click()
    }

    checkConnector() {
        cy.get(`${MORE_TEMPLATE} ${DROPDOWN_CONNECTORS} ${DROPDOWN_TOGGLE}`).eq(0).click();

        cy.get(`${MORE_TEMPLATE} ${DROPDOWN_CONNECTORS}`).eq(0).find(`${DROPDOWN_MENU} button`).eq(0).click()
    }   

    checkDeviceType() {
        cy.get(`${MORE_TEMPLATE} ${DROPDOWN_CONNECTORS} ${DROPDOWN_TOGGLE}`).eq(1).click();

        cy.get(`${MORE_TEMPLATE} ${DROPDOWN_CONNECTORS}`).eq(1).find(`${DROPDOWN_MENU} button`).eq(1).click()
    }

    testAll() {
        it('Test show template report', () => {
            let dataTemplate = [];
            let datasources = [];
            let total = 0

            cy.route('GET', '/v3.1/api/report/**').as('getTemplate');
            cy.route('GET', '/v3.1/api/datasource/**').as('getDatasource');

            cy.wait('@getDatasource').then(xhr => {
                datasources = xhr.response.body.data.dataSources;
                total = xhr.response.body.data.total;

                if (datasources.length) {
                    cy.get(CREATE_REPORT).click();

                    this.changeDeviceType()

                    this.checkDataCreateReport(datasources);

                    this.checkTotalDataSource(total)

                    this.getDataSourceItem().eq(0).click();

                    cy.get(`${BOX_BUTTON} ${BTN_GREEN}`).should('not.have.class', 'btn-disable');

                    this.searchDataSource();

                    cy.wait('@getDatasource').then(xhr => {
                        datasources = xhr.response.body.data.dataSources;
                        total = xhr.response.body.data.total;

                        this.checkDataCreateReport(datasources);

                        this.checkTotalDataSource(total)

                    })

                    this.cancelModalCreateReport().click();

                }


            });

            cy.wait('@getTemplate').then(xhr => {
                dataTemplate = xhr.response.body.data.rows;

                if (dataTemplate.length) {

                    this.clickMoreTemplate();

                    this.showTemplate(dataTemplate);

                    // this.checkUseTemplate()

                    // this.checkPreviewTemplate(dataTemplate.length && dataTemplate[0])
                }
            });

            this.checkConnector()
            this.checkDeviceType()
        });
    }
}