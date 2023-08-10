/// <reference types="Cypress" />
import moment from 'moment';

export default class Filter {
    constructor(element, type) {
        this._element = element;
        this._type = type;
    }

    /**
     * Check Dropdown add source is visible
     * @param {Object} element - The element is you want to check
     * @param {string} element.value - Value can be id, class, text, v.v 
     * @param {string | number} element.type - Type of value
     */

    isVisible() {
        return cy.get('.campaign-filter').should('be.visible');
    }

    openDropdownFilter(eqNumber) {
        if (this._element && this._type) {
            this._type === 'text' 
                ? cy.contains(this._element).eq(eqNumber).click({force: true}) 
                : cy.get(this._element).click();
        }
    }

    openFilter(eqNumber) {
        if (this._element && this._type) {
            this._type === 'text' 
                ? cy.contains(this._element).eq(eqNumber).click({force: true}) 
                : cy.get(this._element).click();
            cy.contains('Create filter').click({force: true});
        }
    }

    getDropdown(slot) {
        return cy.get(`.inner-row .${slot} .dropdown .btn-default`);
    }

    getItemDropdown(slot, position) {
        return cy.get(`.inner-row .${slot} .dropdown .dropdown-menu .dropdown-item`).eq(position);
    }

    openDropdown(slot,dataFilter,position) {
        this.getDropdown(slot).click({force: true});
        this.getItemDropdown(slot, position).click({force: true}).then(item => {
            const label = dataFilter.find(data => data.label === item.text());

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(3000);
            cy.wrap(label).as('label');
        });
        return cy.get('@label');
    }

    onClickApply() {
        return cy.get('.bottom-filter .group-button .btn-green').eq(0).click();
    }

    runApi() {
        cy.server();
        cy.route('GET','/api/report/**').as('getTemplate');
        cy.wait('@getTemplate').then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                let body = xhr.response.body.data.body;

                cy.wrap(body).as('data');
            }
        });
        return cy.get('@data');
    }

    getDataApi(nameApi) {
        cy.wait(`${nameApi}`).then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                let body = xhr.response.body.data.body;

                cy.wrap(body).as('value');
            }
        });
        return cy.get('@value');
    }

    /**
     * function add content into input filter
     * @param {string} value 
     */
    getInputFilter(value) {
        if (value) {
            return cy.get('.form-control').type(value);
        }
    }

    getCheckSaveFilter() {
        return cy.get('.input-checkbox .checkbox-multi [type="checkbox"]');
    }

    getInputSaveFilter() {
        return cy.get('.input-checkbox .input-name [type="text"]');
    }

    onClickClose() {
        cy.get('.top-filter .btn-close .icon-close').eq(0).click({force: true});
    }

    onClickContains(value) {
        cy.contains(value).click();
    }

    onRemoveFilter(apiName) {
        cy.wait(apiName).then(xhr=>{
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data && xhr.response.body.data.saved_filter) {
                const dataSaveFilter = xhr.response.body.data.saved_filter;

                dataSaveFilter.map((item, index)=>{
                    if (item.filter_name === 'test111') {
                        cy.get('.dropdown-menu .dropdown-item').eq(index).contains('Remove').click();
                        this.onClickContains('OK');
                        this.onClickContains('OK');
                        this.onClickContains('Close');
                    }
                });
            }
        });
    }

    testDataSource(nameLabel,position, label) {
        cy.route('GET','/api/report/**').as('getTemplate');
        
        if (nameLabel === 'after') {
            cy.get('.dropdown-date-picker .form-control').type('04/08/2020');
        } else if (nameLabel === 'contains') {
            cy.get('.form-control').type('report');
        }
        this.getDropdown('two').click();
        this.getItemDropdown('two', position).click().then( row => {
            this.onClickApply();
            cy.wait('@getTemplate').then(xhr => {
                if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                    let {body = ''} = xhr.response.body.data;
                    const nameValue = label.name;

                    if (nameLabel === 'after') {
                        body.map(data => {
                            let dateData = moment(data[nameValue]).format('L');
                            let newDateInput = '08/04/2020';

                            if (row.text() === 'after') {
                                expect(dateData > newDateInput).equal(true);
                            } else if (row.text() === 'between') {
                                expect(dateData === newDateInput).equal(true);    
                            } else if (row.text() === 'before') {
                                expect(dateData <= newDateInput).equal(true);
                            }
                        });
                    } else if (nameLabel === 'contains' && nameValue === 'report_name') {
                        body.map(data => {
                            if (row.text() === 'does not contain') {
                                expect(data[nameValue]).not.to.have.string('Report');
                            } else {
                                expect(data[nameValue]).to.have.string('Report');
                            }
                        });
                    }
                }
            });
        });
    }   
}
