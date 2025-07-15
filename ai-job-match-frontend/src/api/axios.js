import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://13.127.1.91:3001/api',
})

export default instance;