/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs-extra');
const path = require('path');
const webpack = require('@cypress/webpack-preprocessor');
const {handleMonitor} = require('./monitoring');
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

    return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);

    // accept a configFile value or use development by default
    const file = config.env.configFile || 'development';
    const options = {
        webpackOptions: require('../../webpack.config'),
        watchOptions: {}
    };

    on('after:run', handleMonitor);

    on('file:preprocessor', webpack(options));

    // on('file: preprocessor', webpack(options));

    return getConfigurationByFile(file);
};