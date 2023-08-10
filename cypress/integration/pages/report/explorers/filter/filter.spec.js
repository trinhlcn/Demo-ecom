// import Filter from '../../../components/filter-antalyser/filter-antalyser';

// const dataFilter = [
//     {
//         name: 'report_name',
//         label: 'Report name',
//         operator: [
//             {name: 'contains'},
//             {name: 'does not contain'},
//             {name: 'is'},
//             {name: 'start with'}
//         ]
//     },
//     {
//         name: 'created_date',
//         label: 'Created date',
//         operator: [
//             {name: 'after'},
//             {name: 'on'},
//             {name: 'before'}
//         ]
//     },
//     {
//         name: 'share_to',
//         label: 'Shared to',
//         operator: [
//             {name: 'contains'},
//             {name: 'does not contain'},
//             {name: 'is'},
//             {name: 'start with'}
//         ]
//     },
//     {
//         name: 'last_accessed',
//         label: 'Last accessed',
//         operator: [
//             {name: 'after'},
//             {name: 'on'},
//             {name: 'before'}
//         ]
//     }
// ];

// function getRandomArbitrary(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
// }

// describe('Test filter template Explorer ', () => {
//     const filter = new Filter('Filter', 'text');

//     before(() => {
//         cy.login();
//         cy.server();
//         cy.route('GET','/api/filter/**').as('getSaveFilter');

//         cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
//             const user = JSON.parse(cookie.value);

//             // When cookie is got we define cypress visit this url
//             cy.visit(`${user.user_id}/report/explorers`);
            
//         });
        
//         cy.wait('@getSaveFilter');
//     });

//     beforeEach(() => {
//         // login had been define as cypress/support/commands.js
//         cy.login();
//     });

//     it('Test visible modal filter',() =>{
//         filter.openFilter(0);
//         filter.isVisible();
//     });

//     it('Test data when filter', () => {
//         cy.server();
//         cy.wait(3000);
//         filter.openDropdown('one', dataFilter, getRandomArbitrary(0,3)).then(label=> {
//             let nameLabel = label.operator[0].name;

//             filter.getDropdown('two').should('include.text',nameLabel);
//             filter.testDataSource(nameLabel, getRandomArbitrary(0,2),label);
//         });
//     });

//     it('Test save filter', () => {
//         cy.server();
        
//         filter.openFilter(0);
//         filter.isVisible();
        
//         filter.getDropdown('one').click();
//         cy.contains('Report name').click();

//         filter.getInputFilter('Report');
//         filter.getCheckSaveFilter().check({force: true});
//         filter.getInputSaveFilter().type('test111');
//         cy.route('POST','/api/filter/**').as('getSaveFilter2');
//         filter.onClickApply();
        
//         filter.onClickClose();
//         filter.openDropdownFilter(0);

//         filter.onRemoveFilter('@getSaveFilter2');
        
//     });

// });