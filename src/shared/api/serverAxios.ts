import axios from "axios";

export const httpServer = axios.create({
    baseURL: process.env.VITE_ADMIN_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTk4OTQzNjk4MDU4IiwiaWF0IjoxNzE1NDU1MzQ4LCJleHAiOjE3MTYwNjAxNDh9.TCDG5KJKrmmsWbY4yzWrUhuI9kFntJnp8KGAKBBBeag'
    }
})