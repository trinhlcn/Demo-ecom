class Pagination {
    constructor() {
        
    }

    isVisible() {
        cy.get('.wrap-table-footer .record-table').should('be.visible');
    }
    
}

export default Pagination;