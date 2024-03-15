import { instance } from 'core/config';
import { IAuthForm } from 'core/shared/auth.interface';

export const UsersService = {
    async createUser(data: IAuthForm) {
        return await instance.post('user', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    async loginUser(data: IAuthForm) {
        return await instance.post('auth/login', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    async logoutUser() {
        return await instance.post('token/logout');
    },
};
