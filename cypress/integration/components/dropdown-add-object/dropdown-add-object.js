const DROPDOWN_MENU = '.dropdown .dropdown-menu';
const INPUT_SEARCH = DROPDOWN_MENU + ' .input-search';
const INPUT_TEXT = INPUT_SEARCH + ' input[type="text"]';
const BADGE = DROPDOWN_MENU + ' .badge';
const INNER_ROW = DROPDOWN_MENU + ' .inner-row';

const P_POPOVER_BODY = '.popover-inner .popover-body';
const P_INPUT_SEARCH = P_POPOVER_BODY + ' .input-search';
const P_INPUT_TEXT = P_INPUT_SEARCH + ' input[type="text"]';
const P_BADGE = P_POPOVER_BODY + ' .badge';
const P_INNER_ROW = P_POPOVER_BODY + ' .inner-row';

const SCROLL = '.scrollbar-dynamic';

export default class DropdownAddObject {
    constructor(element, type, classType = 'dropdown') {
        this._element = element;
        this._type = type;
        this._classType  = classType;
    }
    /**
     * Check Dropdown add source is visible
     * @param {Object} element - The element is you want to check
     * @param {string} element.value - Value can be id, class, text, v.v 
     * @param {string | number} element.type - Type of value
     */

    openDropdown() {
        if (this._element && this._type) {
            this._type === 'text' ? cy.contains(this._element).eq(0).should('be.visible').click() :
                cy.get(this._element).should('be.visible').click();
        }
       
        cy.get(this._classType === 'popover' ? P_POPOVER_BODY : DROPDOWN_MENU).should('be.visible');
        cy.get(this._classType === 'popover' ? P_INPUT_SEARCH : INPUT_SEARCH).should('be.visible');
        
    }

    closeDropdown() {
        if (this._element && this._type) {
            this._type === 'text' ? cy.contains(this._element).eq(0).should('be.visible').click() :
                cy.get(this._element).should('be.visible').click();
        }
    }

    /**
     * Function to type input search
     * @param {string} value - value of search
     */

    searchDataSource(value) {
        if (value) {
            return cy.get(this._classType === 'popover' ? P_INPUT_TEXT : INPUT_TEXT).type(value);
        }
    }

    getInputSearch() {
        return cy.get(this._classType === 'popover' ? P_INPUT_SEARCH : INPUT_SEARCH);
    }

    clickDropdownAdd() {
        if (this._element && this._type) {
            this._type === 'text' ? cy.contains(this._element).eq(0).should('be.visible').click() :
                cy.get(this._element).should('be.visible').click();
        }
    }

    /**
     * function get data in row
     * @param {number} position 
     */
    getDataItem(position) {
        return cy.get(this._classType === 'popover' ?  '.popover-inner .popover-body .inner-row .inner-name' : INNER_ROW).eq(position);
    }

    /**
     * function get data from api
     * @param {string} apiName 
     */
    getDataFromApi(apiName) {
        cy.wait(apiName).then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                let {dataSources = ''} = xhr.response.body.data;

                cy.wrap(dataSources).as('data');
            }
        });
        return cy.get('@data');
    }

    /**
     * Function to check data source
     * @param {array} data 
     * @param {number} position
     */
    checkDataSource(data, position) {
        if (data && Array.isArray(data)) {
            if (data.length > 0) {
                if (this._classType === 'popover') {
                    cy.get('.popover-inner .popover-body .badge').invoke('text').then(value => {
                        expect(+value).equal(data.length);
                        cy.get(this._classType ? P_INNER_ROW : INNER_ROW).then(items => {
                            expect(items.length).to.be.greaterThan(0);
                        });
                    });
                } else {
                    cy.get(this._classType === 'popover' ? P_BADGE : BADGE).invoke('text').then(value => {
                        expect(+value).equal(data.length);
                        cy.get(this._classType === 'popover' ? P_INNER_ROW : INNER_ROW).then(items => {
                            expect(items.length).to.be.greaterThan(0);
                        });
                    });
                }
                
                data.map((item, index) => {
                    if (index === position) {
                        let {icon} = item.connector;
                        let {dataSourceName} = item;
                        let {dataSourceId} = item;

                        cy.get('.inner-row').eq(position);
                        if (icon) {
                            if (item.status !== 1) {
                                cy.get('.inner-row').eq(position).find('.icon-warning');
                            } else if (item.status === 1) {
                                cy.get('.inner-row').eq(position).find(`.${icon}`);
                            }
                        } 
                        cy.get('.inner-name').eq(position).then(text => {expect(text.text() === dataSourceName).equal(true) });
                        cy.get('.inner-number').eq(position).then(text => {expect(text.text() === dataSourceId).equal(true) });
                    }
                        
                });
            } else {
                
                cy.get(this._classType === 'popover' ? P_BADGE : BADGE).invoke('text').then(text => {
                    expect(text.toLowerCase()).equal('no data');
                });
                // cy.get(INNER_ROW).should('not.be.visible');
            }
        }   
    }
    
    /**
     * Function to create report or template from data source
     * @param {string | number} source - is a number order of source you want to create 
     */

    createDataSource(source) {
        if (source) {
            if (typeof source === 'number' && source.length > 0) {
                cy.get(this._classType === 'popover' ? P_INNER_ROW : INNER_ROW).eq(source).click({force: true});
            } else {
                cy.get('.title .badge-default').then(text =>{
                    const value = text.text();
                    expect(value.includes('No Data')).equal(true)

                })
            }
        }
    }

    createFromDataSource(source = 0) {
        this.clickDropdownAdd();

        if (typeof source === 'number') {
            cy.get(this._classType === 'popover' ? P_INNER_ROW : INNER_ROW).eq(source).click({force: true});
        } else {
            cy.get(source).click();
        }
    }

    /**
     * Function to clear search input
     */
    clearSearch() {
        return cy.get(this._classType === 'popover' ? P_INPUT_TEXT : INPUT_TEXT).clear();
    }

    /**
     * 
     * @param {string | number} position 
     */
    scrollListDataSource(position) {
        if (typeof position === 'object') {
            cy.get(SCROLL).scrollTo(position.x, position.y);
        } else { 
            cy.get(SCROLL).scrollTo(position);
        }
    }

    /**
     * Function to test all dropdown dataSource
     * @param {object} props
     * @param {string} props.valueSearch - Place the value to input search
     * @param {string} props.callback - Place the value to input search
     * @param {string | number | 'topLeft' | 'top' | 'topRight' | 'left' | 'center'} props.source - Data source you want to click
     * @param {'topLeft' | 'top' | 'topRight' | 'left' | 'center' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight'} props.position - Position you want to scroll
     */
    testAll(props) {
        const {
            valueSearch = '',
            source = 1,
            api = ''
        } = props;

        it('Test dropdown add object', () => {
            cy.route('GET', '/v3.1/api/datasource/**').as('getDataSource');
            this.openDropdown();
            cy.wait('@getDataSource');
            this.searchDataSource(valueSearch);
            cy.wait('@getDataSource').then(xhr => {
                const {dataSources = {}} = xhr.response.body.data;
                const isMatch = dataSources.every(item => item.dataSourceName.toLowerCase().includes(valueSearch));

                expect(isMatch, 'Check data is valid with api').equal(true);
                this.checkDataSource(dataSources);
            });
            this.clearSearch();
            cy.wait('@getDataSource');
        });
        it('Test create object from data source', () => {
            cy.route('POST', api).as('createObject');
            this.createDataSource(source);
            cy.wait('@createObject').then(xhr => {
                const {body = {}} = xhr.response;

                expect(body.code).equal(200);
                cy.url().should('include', `${body.data.reportId || ''}/edit`);
            });
        });
    }
}