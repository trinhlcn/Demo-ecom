var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            Cypress: path.resolve(__dirname, 'cypress'),
            Components: path.resolve(__dirname, 'cypress/integration/components'),
            Pages: path.resolve(__dirname, 'cypress/integration/pages'),
            Domain: path.resolve(__dirname, 'cypress/integration/domain'),
            Services: path.resolve(__dirname, 'cypress/services'),
            Helpers: path.resolve(__dirname, 'cypress/helpers')
        }
    }
};
