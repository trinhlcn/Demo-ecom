// import DropdownAddSource from '../../../../../components/dropdown-add-object/dropdown-add-object';

// const DROPDOWN = 'REPORT';

// describe('Create new report dropdown data source', () => {
//     const dropdownAddSource = new DropdownAddSource(DROPDOWN, 'text');

//     before(() => {
//         // login had been define as cypress/support/commands.js
//         cy.login();

//         // This allow cypress get cookie from web browser
//         cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
//             const user = JSON.parse(cookie.value);

//             // When cookie is got we define cypress visit this url
//             cy.visit(`${user.user_id}/report/my-report-template`);
//         });
        
//     });

//     beforeEach(() => {
//         cy.login();

//         cy.server();
//     });

//     dropdownAddSource.testAll({
//         valueSearch: 'trello', 
//         source: 1, 
//         position: 'bottom', 
//         api: '/api/report/**' 
//     });
// });