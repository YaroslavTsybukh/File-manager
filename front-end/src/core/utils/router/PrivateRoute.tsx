import { FC, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuth } from '..';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute: FC = () => {
    const auth = isAuth();
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!auth) return;
    //     navigate('/login', { replace: true });
    // }, [auth]);

    return auth ? <Outlet /> : <Navigate to="/login" />;
};
