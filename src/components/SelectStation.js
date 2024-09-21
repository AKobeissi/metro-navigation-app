import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SelectStation.css';
import BottomNavBar from './BottomNavBar';

function SelectStation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state || {};

  const stations = [
    { name: 'Vendome', line: 'orange' },
    { name: 'Villa-Maria', line: 'orange' },
    { name: 'Verdun', line: 'green' },
  ];

  const handleStationSelect = (station) => {
    navigate('/enter-or-leave', { 
      state: { 
        stationName: station.name, 
        stationLine: station.line,
        destination 
      } 
    });
  };
  //const handleStationSelect = (station) => {
   // navigate('/enter-or-leave', { state: { station } });
  //};

  return (
    <div className="SelectStation">
      <h2>Select the Right Station</h2>
      <p>Destination: {destination}</p>
      {stations.map((station, index) => (
        <button
          key={index}
          className={`station-button ${station.line}`}
          onClick={() => handleStationSelect(station)}
        >
          {station.name}
        </button>
      ))}
      <BottomNavBar />
    </div>
  );
}

export default SelectStation;