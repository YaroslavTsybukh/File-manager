import { Link } from 'react-router-dom';

export const LogIn = () => {
    return (
        <section className="auth">
            <div className="auth__head">
                <h1 className="auth__title">Log in to your account</h1>
                <p className="auth__subtitle">
                    Welcome back! Please enter your details.
                </p>
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
