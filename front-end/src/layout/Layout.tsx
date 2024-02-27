import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { paths } from 'core/config';
import { WithoutSidebarLayout, WithSidebarLayout } from './variants';

interface IProps {
    children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname == paths.login || pathname == paths.signup ? (
                <WithoutSidebarLayout children={children} />
            ) : (
                <WithSidebarLayout children={children} />
            )}
        </>
    );
};
