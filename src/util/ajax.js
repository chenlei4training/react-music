import axios from 'axios'

//instance 实例
const axiosIns = axios.create({
    baseURL:'http://localhost:2019/'
})

axiosIns.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    if (token){
        let newConfig = {...config}
        // newConfig.headers.token = token
        newConfig.headers.Authorization=`Bearer ${token}`
        return newConfig
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export default axiosIns