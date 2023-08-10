const {get} = require('lodash');

import localforage from 'localforage';
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('AUTH_ADX_DOMAIN')}api/account/authenticate`,
        body: {
            app_id: Cypress.env('APP_ID'),
            user_name: Cypress.env('userName'),
            password: Cypress.env('password')
        }
    }).then(res => {
        if (res.body && res.body.data && res.body.data.personal) {
            const {personal = {}, token} = res.body.data;

            const user = {
                user_id: personal.user_id,
                token: Cypress.env('token') ? Cypress.env('token') : token,
                account_id: personal.user_id,
                role: +personal.role,
                seller_role: +personal.seller_role || 0,
                conversion_id: personal.conversion_id,
                language: 'en'
            };

            cy.setCookie(Cypress.env('COOKIE_USER'), JSON.stringify(user));
        }
    });

});

Cypress.Commands.add('setUID', () => {
    cy.setCookie(Cypress.env('COOKIE_UID'), Cypress.env('UID'));
});

Cypress.Commands.add('getUserCookie', (callback) => {
    cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
        const user = JSON.parse(cookie.value);

        typeof callback === 'function' && callback(user);
    });
});

Cypress.Commands.add('checkIfEleExists', (ele, callback) => {
    cy.document().then(doc => {
        if (doc.querySelector(ele)) {
            callback(true);
        } else {
            callback(false);
        }
    });
});

Cypress.Commands.add('getReduxStore', (path, callback) => {
    cy.window().its('store').invoke('getState').then(store => {
        callback(get(store, path, {}));
    });
});

Cypress.Commands.add('clearIndexedDB', () => {
    localforage.clear().then(() => {
        console.log('clear DB ok');
    });
});