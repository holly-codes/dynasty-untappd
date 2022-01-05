import {React, useState} from 'react';
import styles from '../styles/Leaderboard.module.scss';
import Filters from './Filters';

const LeaderboardContainer = () => {
    const [currentFilter, setCurrentFilter] = useState("uniqueBeers");

    return (
        <>
            <Filters currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
        </>
    )
}

export default LeaderboardContainer;