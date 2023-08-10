export default class GalleryTemplate {
    constructor() {
        
    }

    getDataApi(api) {
        cy.wait(api).then(xhr => {
            if (xhr && xhr.response && xhr.response.body && xhr.response.body.data) {
                const {data} = xhr.response.body;

                cy.wrap(data).as('data');
            }
        });
        return cy.get('@data');
    }
    
    getButtonToggle() {
        return cy.get('.gallery-page .dropdown .dropdown-toggle');
    }

    onClickButtonToggle() {
        return this.getButtonToggle().first().click({force: true});
    }

    getItemDropdown(position) {
        return cy.get('.dropdown .dropdown-menu .dropdown-item').eq(position);
    }

    onClickItemDropdown(position) {
        return this.getItemDropdown(position).click({force: true});
    }

    onHover(position = 0) {
        return cy.get(' [class*=template-card]').eq(position).trigger('mouseover');
    }

    onClickUse() {
        cy.get('.box-button .text-uppercase').eq(0).click({force: true});
    }
}