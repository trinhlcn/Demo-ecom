// import Report from '../index.spec';
// import ReportSlideShow from '../../../../components/report-slideshow/report-slideshow.spec';

// describe('Test export pdf', () => {
//     const data = new Map();
//     let report = null;

//     before(() => {
//         cy.login();

//         cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
//             cy.server();

//             cy.route('GET', '/api/report/**').as('reportPerformance');

//             const user = JSON.parse(cookie.value);

//             data.set('userId', user.user_id);

//             cy.visit(`${data.get('userId')}/report/my-report-template`);

//             cy.wait('@reportPerformance');
//         });
//     });

//     beforeEach(() => {
//         cy.login();
//         cy.server();
//     });

//     it('Create report', () => {
//         cy.route('GET', '/v3.1/api/datasource/**').as('listDataSources'); // API get list data source
//         cy.route('PUT', '/api/report/index/**').as('updateReport'); // API update report

//         cy.get('.filter-bar .dropdown .dropdown-toggle').contains('REPORT').eq(0).click(); // Click dropdown data source

//         cy.wait('@listDataSources'); // Wait until list data sources loaded

//         cy.get('div[class*="body"] div[class*="scrollbar-dynamic position-relative scrollbar-custom"] div[class*="inner-row data-source-item"]').eq(0).click(); // Click 1 data source => Create new report

//         cy.wait('@updateReport'); // Wait until create created

//         cy.location().then(loc => {
//             let {hash} = loc;

//             hash = hash.split('/');

//             const reportId = hash[4];

//             data.set('reportId', reportId);

//             report = new Report(data.get('reportId'), data.get('userId'));
//         });
//     });

//     it('Create new page', () => {
//         report.click('page').click('add-new-page').click('select-page', {position: 1});
//     });

//     it('Trigger download all pages', () => {
//         cy.route('GET', '/v3.1/api/report/download**').as('getDownload'); // API update report
//         cy.route('GET', '/v3.1/api/report/download?**type=download-pdf**').as('downloadFile'); // API update report

//         report.click('share').click('download-report').click('all-page').click('download');

//         // Get fileId
//         cy.wait('@getDownload').then(xhr => {
//             const {fileId = ''} = xhr.response.body.data;

//             if (fileId) {
//                 data.set('fileId', fileId);
//             }
//         });

//         cy.wait('@downloadFile', {timeout: 60000 * 5});
//     });

//     it('Inspect slideshow page (Expect 2 pages)', () => {
//         const reportSlideShow = new ReportSlideShow(data.get('reportId'), data.get('userId'), data.get('fileId'));

//         reportSlideShow.goto('slideshow');

//         reportSlideShow.expect('workspace', {pageLength: 2});
//     });

//     it('Go back report', () => {
//         report.goto('edit');
//     });

//     it('Trigger download 1/2 page', () => {
//         cy.route('GET', '/v3.1/api/report/download**').as('getDownload'); // API update report
//         cy.route('GET', '/v3.1/api/report/download?**type=download-pdf**').as('downloadFile'); // API update report

//         report.click('share').click('download-report').click('select-pages').click('select-page-element', {position: [0]}).click('download');

//         // Get fileId
//         cy.wait('@getDownload').then(xhr => {
//             const {fileId = ''} = xhr.response.body.data;

//             if (fileId) {
//                 data.set('fileId', fileId);
//             }
//         });

//         cy.wait('@downloadFile', {timeout: 60000 * 5});
//     });

//     it('Inspect slideshow page (Expect 1/2 page)', () => {
//         const reportSlideShow = new ReportSlideShow(data.get('reportId'), data.get('userId'), data.get('fileId'));

//         reportSlideShow.goto('slideshow');

//         reportSlideShow.expect('workspace', {pageLength: 1});
//     });

//     it('Go back report', () => {
//         report.goto('edit');
//     });

//     it('Create new page', () => {
//         report.click('page').click('add-new-page');
//     });

//     it('Trigger download 2/3 pages', () => {
//         cy.route('GET', '/v3.1/api/report/download**').as('getDownload'); // API update report
//         cy.route('GET', '/v3.1/api/report/download?**type=download-pdf**').as('downloadFile'); // API update report

//         report.click('share').click('download-report').click('select-pages').click('select-page-element', {position: [0, 1]}).click('download');

//         // Get fileId
//         cy.wait('@getDownload').then(xhr => {
//             const {fileId = ''} = xhr.response.body.data;

//             if (fileId) {
//                 data.set('fileId', fileId);
//             }
//         });

//         cy.wait('@downloadFile', {timeout: 60000 * 5});
//     });

//     it('Inspect slideshow page (Expect 2/3 pages)', () => {
//         const reportSlideShow = new ReportSlideShow(data.get('reportId'), data.get('userId'), data.get('fileId'));

//         reportSlideShow.goto('slideshow');

//         reportSlideShow.expect('workspace', {pageLength: 2});
//     });
// });
