const {services} = require('../services');
const {appConfig} = require('../../constant');

function get(params) {
    return services.get({...params, API_HOST: appConfig.API_HOST + 'cypress'});
}

function getList(params) {
    return services.getList({...params, API_HOST: appConfig.API_HOST + 'cypress'});
}

function create(params) {
    return services.create({...params, API_HOST: appConfig.API_HOST + 'cypress'});
}

function del(params) {
    return services.del({...params, API_HOST: appConfig.API_HOST + 'cypress'});
}

function update(params) {
    return services.update({...params, API_HOST: appConfig.API_HOST + 'cypress'});
}

module.exports = {
    get,
    getList,
    create,
    del,
    update
};
