import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://65.2.71.241:3001/api',
})

export default instance;