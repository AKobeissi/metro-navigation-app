import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

function Search() {
  const [station, setStation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/navigation', { state: { station } });
  };

  return (
    <div className="Search">
      <h2>Where are you going?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={station}
          onChange={(e) => setStation(e.target.value)}
          placeholder="Enter station name"
        />
        <button type="submit" className="button">Search</button>
      </form>
      <button className="button">Voice Input</button>
      <BottomNavBar />
    </div>
  );
}

export default Search;