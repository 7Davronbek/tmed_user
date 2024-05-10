import axios from "axios";

export const httpServer = axios.create({
    baseURL: process.env.VITE_ADMIN_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTk4OTQzNjk4MDU4IiwiaWF0IjoxNzE1MDczNjI5LCJleHAiOjE3MTU2Nzg0Mjl9.IworFKj4oTAnxDQv6swj-u_72oHSc4QKdnyZ20vxt_0'
    }
})