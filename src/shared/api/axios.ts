import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.VITE_BASE_URL,
})
export default httpClient