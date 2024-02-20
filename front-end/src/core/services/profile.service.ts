import { instance } from 'core/config';

export const ProfileService = {
    async updateProfile() {
        return await instance.get('auth/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
    },
    async refreshTokens() {
        return await instance.post('token/refresh');
    },
};
