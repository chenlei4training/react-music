import axios from 'axios'

const ajax = axios.create(
    {baseURL:'http://localhost:2019'}
)

export default ajax