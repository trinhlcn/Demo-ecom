const axios = require('axios');

var CancelToken = axios.CancelToken;
var qs = require('qs');

module.exports.services = {
    get: function get(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;
            const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(() => {});

            delete params.API_HOST;
            delete params.cancelToken;

            return axios.get(API_HOST + '/' + params.id, {
                params: params,
                cancelToken: cancelToken
            });
        } else {
            return false;
        }
    },
    getList: function getList(params) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;
            const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(() => {});

            delete params.API_HOST;
            delete params.cancelToken;

            return axios.get(API_HOST, {
                params: params,
                cancelToken: cancelToken
            });
        } else {
            return false;
        }
    },
    create: function create(params) {
        if (params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.post(API_HOST, params);
        } else {
            return false;
        }
    },
    update: function update(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.put(API_HOST + '/' + params.id, params);
        } else {
            return false;
        }
    },
    del: function del(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.delete(API_HOST + '/' + params.id, {
                params: params
            });
        } else {
            return false;
        }
    },
    download: function download(params) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.get(API_HOST, {
                params: params,
                responseType: 'blob'
            });
        } else {
            return false;
        }
    },
    upload: function upload(params) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;
            const headers = params.headers || {
                'Content-Type': 'multipart/form-data'
            };

            delete params.API_HOST;
            delete params.headers;

            let url = API_HOST + '?' + qs.stringify(params.params);

            return axios.post(url, params.formData, {
                headers
            });
        } else {
            return false;
        }
    }
};
