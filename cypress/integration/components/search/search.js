/// <reference types="Cypress" />

const SEARCH_INPUT = '.input-search .search-input';
const DROP_DOWN_MENU = 'div.dropdown div.dropdown-menu';
const ICON_FILTER = '.icon-filter-grey ';
const VALUE_FILTER = '.dropdown-menu div span span';
const DROP_DOWN_ITEM = '.block-inner-content .filter-bar .dropdown-menu .position-relative';

class Search {
    
    /**
     * 
     * @param {object} option - You can pass option of search to query 
     * @param {number} option.position - You can pass option of search to query 
     */
    constructor(option) {   
        const {position = 0} = option;

        this._position = position;
        this._search = '';
    }

    /**
     * Function to get element search
     */
    getSearchInput() {
        return cy.get(SEARCH_INPUT).eq(this._position);
    }

    /**
     * Function to get Item search
     * @param {number} position - position of item search 
     */
    getItemSearch(position = 0) {
        if (typeof position === 'number') {
            return cy.get(DROP_DOWN_ITEM).eq(position);
        }

        return null;
    }

    /**
     * Function to get element filter
     * @param {*} position 
     */
    getFilterValue(position = 0) {
        return cy.get(VALUE_FILTER).eq(position);
    }

    /**
     * Function to get dropdown menu search
     */
    getDropdownMenu() {
        return cy.get(DROP_DOWN_MENU);
    }

    /**
     * Function to check search isVisible or not
     */
    isVisible() {
        cy.get(SEARCH_INPUT).eq(this._position).should('be.visible');
    }

    focus() {
        cy.get(SEARCH_INPUT).eq(this._position).focus();
    }

    /**
     * Function to input value search
     * @param {string} value - value of search you want to input
     * @param {Array} data - data of search you want 
     */
    type(value) {
        this._search = value;
        cy.get(SEARCH_INPUT).eq(this._position).type(value);

        if (value !== '') {
            cy.get(DROP_DOWN_MENU).should('be.visible');

            cy.get(ICON_FILTER).should('be.visible');

            cy.get(VALUE_FILTER).should('have.text', value);
            
        }
    }

    /**
     * Function to check data
     * @param {array} data 
     */
    checkData(data) {
        if (data && data.length > 0) {
            cy.get(DROP_DOWN_ITEM).then(res => {
                expect(res.length).greaterThan(0);
            });
            
            cy.get(DROP_DOWN_ITEM).then(items => {
                if (items.length > 0) {
                    let isValid = true;
                
                    for (let item of items) {

                        if (!item.innerText.toLowerCase().includes(this._search.toLowerCase())) {
                            isValid = false;

                            break;
                        }
                    }

                    expect(isValid, 'Check data response').equal(true);
                }
                
            });

            let isValid = data.every(item => item.value.toLowerCase().includes(this._search));

            expect(isValid).equal(true);
        } else {
            cy.get(DROP_DOWN_ITEM).should('have.length', 1)
        }
    }

}

export default Search;