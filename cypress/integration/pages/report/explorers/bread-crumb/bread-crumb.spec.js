import BreadCrumd from '../../../../components/breadcrumb/breadcrumb';

describe('Test Bread-crumb in Explorer page', () => {
    const breadCrumd = new BreadCrumd();

    before(()=>{
        cy.login();

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie =>{
            const user =  JSON.parse(cookie.value);
            
            cy.visit(`${user.user_id}/report/explorers`);
        });
    });

    it('Test visible Bread-crumb', () => {
        breadCrumd.isVisible().then(text =>{
            expect(text.text()).equal('All Explorer');
        });
    });
});
