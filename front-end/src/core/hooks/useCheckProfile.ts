import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux';
import { updateProfileUser, selectStatus } from 'core/store/slices/userSlice';
import { paths } from 'core/config';
import { isAuth } from 'core/utils';

export const useCheckProfile = () => {
    const status = useAppSelector(selectStatus);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = isAuth();

    useEffect(() => {
        dispatch(updateProfileUser());
    }, []);

    useEffect(() => {
        if (status == 'error' && !auth) {
            navigate(paths.login, { replace: true });
        }
    }, [status]);
};
