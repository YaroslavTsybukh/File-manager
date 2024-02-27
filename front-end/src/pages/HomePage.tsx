import { FC } from 'react';
import { useCheckProfile } from 'core/hooks/useCheckProfile';
import { Layout } from 'layout/Layout';

export const HomePage: FC = () => {
    useCheckProfile();

    return (
        <Layout>
            <section></section>
        </Layout>
    );
};
