import { FC, ReactNode } from 'react';
import { SideBar } from 'layout/sideBar/SideBar';

export const WithSidebarLayout: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <main className="flex">
            <article>{children}</article>
            <SideBar />
        </main>
    );
};
