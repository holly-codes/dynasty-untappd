import React from 'react';
import Filters from './Filters';
import styles from '../styles/Header.module.scss';

const Header = ({currentFilter, setCurrentFilter}) => {
    return(
        <header className={styles.header}>
            <div className={styles.headingsContainer}>
                <img src="get-blessed.png" alt="get blessed"/>
                <h1>DyNasty Untappd 2022</h1>
            </div>
            <Filters currentFilter={currentFilter} filterChange={setCurrentFilter}/>
        </header>
    )
}

export default Header;