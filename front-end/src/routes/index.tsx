import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthPage, HomePage } from '../pages';
import { PrivateRoute, MultiRoute } from '../core/utils';
import { paths } from '../core/config';

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path={paths.home} element={<HomePage />} />
                </Route>
                {MultiRoute(<AuthPage />, paths.login, paths.signup)}
            </Routes>
        </BrowserRouter>
    );
};
