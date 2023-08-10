const ELEMENTS = {
    CREATE_REPORT: '[class*=thumbnail-block] [class*=create-report]',
    CREATE_REPORT_MODAL: '.modal-dialog .modal-content',
    REPORT_BLOCK: '.block-right-content',
    SEARCH_INPUT: '.modal-dialog .modal-content [class*=input-search] input',
    CREATE_BTN: '[class*=btn-green]'
};

class CreateReport {
    constructor() {

    }

    getCreateReportEl() {
        return cy.get(ELEMENTS.CREATE_REPORT);
    }

    getSearchInputEl() {
        return cy.get(ELEMENTS.SEARCH_INPUT);
    }

    getCreateReportModal() {
        return cy.get(ELEMENTS.CREATE_REPORT_MODAL);
    }

    getCreateButtonEl() {
        return cy.get(ELEMENTS.CREATE_BTN).contains('Create report');
    }

    /**
   * Method to create new report
   * @param {string} dataSourceId - name of data source you want to create
   */
    createNewReport(dataSourceId = '') {
        cy.getCreateReportEl().should('be.visible').click();

        if (dataSourceId !== '') {
            this.getSearchInputEl().should('be.visible').type(dataSourceId);

            this.getCreateReportModal()
                .should('be.visible')
                .find(ELEMENTS.REPORT_BLOCK)
                .contains(dataSourceId)
                .click({force: true});

            this.getCreateButtonEl().click();
        }
    }
}

export default CreateReport;