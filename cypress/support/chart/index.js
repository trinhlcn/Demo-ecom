import {isEqual} from 'lodash';

const {chartTypes} = require('Cypress/integration/pages/report/report-design/workspace/constant');
const {globalElements} = require('Cypress/constant');

Cypress.Commands.add('checkLoadedDataOnChartSuccess', (componentId = '') => {
    cy.get(`[data-component=${componentId}]`).find(globalElements.SKELETON_CONTENT).should('not.exist');
    cy.get(`[data-component=${componentId}]`).should('not.have.css', 'background-color', 'rgb(249, 249, 249)');
    cy.get(`[data-component=${componentId}]`).should('not.contain.text', 'No data to display');

});

Cypress.Commands.add('checkApiPerformanceRequest', (expectedRequest = {}, request = {}, chartType = chartTypes.TABLE.key) => {
    expectedRequest.componentId = request.componentId;

    expect(expectedRequest, 'Check equal api request').deep.equalInAnyOrder(request);
});

Cypress.Commands.add('checkApiPerformanceResponse', (expectedResponse = {}, response = {}, chartType = chartTypes.TABLE.key) => {
    expect(expectedResponse, 'Check equal api response').deep.equalInAnyOrder(response);
});

Cypress.Commands.add('waitForExpectedRequest', (alias, expectedRequest) => {
    let _expectedRequest = {...expectedRequest};
    let count = 0;

    const recursive = () => {
        count++;

        cy.log(`Wait for ${alias}. Count: ${count}`);

        return cy.wait(alias).then(xhr => {
            const {request} = xhr;
            const {componentId} = request.body;

            _expectedRequest.componentId = componentId;

            if (!isEqual(_expectedRequest, request.body)) {
                return cy.then(recursive);
            }

            return cy.wrap(count);
        });
    };

    cy.log('Polling for expected API request');
    return cy.then(recursive);
});
