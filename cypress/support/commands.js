const {get} = require('lodash');

import localforage from 'localforage';
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

//==== wait cookie
'use strict'

const logCommand = ({ options, originalOptions }) => {
  if (options.log) {
    options.logger({
      name: options.description,
      message: options.customMessage,
      consoleProps: () => originalOptions,
    })
  }
}
const logCommandCheck = ({ result, options, originalOptions }) => {
  if (!options.log || !options.verbose) return

  const message = [result]
  if (options.customCheckMessage) {
    message.unshift(options.customCheckMessage)
  }
  options.logger({
    name: options.description,
    message,
    consoleProps: () => originalOptions,
  })
}

const waitUntil = (subject, checkFunction, originalOptions = {}) => {
  if (!(checkFunction instanceof Function)) {
    throw new Error('`checkFunction` parameter should be a function. Found: ' + checkFunction)
  }

  const defaultOptions = {
    // base options
    interval: 200,
    timeout: 5000,
    errorMsg: 'Timed out retrying',

    // log options
    description: 'waitUntil',
    log: true,
    customMessage: undefined,
    logger: Cypress.log,
    verbose: false,
    customCheckMessage: undefined,
  }
  const options = { ...defaultOptions, ...originalOptions }

  // filter out a falsy passed "customMessage" value
  options.customMessage = [options.customMessage, originalOptions].filter(Boolean)

  const endTime = Date.now() + options.timeout

  logCommand({ options, originalOptions })

  const check = (result) => {
    logCommandCheck({ result, options, originalOptions })
    if (result) {
      return result
    }
    if (Date.now() >= endTime) {
      const msg =
        options.errorMsg instanceof Function ? options.errorMsg(result, options) : options.errorMsg
      throw new Error(msg)
    }
    cy.wait(options.interval, { log: false }).then(() => {
      return resolveValue()
    })
  }

  const resolveValue = () => {
    const result = checkFunction(subject)

    const isAPromise = Boolean(result && result.then)
    if (isAPromise) {
      return result.then(check)
    } else {
      return check(result)
    }
  }

  return resolveValue()
}

Cypress.Commands.add('waitUntil', { prevSubject: 'optional' }, waitUntil)


//=====

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