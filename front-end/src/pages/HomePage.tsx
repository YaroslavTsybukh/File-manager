import { FC, useEffect } from 'react';
import { Layout } from 'layout/Layout';
import { useAppDispatch } from 'core/hooks/redux';
import { updateProfile } from 'core/store/slices/profileSlice';

export const HomePage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateProfile());
    }, []);

    return (
        <Layout>
            <section>
                <h1>HomePage</h1>
            </section>
        </Layout>
    );
};
