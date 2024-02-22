import { instance, instanceWithTokens } from 'core/config';

export const ProfileService = {
    async updateProfile() {
        return await instanceWithTokens.get('auth/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
    },
    async refreshTokens() {
        return await instance.post('token/refresh');
    },
};
