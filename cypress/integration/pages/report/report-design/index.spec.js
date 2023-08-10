class Report {
    constructor(reportId, userId) {
        this.reportId = reportId;
        this.userId = userId;
    }

    click(target, args) {
        switch (target) {
            case 'page': {
                cy.get('div[class*="group-button split-v mr-15"] div[class*="dropdown-one-column paging mr-15 dropdown"] div[class*="dropdown-toggle"]').click();

                return new Page();
            }

            case 'share': {
                cy.get('div[class*="d-inline-flex mr-10"] div[class*="dropdown"] button[class*="d-flex align-items-center dropdown-toggle btn btn-default"]').click();

                return new Share();
            }
            default:
                return;
        }
    }

    goto(target) {
        switch (target) {
            case 'edit': {
                cy.visit(`${this.userId}/report/design/${this.reportId}/edit`); // Visit report
                cy.route('PUT', '/api/report/index/**').as('updateReport'); // API update report
                cy.wait('@updateReport'); // Wait until report loaded

                return;
            }
            default:
                return;
        }
    }
}

class Page {
    click(target, args) {
        switch (target) {
            case 'select-page': {
                const {
                    position = 0
                } = args;

                cy.get('div[class*="body"] div[class*="scrollbar"] div[class*="page-item"]').eq(position).click();

                return new Page();
            }
            case 'add-new-page': {
                cy.server();
                cy.route('GET', '**/user-package/**').as('validatePackageUser');
                cy.get('div[class*="dropdown-menu show"] div[class*="foot position-relative"] button[class*="btn-link"]').contains('Add new page').click();
                cy.wait('@validatePackageUser');

                return new Page();
            }
            default:
                return;
        }
    }
}

class Share {
    click(target, args) {
        switch (target) {
            case 'download-report': {
                cy.get('div[class*="dropdown show"] div[class*="dropdown-menu show"] button[class*="dropdown-item"]').contains('Download report').click();

                return new PopupDownloadReport();
            }
            default:
                return;
        }
    }
}

class PopupDownloadReport {
    click(target, args) {
        switch (target) {
            case 'all-page': {
                cy.get('div[class*="form form-export"] div[class*="radio-multi"] label span').contains('All Pages').click();

                return new PopupDownloadReport();
            }
            case 'select-pages': {
                cy.get('div[class*="form form-export"] div[class*="radio-multi"] label span').contains('Select Pages').click();

                return new PopupDownloadReport();
            }
            case 'select-page-element': {
                const {
                    position = []
                } = args;

                for (let index in position) {
                    cy.get('div[class*="form form-export"] div[class*="list-page-report"] ul[class*="scrollbar"] li div[class*="checkbox-multi"] label span[class*="icon-check"]').eq(index).click();
                }

                return new PopupDownloadReport();
            }
            case 'download': {
                cy.get('div[class*="modal-content"] div[class*="modal-footer d-block modal-footer"] button[class*="btn btn-green ml-0 mr-10"]').click();

                return new PopupDownloadReport();
            }
            default:
                return;
        }
    }
}

export default Report;