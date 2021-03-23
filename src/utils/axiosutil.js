import axios from   'axios'
import loader from "./loaderutil.js"

var axiosInstance=axios.create({
   baseURL:'http://192.168.1.105:8800/',
 //   baseURL:'http://192.168.1.96:8800/',
});





export default {

    get(uri) {
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.get(uri)
                .then(function (response) {
                    loader.hide();
                    if (response.data )
                        resolve(response.data);
                })
                .catch(function (error) {
                    loader.hide();
                    reject(error);
                });
        });
    },


    post(uri, requestData, json) {
     
        if (json) {
            requestData = JSON.stringify(requestData);
        }
        
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.post(uri, requestData)
                .then(function (response) {  
                    loader.hide();
                    if (response.data) {
                        resolve(response.data);
                    }
                })
                .catch(function (error) {
                    
                    loader.hide();
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

    delete(uri) {
        return new Promise((resolve, reject) => {
            loader.show();
            axiosInstance.delete(uri)
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
    
    
}