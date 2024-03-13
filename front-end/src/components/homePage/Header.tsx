import { FC } from 'react';
import { BellRing, CircleUserRound, Search } from 'lucide-react';

import { selectUser } from 'core/store/slices/userSlice';
import { useAppSelector } from 'core/hooks/redux';

export const Header: FC = () => {
    const state = useAppSelector(selectUser);
    return (
        <section className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__block-left">
                        <Search size={18} color="#5F6367" />
                        <input
                            className="header__input"
                            type="text"
                            placeholder="Search for file"
                        />
                    </div>
                    <div className="header__block-right">
                        <BellRing size={30} />
                        <div className="user">
                            <CircleUserRound size={30} />
                            {state && (
                                <p className="user__email">{state.email}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
