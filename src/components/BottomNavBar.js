import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import './BottomNavBar.css'; // Make sure you have this CSS file for styling

function BottomNavBar() {
  return (
    <div className="bottom-nav-bar">
      <Link to="/" className="nav-link">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link to="/search" className="nav-link">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </Link>
      <Link to="/saves" className="nav-link">
        <FontAwesomeIcon icon={faHeart} />
        <span>Saves</span>
      </Link>
    </div>
  );
}

export default BottomNavBar;
