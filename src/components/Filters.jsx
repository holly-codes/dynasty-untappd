import React from 'react';
import styles from '../styles/Filters.module.scss';

const Filters = ({currentFilter, setCurrentFilter}) => {
    return (
        <>
            <select className={styles.filter} onChange={setCurrentFilter} value={currentFilter}>
                <option key="uniqueBeers" value="uniqueBeers">Unique Beer Checkins</option>
                <option key="badges" value="badges">Badges</option>
                <option key="bestDrinkingBuddy" value="drinkingBuddy">Best Drinking Buddy</option>
                <option key="worstBeer" value="worstBeer">Worst Beer</option>
            </select>
        </>
    )
}

export default Filters;