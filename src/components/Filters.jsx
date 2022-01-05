import React from 'react';
import styles from '../styles/Filters.module.scss';

const Filters = ({currentFilter, setCurrentFilter}) => {
    return (
        <div className={styles.filterContainer}>
            <button className={currentFilter === "uniqueBeers" ? "active" : ""} value="uniqueBeers" onClick={setCurrentFilter}>Unique Beers</button>
            <button className={currentFilter === "badges" ? "active" : ""} value="badges" onClick={setCurrentFilter}>Badges</button>
            <button className={currentFilter === "bestDrinkingBuddy" ? "active" : ""} value="bestDrinkingBuddy" onClick={setCurrentFilter}>Best Drinking Buddy</button>
            <button className={currentFilter === "worstBeer" ? "active" : ""} value="worstBeer" onClick={setCurrentFilter}>Worst Beer</button>
        </div>
    )
}

export default Filters;