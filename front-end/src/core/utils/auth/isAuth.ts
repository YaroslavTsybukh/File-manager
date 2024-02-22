export const isAuth = () => {
    return !!localStorage.getItem('accessToken');
};
