class RemoveButton {

    /**
     * 
     * @param {object} element - element you want to cy get 
     * @param {string} element.selector - element you want to cy get 
     * @param {"text" | "selector"} element.type - type of element 
     */
    constructor(element) {
        const {selector = '', type = ''} = element;

        this._selector = selector;
        this._type = type;
    }

    /**
     * Function to test remove button is disable or not
     */
    isDisabled() {
        this._type === 'text' ? 
            cy.contains(this._selector).should('be.visible').should('have.class', 'disabled') 
            : cy.get(this._selector).should('be.visible').should('have.class', 'disabled');
    }

    /**
     * Function to test remove button is available or not
     */
    isAvailable() {
        this._type === 'text' ? 
            cy.contains(this._selector).should('be.visible').should('not.have.class', 'disabled') 
            : cy.get(this._selector).should('be.visible').should('not.have.class', 'disabled');
    }

    /**
     * Function to click to remove button 
     */
    clickRemove() {
        this._type === 'text' ? 
            cy.contains(this._selector).should('be.visible').click() 
            : cy.get(this._selector).should('be.visible').eq(0).contains('Remove').click();

        cy.get('.modal-dialog').should('be.visible');

        cy.get('.modal-dialog .btn-green').should('be.visible');
        
        cy.get('.modal-dialog .btn-default').should('be.visible');
    }

    /**
     * Function to confirm remove
     */
    confirmRemove() {
        cy.get('.modal-dialog .btn-green').should('be.visible').click();
    }

    /**
     * Function to handle cancel remove 
     */
    cancelRemove() {
        cy.get('.modal-dialog .btn-default').should('be.visible').click();
    }
}

export default RemoveButton;