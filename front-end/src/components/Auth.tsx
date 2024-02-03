import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
    AUTH_FORM_DEFAULT_VALUES,
    AUTH_FORM_VALIDATION_VALUES,
} from 'core/constants';

import { IAuthForm, ITemplateData } from 'core/shared/auth.interface';

interface IProps {
    data: ITemplateData;
}

export const Auth: FC<IProps> = ({
    data: { title, subtitle, button, question, link, pathname },
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthForm>(AUTH_FORM_DEFAULT_VALUES);

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        console.log(data);
    };

    return (
        <section className="auth">
            <div className="auth__head">
                <h1 className="auth__title">{title}</h1>
                <p className="auth__subtitle">{subtitle}</p>
                <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="auth__form-block">
                        <label className="auth__label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="auth__input"
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register('email', AUTH_FORM_VALIDATION_VALUES)}
                        />
                        {errors.email && (
                            <p className="error-field">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="auth__form-block">
                        <label className="auth__label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="auth__input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register(
                                'password',
                                AUTH_FORM_VALIDATION_VALUES,
                            )}
                        />
                        {errors.password && (
                            <p className="error-field">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    {pathname == '/login' && (
                        <div className="auth__forgot">Forgot password</div>
                    )}
                    <button className="auth__button" type="submit">
                        {button}
                    </button>
                </form>
                <p className="auth__question">
                    {question.text}{' '}
                    <Link to={link} className="auth__span">
                        {question.span}
                    </Link>
                </p>
            </div>
        </section>
    );
};
