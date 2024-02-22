import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuth } from '..';

export const PrivateRoute: FC = () => {
    const auth = isAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
};
