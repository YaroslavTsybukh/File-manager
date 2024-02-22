import axios, { isAxiosError, CreateAxiosDefaults } from 'axios';
import { ProfileService, UsersService } from 'core/services';

const options: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
    withCredentials: true,
};

export const instance = axios.create(options);

export const instanceWithTokens = axios.create(options);

instanceWithTokens.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (
            isAxiosError(error) &&
            error.response?.status === 401 &&
            !originalRequest._isRetry
        ) {
            originalRequest._isRetry = true;

            try {
                const { data } = await ProfileService.refreshTokens();
                localStorage.setItem('accessToken', data.accessToken);
                originalRequest.headers.set(
                    'Authorization',
                    `Bearer ${data.accessToken}`,
                );

                return instanceWithTokens.request(originalRequest);
            } catch (e) {
                const res = await UsersService.logoutUser();
                localStorage.removeItem('accessToken');

                return Promise.reject(e);
            }
        }

        return Promise.reject(error);
    },
);
