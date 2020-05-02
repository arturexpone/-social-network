import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth, logout}) => {
    
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

        <div className={s.loginBlock}>
            {isAuth ? <div>
                    {login}
                    <button onClick={logout}> Log out </button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>

    </header>
}

export default Header;