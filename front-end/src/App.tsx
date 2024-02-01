import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LogInPage, HomePage, SignUpPage } from './pages';
import { PrivateRoute } from './core/utils/router/privateRouter';

import './styles/main.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LogInPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
