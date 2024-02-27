import { FC, ReactNode } from 'react';

export const WithoutSidebarLayout: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return <main>{children}</main>;
};
