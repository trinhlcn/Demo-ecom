class ReportSlideShow {
    constructor(reportId, userId, fileId) {
        this.reportId = reportId;
        this.userId = userId;
        this.fileId = fileId;
    }

    expect(target, args) {
        switch (target) {
            case 'workspace': {
                const {
                    pageLength
                } = args;

                cy.get('div[id*="all-page-container"] div[class*="scale-size-holder"] div[class*="ants-workspace"]').then(pages => {
                    expect(pages.length).eq(pageLength); // Expect 2 pages
                });

                return;
            }
            default:
                return;
        }
    }

    goto(target) {
        switch (target) {
            case 'slideshow': {
                cy.visit(`${this.userId}/report/slideshow/${this.reportId}?file_id=${this.fileId}&export_user_id=${this.userId}`);

                return;
            }
            default:
                return;
        }
    }
}

export default ReportSlideShow;