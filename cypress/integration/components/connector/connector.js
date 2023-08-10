/// <reference types="Cypress" />

const CONNECTOR = '[class*=body-content-selector] [class*=selector-box]';

export default class Connector {
    constructor() {
    }

    /**
     * 
     */
    getConnector(nameConnector = 'Google Sheet') {
        return cy.get(CONNECTOR).contains(nameConnector).parents('[class*=selector-box]');
    }

    selectConnector(nameConnector = 'Google Sheet') {
        return this.getConnector(nameConnector).contains('Select').click();
    }
}