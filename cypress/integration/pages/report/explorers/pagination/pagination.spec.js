describe('Test Pagination footer Explorer', () => {
    let dataTable = {};

    before(()=>{
        cy.login();

        cy.server();
        cy.route('GET', '/api/report/**').as('getDataReport');
        
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie =>{
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/explorers`);
            
            cy.wait('@getDataReport').then(xhr => {
                if (xhr && xhr.response && xhr.response.body) {
                    const {data = {}} = xhr.response.body;

                    dataTable = data;
                }
            });
        });
    });

    beforeEach(()=>{
        cy.login();
        cy.wait(2000);
    });

    it('Test visible pagination', () => {
        if(dataTable.body.length > 0){
            cy.get('.wrap-table-footer .record-table').eq(0).should('be.visible');
        }else{
            cy.get('.last-tfoot .wrap-table-footer .record-table').then(text =>{
                const value = text.text();
                expect(value.includes('No reports')).equal(true);
            })
        }
    });

    it('Test data from Api ', () => {
        cy.get('div.dropdown button.dropdown-toggle').eq(1).then(text =>{
            let textNumber = +text.text();

            if (dataTable.total >= textNumber) {
                expect(dataTable.body.length).equal(textNumber);
            } else if (dataTable < textNumber) {
                expect(dataTable.body.length < textNumber).equal(true);
            }
        });
    });

    it('Test click change row', () => {
        if(dataTable.body.length > 0){
        cy.get('.wrap-table-footer div.dropdown button.dropdown-toggle').eq(0).click();
        cy.get('.wrap-table-footer .dropdown .dropdown-menu').eq(0).should('be.visible').contains(10).then(()=>{
            cy.get('.wrap-table-footer .dropdown .dropdown-menu .dropdown-item').eq(1).click();
        });
        }else{
            cy.get('.last-tfoot .wrap-table-footer .record-table').then(text =>{
                const value = text.text();
                expect(value.includes('No reports')).equal(true);
            })
        }
    });
});
