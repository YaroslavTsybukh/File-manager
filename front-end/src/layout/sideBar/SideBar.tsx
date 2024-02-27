import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { sidebarItems } from './sidebarItems';

export const SideBar = () => {
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
                <button className="aside__logout">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
};
