import { instanceAuth } from 'core/config';
import { IAuthForm } from 'core/shared/auth.interface';

export const UsersService = {
    async createUser(data: IAuthForm) {
        return await instanceAuth.post('user', data);
    },
    async loginUser(data: IAuthForm) {
        return await instanceAuth.post('auth/login', data);
    },
    async logoutUser() {
        return await instanceAuth.post('token/logout');
    },
};
