import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return(
        <header className={styles.header}>
            <img src="get-blessed.png" alt="get blessed"/>
            <div className={styles.headingsContainer}>
                <h1>DyNasty Untappd 2022</h1>
                <h2>Get Blessed</h2>
            </div>
        </header>
    )
}

export default Header;