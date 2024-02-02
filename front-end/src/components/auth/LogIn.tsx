import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IAuthForm } from '../../core/shared/auth.interface';

export const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthForm>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        console.log(data);
    };

    return (
        <section className="auth">
            <div className="auth__head">
                <h1 className="auth__title">Log in to your account</h1>
                <p className="auth__subtitle">
                    Welcome back! Please enter your details.
                </p>
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
                            {...register('email', {
                                required: 'Это поле должно быть заполнено',
                                minLength: {
                                    value: 5,
                                    message: 'Должно быть минимум 5 символов',
                                },
                            })}
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
                            {...register('password', {
                                required: 'Это поле должно быть заполнено',
                                minLength: {
                                    value: 5,
                                    message: 'Должно быть минимум 5 символов',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="error-field">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="auth__forgot">Forgot password</div>
                    <button className="auth__button" type="submit">
                        Sign in
                    </button>
                </form>
                <p className="auth__question">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="auth__span">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
};
