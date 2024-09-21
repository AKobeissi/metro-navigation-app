import React from 'react';
import { Link } from 'react-router-dom';
import './Saves.css';
import BottomNavBar from './BottomNavBar';

function Saves() {
  // This is a mock-up of saved paths. In a real app, you'd fetch this from a database or local storage
  const savedPaths = [
    { id: 1, name: 'Home to Work' },
    { id: 2, name: 'Work to Gym' },
    { id: 3, name: 'Home to Mall' },
  ];

  return (
    <div className="Saves">
      <h2>My Saved Paths</h2>
      {savedPaths.map((path) => (
        <Link key={path.id} to={`/path/${path.id}`} className="saved-path-link">
          {path.name}
        </Link>
      ))}
      <BottomNavBar />
    </div>
  );
}

export default Saves;