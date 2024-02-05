import { ReactNode } from 'react';
import { Route } from 'react-router-dom';

export const MultiRoute = (el: ReactNode, ...paths: string[]) => {
    return paths.map((path) => <Route key={path} element={el} path={path} />);
};
