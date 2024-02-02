import { FC } from 'react';
import { Auth } from '../components';
import { Layout } from '../layout/Layout';
import { useLocation } from 'react-router-dom';

import { paths } from '../core/config';

export const AuthPage: FC = () => {
    const { pathname } = useLocation();

    return (
        <Layout>
            {pathname == paths.login && (
                <Auth
                    data={{
                        title: 'Log in to your account',
                        subtitle: 'Welcome back! Please enter your details.',
                        button: 'Sign in',
                        question: {
                            text: 'Don’t have an account?',
                            span: 'Sign up',
                        },
                        link: paths.signup,
                        pathname,
                    }}
                />
            )}
            {pathname == paths.signup && (
                <Auth
                    data={{
                        title: 'Sign up',
                        subtitle: 'Start your 30-day free trial.',
                        button: 'Get started',
                        question: {
                            text: 'Already have an account?',
                            span: 'Log in',
                        },
                        link: paths.login,
                        pathname,
                    }}
                />
            )}
        </Layout>
    );
};
