import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
    return <main>{children}</main>;
};
