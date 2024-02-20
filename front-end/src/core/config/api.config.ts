import axios, { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { paths } from '.';
import { ProfileService, UsersService } from 'core/services';
import { useState } from 'react';

export const instanceAuth = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
    headers: {},
});

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 1000,
    withCredentials: true,
});

//TODO: Доработать интерсепторы. Нужно избавиться от цикличности при refresh tokens. Информация также есть в chatgpt.
instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (
            isAxiosError(error) &&
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const { data } = await ProfileService.refreshTokens();
                localStorage.setItem('accessToken', data.accessToken);
                originalRequest.headers.set(
                    'Authorization',
                    `Bearer ${data.accessToken}`,
                );
                return instance.request(originalRequest);
            } catch (e) {
                const res = await UsersService.logoutUser();
                localStorage.removeItem('accessToken');
                // window.location.href = '/login';
                return Promise.reject(e);
            }
        }

        return Promise.reject(error);
    },
);
