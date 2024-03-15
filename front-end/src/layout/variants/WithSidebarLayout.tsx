import { FC, ReactNode } from 'react';
import { SideBar } from 'layout/sideBar/SideBar';

export const WithSidebarLayout: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <main className="flex">
            <SideBar />
            <article>{children}</article>
        </main>
    );
};
