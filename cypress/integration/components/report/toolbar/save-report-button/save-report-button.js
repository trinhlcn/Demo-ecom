// Constants 
const ELEMENTS = {
    SAVE_REPORT_BTN: '#report-toolbar #save-report-btn'
};

class SaveReportButton {
    constructor() {

    }

    getSaveReportBtn() {
        return cy.get(ELEMENTS.SAVE_REPORT_BTN);
    }

    saveReport() {
        cy.get(ELEMENTS.SAVE_REPORT_BTN).click();
    }
}

export default SaveReportButton;