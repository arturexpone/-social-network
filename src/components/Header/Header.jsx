import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth}) => {

    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

        <div className={s.loginBlock}>
            <NavLink to='/login'>{isAuth === false ? 'Login' : login}</NavLink>
        </div>

    </header>
}

export default Header;