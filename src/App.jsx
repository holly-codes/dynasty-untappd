import './App.scss';
import {React, useState} from 'react';
import Header from './components/Header';
import LeaderboardContainer from './components/LeaderboardContainer';
import Footer from './components/Footer';

function App() {
  const [currentFilter, setCurrentFilter] = useState("uniqueBeers");

  const handleFilterChange = (filterValue) => {
    setCurrentFilter(filterValue);
  }

  return (
    <div>
      <Header currentFilter={currentFilter} setCurrentFilter={handleFilterChange}/>
      <LeaderboardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
