import axios, { isAxiosError } from 'axios';
import { ProfileService } from 'core/services/profile.service';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
    headers: {},
});

export const instanceAuth = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
});

// instanceAuth.interceptors.response.use(
//     (res) => res,
//     (e) => {
//         if (isAxiosError(e) && e.response?.status === 401) {
//             const data =
//         }
//     },
// );
