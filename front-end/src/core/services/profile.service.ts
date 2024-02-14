import { instanceAuth } from 'core/config/api.config';

export const ProfileService = {
    async updateProfile() {
        return await instanceAuth.get('auth/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
    },
    // async refreshTokens() {
    //     return await instanceAuth.post('token/refresh', {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //         },
    //     });
    // },
};
