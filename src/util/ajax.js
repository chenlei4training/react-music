import axios from 'axios'

//instance 实例
const axiosIns = axios.create({
    baseURL: 'http://localhost:2019/'
})

// Add a request interceptor
axiosIns.interceptors.request.use(function (config) {
     const token = localStorage.getItem('token')
    if (token) {
        let newHeaders = { ...config.headers, Authorization: `Bearer ${token}` }
        let newConfig = { ...config, headers: { ...newHeaders } }

        return newConfig;
    } else {
        return config
    }
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosIns