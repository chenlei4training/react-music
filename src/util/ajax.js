import axios from 'axios'

//instance 实例
const axiosIns = axios.create({
    baseURL:'http://localhost:2019/'
})

export default axiosIns