import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://3.110.50.47:3001/api',
})

export default instance;