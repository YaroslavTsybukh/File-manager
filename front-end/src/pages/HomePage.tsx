import { FC } from 'react';
import { useCheckProfile } from 'core/hooks/useCheckProfile';
import { Layout } from 'layout/Layout';
import { Header, Content } from 'components';

export const HomePage: FC = () => {
    useCheckProfile();

    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    );
};
