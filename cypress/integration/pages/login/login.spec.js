import {usersLogin} from './login.data';

const ELEMENTS = {
    LOGIN_WRAP: '#ants-tech-login-iam',
    LOGIN_FORM: '#ants-tech-login-iam form',
    USERNAME_INPUT: '[name="email"]',
    PASSWORD_INPUT: '[name="password"]'
};

describe('Test login antalyser', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.visit('/');
    });

    it('Check url redirect to permission', () => {
        const urlPermission = Cypress.env('PERMISSION_URL');

        cy.url().should('include', urlPermission);
    });

    it('Require email and passwords', () => {
        cy.get(ELEMENTS.LOGIN_FORM).should('be.visible');

        cy.get(ELEMENTS.LOGIN_FORM).contains('SIGN IN').click();
        cy.get(ELEMENTS.LOGIN_FORM).contains('SIGN IN').click();
        cy.get(ELEMENTS.LOGIN_FORM).contains('Please enter your password').should('be.visible');
    });

    it('Check validate email and password', () => {
        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.USERNAME_INPUT)
            .should('be.visible')
            .type('noEmail@few{enter}', {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).contains('Please enter valid email').should('be.visible');

        cy.get(ELEMENTS.LOGIN_FORM).contains('Please enter your password').should('be.visible');

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.USERNAME_INPUT)
            .clear();

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.PASSWORD_INPUT)
            .type('nobo', {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).contains('Your password too short').should('be.visible');

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.PASSWORD_INPUT)
            .type('nobodwqdqwdwq', {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).contains('SIGN IN').click();

        cy.get(ELEMENTS.LOGIN_FORM).contains('Please enter your email').should('be.visible');
    });

    it('Check Loggin success or failed', () => {

        const userFailed = usersLogin[0];

        cy.server();

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.USERNAME_INPUT)
            .should('be.visible')
            .type(userFailed.userName, {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.PASSWORD_INPUT)
            .type(`${userFailed.password}{enter}`, {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.USERNAME_INPUT)
            .clear()
            .type(Cypress.env('userName'), {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.PASSWORD_INPUT)
            .clear()
            .type(Cypress.env('password'), {delay: 50});

        cy.get(ELEMENTS.LOGIN_FORM).contains('SIGN IN').click();

        cy.url().should('include', '/report');

    });
});
