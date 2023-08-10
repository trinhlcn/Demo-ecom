const DROPDOWN_FILTER = '[class*=dropdown-filter]';
const DROPDOWN_TOGGLE = '[class*=dropdown-toggle]';
const DROPDOWN_ITEM = '[class*=dropdown-item]';
const BLOCK_LEFT_FILTER = '[class*=block-left-filter]';
const SCROLLBAR = '[class*=scrollbar]';
const INNER_ROW = '[class*=inner-row]';
const INNER_NAME = '[class*=inner-name]';
const POPOVER_CONTENT = '[class*=popover-content]';
const FOOTER = '[class*=footer]';
const PAGE_FILTER_V2 = '[class*=page-filter-v2]';
const SELECT_DROPDOWN = '[class*=select-dropdown]';
const ITEM_FILTER = '[class*=item-filter]';
const SELECT_SEARCH = '[class*=select-search]';
const POPOVER_INNER = '[class*=popover-inner]';
const POPOVER_FILTER = '[class*=popover-filter]';
const FROM_CONTROL = '[class*=form-control]';
const BODY = '[class*=body]';
const BLOCK_COL = '[class*=block-col]';
const TEXT_RIGHT = '[class*=text-right]';
const BTN_GREEN = '[class*=btn-green]';
const BTN_PEN = '[class*=btn-pen]';
const BLOCK_NEW_FILTER = '[class*=block-new-filter]';
const FILTER_BAR = '[class*=filter-bar]';
const BTN_CLOSE = '[class*=btn-close]';
const DROPDOWN_MENU = '[class*=dropdown-menu]';

class Filter {
    constructor (option) {
        const {position = 0} = option;

        this._position = position;
    }

    getButtonFilter() {
        return cy.get(`${FILTER_BAR} ${DROPDOWN_FILTER} ${DROPDOWN_TOGGLE}`);
    }

    getRowToggleFilter() {
        return cy.get(`${FILTER_BAR} ${DROPDOWN_FILTER} ${DROPDOWN_TOGGLE} ${DROPDOWN_ITEM}`).find('span').eq(this._position);
    }

    getRowNoSavedFilter() {
        return cy.contains('No saved filter');
    }

    getContentCreateFilter() {
        return cy.contains('Create filter');
    }
    
    getFilterMatchAny(data) {
        if (data && data.length > 0) {
            return data.map((item) => {
                if (item.operator[0].name === 'matches any') {
                    return cy.contains(item.metricName);
                }
            }); 
        }
    }

    getFilterContains(data) {
        if (data && data.length > 0) {
            return data.map((item) => {
                if (item.operator[0].name === 'contains') {
                    return cy.contains(item.metricName);
                }
            }); 
        }
    }

    getButtonCloseFilter() {
        return cy.get(`${PAGE_FILTER_V2} ${BTN_CLOSE}`);
    }

    getButtonSaveFilter() {
        return cy.get(`${PAGE_FILTER_V2} ${BTN_PEN}`);
    }

    inputFilter(value) {
        return cy.get(SELECT_SEARCH).type(value);
    }

    inputFromFilter(value) {
        return cy.get(`${POPOVER_FILTER} ${FROM_CONTROL}`).type(value);
    }

    buttonModalApply() {
        return cy.get('.modal-footer .btn-green');
    }

    removeFilterSaved() {
        // cy.get(`${DROPDOWN_FILTER} ${DROPDOWN_TOGGLE} ${DROPDOWN_ITEM}`).find('button').eq(this._position).click();
        cy.contains('Remove').eq(this._position).click();
        cy.get('.modal-footer .btn-green').click();
        cy.get('.modal-footer .btn-default').click();
    }

    removeFilter(position = 0) {
        cy.contains('Remove').eq(position).click();
        cy.get('.modal-content .modal-footer .btn-green').click();
        cy.contains('Close');
    }

    clickFilterDetailMatchAny(data) {
        if (data && data.length > 0) {
            cy.get(`${BLOCK_LEFT_FILTER} ${SCROLLBAR} ${INNER_ROW} ${INNER_NAME}`).first().then(el => {
                cy.get(`${BLOCK_LEFT_FILTER} ${SCROLLBAR} ${INNER_ROW} button`).first().click();
                cy.get(`${POPOVER_CONTENT} ${FOOTER} button`).first().click();
    
                cy.get(`${PAGE_FILTER_V2} ${SELECT_DROPDOWN} strong`).first().should('have.text', el.text() );
                cy.get(`${PAGE_FILTER_V2} ${SELECT_DROPDOWN} ${ITEM_FILTER} a`).click();
            });
            
        }
    }

    clickFilterDetailContains() {
        cy.get(`${POPOVER_INNER} ${BODY} ${BLOCK_COL} input`).type('test');
        cy.get(`${POPOVER_INNER} ${BODY} ${TEXT_RIGHT} ${BTN_GREEN}:visible`).click();

        cy.get(`${PAGE_FILTER_V2} ${SELECT_DROPDOWN} strong`).first().should('have.text', 'test');
        cy.get(`${PAGE_FILTER_V2} ${SELECT_DROPDOWN} ${ITEM_FILTER} a`).click();
    }   

    saveNewFilter() {
        this.getButtonSaveFilter().click();
        cy.get(`${POPOVER_CONTENT} ${BODY} ${BLOCK_NEW_FILTER} input`).type('test' + Math.random(0,1));
        cy.get(`${POPOVER_INNER} ${TEXT_RIGHT} button`).first().click();
    }

    closeFilter() {
        this.getButtonCloseFilter().click();
    }

    testAll() {
        it('Test filter', () => {
            cy.route('GET', '/v3.1/api/filter/**').as('getSavedFilter');
            cy.route('GET', '/v3.1/api/workflow/performance/**').as('getDataPerformance');
            
            this.getButtonFilter().click();

            cy.wait('@getSavedFilter').then(xhr => {
                const listFilter = xhr.response.body.data.filters;

                if (listFilter.length) {
                    cy.get(`${FILTER_BAR} ${DROPDOWN_FILTER} ${DROPDOWN_MENU} div`).eq(0).should('have.length', listFilter.length);
                } else {
                    this.getRowNoSavedFilter().should('be.visible');
                }
            });

            this.getContentCreateFilter().click();

            this.saveNewFilter();

            this.getButtonFilter().first().click();

            cy.wait(1000);

            this.removeFilterSaved();

            this.closeFilter();
        });
    }
}

export default Filter;