import { instance } from 'core/config';
import { IAuthForm } from 'core/shared/auth.interface';

export const UsersService = {
    async createUser(data: IAuthForm) {
        return await instance.post('user', data);
    },
};
