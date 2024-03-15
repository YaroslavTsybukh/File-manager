import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { logoutUser } from 'core/store/slices/userSlice';
import { useAppDispatch } from 'core/hooks/redux';
import { paths } from 'core/config';
import { sidebarItems } from './sidebarItems';

export const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userLogout = async () => {
        await dispatch(logoutUser());
        navigate(paths.login, { replace: true });
    };

    return (
        <aside className="aside">
            <div className="aside__logo">LOGO</div>
            <nav className="aside__navigation">
                <ul className="aside__list">
                    {sidebarItems.map(({ id, content, path, icon: Icon }) => (
                        <li className="aside__item" key={id}>
                            <Link to={path} className="aside__link">
                                <Icon size={18} />
                                {content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="aside__footer">
                <button className="aside__logout" onClick={userLogout}>
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
};
