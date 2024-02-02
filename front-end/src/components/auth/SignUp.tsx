import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IAuthForm } from '../../core/shared/auth.interface';

export const SignUp = () => {
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
                <h1 className="auth__title">Sign up</h1>
                <p className="auth__subtitle">Start your 30-day free trial.</p>
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
                    <button className="auth__button" type="submit">
                        Get started
                    </button>
                </form>
                <p className="auth__question">
                    Already have an account?{' '}
                    <Link to="/login" className="auth__span">
                        Log in
                    </Link>
                </p>
            </div>
        </section>
    );
};
