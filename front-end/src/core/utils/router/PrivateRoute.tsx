import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute: FC = () => {
    const isAuth = false;

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
