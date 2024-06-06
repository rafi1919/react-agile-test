import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://restfulcountries.com/api/v1',

})

export default axiosInstance