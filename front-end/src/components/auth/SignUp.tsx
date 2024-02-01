import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <section className="auth">
            <div className="auth__head">
                <h1 className="auth__title">Sign up</h1>
                <p className="auth__subtitle">Start your 30-day free trial.</p>
                <form className="auth__form">
                    <div className="auth__form-block">
                        <label className="auth__label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="auth__input"
                            type="email"
                            id="email"
                            placeholder="Email"
                        />
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
                        />
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
