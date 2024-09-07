import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
import BottomNavBar from './BottomNavBar';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { station } = location.state || {};
  const [currentSection, setCurrentSection] = useState(0);
 // const steps = ['Entrance', 'Ticket Area', 'Platform', 'Train'];

  const sections = [
    { name: 'Entrance Floor', color: '#f0f0f0' },
    { name: 'Ticket Floor', color: '#d9d9d9' },
    { name: 'Other Ticket Floor', color: '#bfbfbf' },
    { name: 'Metro Floor', color: '#a6a6a6' },
  ];

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };


  return (
    <div className="Navigation">
        <header className="navigation-header">
            <span className="station-name">
                <span className="station-indicator"></span> {station || 'Vendome Station'}
            </span>
        </header>
        <div className="map-section" style={{ backgroundColor: sections[currentSection].color }}>
            <h3>{sections[currentSection].name}</h3>
            {/* Replace with actual map representation */}
            <div className="map-placeholder">Map Placeholder</div>
        </div>
        <div className="navigation-buttons">
            <button onClick={handleGoBack} className="button back-button">Back</button>
            <button onClick={handleNextSection} className="button">Next Section</button>
        </div>
        <BottomNavBar />
    </div>
  );
}

export default Navigation;