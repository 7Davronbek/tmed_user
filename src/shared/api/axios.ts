import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'uz'
    }
})

// httpClient.interceptors.request.use(config => {
//     config.headers['Accept-Language']
//     return config;
// })
export default httpClient