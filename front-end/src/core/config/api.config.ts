import axios from 'axios';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
    headers: {},
});
