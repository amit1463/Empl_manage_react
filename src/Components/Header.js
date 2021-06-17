import React from 'react';
import classes from './Header.module.css';

function Header(props) {
    return (
        <header className={classes["main-header"]}>
            <div className={classes.title}>
                User Authentication
            </div>
            <button className={classes.btn} isLoggedIn={props.isAuthenticated} onClick={props.onLogout} >{props.isAuthenticated ? 'Logout' : "Admin"}</button>
        </header>
    )
}

export default Header
