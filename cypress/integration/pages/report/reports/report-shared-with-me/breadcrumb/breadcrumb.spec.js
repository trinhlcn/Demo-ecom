/// <reference types="Cypress" />
import BreadCrumb from '../../../../../components/breadcrumb/breadcrumb';

describe('Test breadcrumb report template', () => {
    const breadcrumb = new BreadCrumb();

    beforeEach(() => {
        cy.login();

        // This allow cypress get cookie from web browser
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            // When cookie is got we define cypress visit this url
            cy.visit(`${user.user_id}/report/reports/shared-with-me`);
        });
    });

    it('Test display breadcrumb', () => {
        breadcrumb.isVisible();
    });
});
