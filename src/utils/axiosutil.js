// JS file to handle all network calls and user interactions with server
import axios from 'axios'
import loader from "./loaderutil.js"
import router from '@/router.js'
let error_messages = ['Your session is expired. Please login into system again.', 'Unauthorized request: no authentication given']

function redirectToHomepage() {
    localStorage.clear()
    router.push({ name: 'account' })
}
var axiosInstance = axios.create({
    baseURL: 'http://192.168.1.142:8800/',
});

export default {
    post(uri, requestData, json) {
        if (json) {
            requestData = JSON.stringify(requestData);
        }
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.post(uri, requestData)
                .then(function (response) {
                    loader.hide();
                    if (response.data && error_messages.includes(response.data.msg)) {
                        redirectToHomepage();
                    }
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },
    postwithoutloader(uri, requestData, json) {
        if (json) {
            requestData = JSON.stringify(requestData);
        }
        return new Promise((resolve, reject) => {
            axiosInstance.post(uri, requestData)
                .then(function (response) {
                    if (response.data && error_messages.includes(response.data.msg)) {
                        redirectToHomepage();
                    }
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
    putwithoutloader(uri, requestData) {
        return new Promise((resolve, reject) => {
            axiosInstance.put(uri, requestData)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    put(uri, requestData) {
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.put(uri, requestData)
                .then(function (response) {
                    loader.hide();
                    resolve(response.data);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },

    get(uri) {
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.get(uri)
                .then(function (response) {
                    loader.hide();
                    if (response.data && error_messages.includes(response.data.msg)) {
                        redirectToHomepage();
                    }
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },

    delete(uri) {
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.delete(uri)
                .then(function (response) {
                    loader.hide();
                    resolve(response);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },
    getwithoutloader(uri) {
        return new Promise((resolve, reject) => {
            axiosInstance.get(uri)
                .then(function (response) {
                    if (response.data && error_messages.includes(response.data.msg)) {
                        redirectToHomepage();
                    }
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },
    setSession(user_id) {
        localStorage.setItem('user_id', btoa(user_id))
    },
    checkSession() {
        let a = localStorage.getItem('user_id')
        try {
            if (a && a != '') {
                return atob(a)
            }
            return false
        } catch (err) {
            return false
        }
    },
    clearSession() {
        localStorage.clear();
    },
};

// axios.interceptors.request.use(config => {
//     config.url = 'http://192.168.1.142:8800/' + config.url;
//     return config;
// }
// );