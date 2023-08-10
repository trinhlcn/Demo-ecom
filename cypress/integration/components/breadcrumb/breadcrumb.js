const ELEMENTS = {
    BREAD_CRUMB: '[class*=block-title] [class*=breadcrumb]',
    TITLE: '[class*=block-title] #report-name'
};

export default class BreadCrumb {
    constructor(option = {}) {
        const {
            breadCrumbs = ['Antalyser'],
            title = 'Report'
        } = option;

        this.breadCrumbs = breadCrumbs;
        this.title = title;
    }

    isVisible() {
        return cy.get(ELEMENTS.BREAD_CRUMB).should('be.visible');
    }

    isValid({
        breadCrumbs,
        title
    }) {
        const newBreadCrumbs = breadCrumbs || this.breadCrumbs;
        const newTitle = title || this.title;

        cy.get(ELEMENTS.BREAD_CRUMB).should('be.visible');

        newBreadCrumbs.forEach(breadCrumb => {
            cy.get(ELEMENTS.BREAD_CRUMB).should('contain.text', breadCrumb);
        });

        cy.get(ELEMENTS.TITLE).should('contain.text', newTitle);
    }
}