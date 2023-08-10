/// <reference types="Cypress" />

const ITEM_HEADER_ANTALYSER = '[class*=header-top] [class*=main-nav] ul li';
const USER_NAME = '[class*=header-top] [class*=wrap-text] strong';
const USER_CODE = '[class*=header-top] [class*=wrap-text] [class*=code]';
const USER_AVATAR = '[class*=header-top] [class*=dropdown-avatar] img';
const DROP_DOWN_USER = '[class*=header-top] [class*=dropdown-avatar] .dropdown-menu';
const USER_EMAIL = DROP_DOWN_USER + ' [class*=user-name] span';
const BTN_LOGOUT = DROP_DOWN_USER + ' [class*=btn-grey]';

const formatUserId = (userId) => {
    userId = userId || '';

    if (!userId || !userId.length) {
        return '';
    } else {
        userId = userId.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        return userId;
    }
};

let menuHeader = [];
let userLogin = {};

describe('Test header top antalyser', () => {
    before(() => {

        cy.login();
        cy.server();
        cy.route('GET', '/api/menu/**').as('getMenuHeader');
        cy.route('GET', '/api/account/**').as('getUser');

        cy.visit('/');

        cy.wait('@getMenuHeader').then(xhr => {
            const {headers = []} = xhr.response.body.data;

            menuHeader = headers;

        });

        cy.wait('@getUser').then(xhr => {
            const {user_info = {}} = xhr.response.body.data;

            userLogin = user_info;
        });
    });

    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.login();
    });

    it('Test menu header', () => {
        menuHeader.map((item, index) => {
            cy.get(ITEM_HEADER_ANTALYSER).eq(index).contains(item.menu_name).click();

            cy.url().should('include', item.state);
        });

        cy.wait(3000);
    });

    it('Test information user', () => {
        cy.get(USER_NAME).should('have.text', userLogin.full_name);

        cy.get(USER_CODE).should('include.text',formatUserId(userLogin.user_id));

        cy.get(USER_AVATAR).first().scrollIntoView().click();

        cy.get(DROP_DOWN_USER).should('be.visible');

        cy.get(USER_EMAIL).should('have.text', userLogin.email);
        
    });

    it('Test logout', () => {
        cy.get(BTN_LOGOUT).click();

        cy.url().should('include', 'login');
    });
});
