const {services} = require('../services');
const {appConfig} = require('../../constant');

function get(params) {
    return services.get({...params, API_HOST: appConfig.API_HOST + 'upload'});
}

function getList(params) {
    return services.getList({...params, API_HOST: appConfig.API_HOST + 'upload'});
}

function create(params) {
    return services.create({...params, API_HOST: appConfig.API_HOST + 'upload'});
}

function del(params) {
    return services.del({...params, API_HOST: appConfig.API_HOST + 'upload'});
}

function upload(params) {
    return services.upload({...params, API_HOST: appConfig.API_HOST + 'upload'});
}

module.exports = {
    get,
    getList,
    create,
    del,
    upload
};
