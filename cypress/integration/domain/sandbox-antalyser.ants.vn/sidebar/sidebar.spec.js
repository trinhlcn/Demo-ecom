/// <reference types="Cypress" />

const ITEM_SIDEBAR_ANTALYSER = '.sidebar .box-border-top ul li';
const ICON_ITEM = '.sidebar .box-border-top span.box-icon i';
const SEARCH_SIDEBAR = '.sidebar .search-block input[type=text]';
const TOGGLE_SIDEBAR = '.sidebar [class*=btn-toggle]';

let sidebarMenu = [];

describe('Test sidebar antalyser', () => {
    before(() => {

        cy.login();
        cy.server();
        cy.route('GET', '/api/menu/**').as('getMenuSideBar');

        cy.visit('/');

        cy.wait('@getMenuSideBar').then(xhr => {
            const {lefts = []} = xhr.response.body.data;

            sidebarMenu = lefts.report;

        });
    });

    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.login();
    });

    it('Test toggle sidebar', () => {
        cy.get(TOGGLE_SIDEBAR).click().wait(1000).click();
    });

    it('Test search sidebar', () => {
        cy.get(SEARCH_SIDEBAR).type('explorer');

        cy.get(ITEM_SIDEBAR_ANTALYSER).then(menu => {
            let isValid = true;

            for (let i = 0; i < menu.length; i++) {
                if (!menu[i].innerText.toLowerCase().includes('explorer')) {
                    isValid = false;
                    break;
                }
            }

            expect(isValid, 'Test search is working').equal(true);
        });

        cy.get(SEARCH_SIDEBAR).clear();
    });

    it('Test menu sidebar antalyser', () => {
        sidebarMenu.map((item, index) => {
            cy.get(ICON_ITEM).eq(index).should('have.class', item.icon_class);

            cy.get(ITEM_SIDEBAR_ANTALYSER).eq(index).contains(item.menu_name).click();

            cy.url().should('include', item.state === 'report.reports' ? 'report/my-report-template' : item.path.replace(/\/:userId/g, ''));
        });
    });
});
