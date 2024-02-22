import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux';
import { updateProfile, selectStatus } from 'core/store/slices/profileSlice';
import { paths } from 'core/config';
import { isAuth } from 'core/utils';

export const useCheckProfile = () => {
    const status = useAppSelector(selectStatus);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = isAuth();

    useEffect(() => {
        dispatch(updateProfile());
    }, []);

    useEffect(() => {
        if (status == 'error' && !auth) {
            navigate(paths.login, { replace: true });
        }
    }, [status]);
};
