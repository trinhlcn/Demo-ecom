import {GridViewThumbnail} from '../../../../../components/grid-view-thumbnail/grid-view-thumbnail'

describe('Test thumbnail', () => {
    const gridViewThumbnail = new GridViewThumbnail();
    let dataTable = [];

    before(() => {
        cy.login();

        cy.intercept({
            method: 'GET',
            pathname: '/api/report/index',
        }).as('getDataTable');

        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/reports/shared-with-me`);
        });

        cy.wait('@getDataTable').then(xhr => {
            const {data = {}} = xhr.response.body;

            dataTable = data;

            expect(xhr.response.body.code, 'Check status response data').equal(200);

        });
    });

    beforeEach(() => {
        cy.login();

        cy.wait(2000);

    });

    it('Test grid view thumbnail', () => {
        gridViewThumbnail.getButtonThumbnail().click();

        let length_thumbnail = 0;
        let length_all_thumbnail = 0;

        gridViewThumbnail.getThumbnail(0).its('length').then(length => {
            length_thumbnail = length;
        })

        gridViewThumbnail.getThumbnails().its('length').then(length => {
            length_all_thumbnail = length;
        })   

        expect(gridViewThumbnail.getCompareLength(length_thumbnail,length_all_thumbnail)).equal(true);
    
        gridViewThumbnail.getThumbnailCheckedBox().click({force: true});
        gridViewThumbnail.getThumbnailCheckedBox().click();
    });

    it('Test grid design thumbnail', () => {
        gridViewThumbnail.getThumbnailCheckedBox().click({force: true});
        gridViewThumbnail.getThumbnailCheckedBox().click();
        gridViewThumbnail.getDetailThumbnail().click();
        cy.url().should('include', '/report/design');
        //check title
        // gridViewThumbnail.getTitleThumbnail().then(text => {
        //     console.log(text.text());
            // const value = text.text();
            // console.log('a');
            // expect(value.includes('a')).equal(true);
        // });
        cy.contains(dataTable.body[0].report_name);


    })
})