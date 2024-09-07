import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
import BottomNavBar from './BottomNavBar';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { station } = location.state || {};
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      name: 'Entrance Floor',
      elements: [
        { type: 'line', x1: 50, y1: 50, x2: 250, y2: 50, color: '#000' }, // Wall
        { type: 'polygon', points: '150,60 170,100 130,100', color: '#555' }, // Stairs (Trapezoid)
        { type: 'arrow', x: 220, y: 60, direction: 'right' }, // Arrow to next section
      ],
    },
    {
      name: 'Ticket Floor',
      elements: [
        { type: 'line', x1: 50, y1: 100, x2: 250, y2: 100, color: '#000' }, // Wall
        { type: 'rect', x: 100, y: 110, width: 50, height: 30, color: '#888' }, // Ticket Machine
        { type: 'arrow', x: 220, y: 110, direction: 'right' }, // Arrow to next section
      ],
    },
    {
      name: 'Other Ticket Floor',
      elements: [
        { type: 'line', x1: 50, y1: 150, x2: 250, y2: 150, color: '#000' }, // Wall
        { type: 'polygon', points: '130,160 150,200 110,200', color: '#777' }, // Stairs (Trapezoid)
        { type: 'arrow', x: 220, y: 160, direction: 'right' }, // Arrow to next section
      ],
    },
    {
      name: 'Metro Floor',
      elements: [
        { type: 'line', x1: 50, y1: 200, x2: 250, y2: 200, color: '#000' }, // Wall
        { type: 'arrow', x: 220, y: 210, direction: 'right' }, // Arrow to next section
      ],
    },
  ];

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Function to render SVG elements based on section data
  const renderSvgElements = (elements) => {
    return elements.map((el, index) => {
      switch (el.type) {
        case 'line':
          return <line key={index} x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke={el.color} strokeWidth="4" />;
        case 'polygon':
          return <polygon key={index} points={el.points} fill={el.color} />;
        case 'rect':
          return <rect key={index} x={el.x} y={el.y} width={el.width} height={el.height} fill={el.color} />;
        case 'arrow':
          return (
            <polygon
              key={index}
              points={`${el.x},${el.y} ${el.x + 20},${el.y - 10} ${el.x + 20},${el.y + 10}`}
              fill="blue"
              onClick={handleNextSection}
              style={{ cursor: 'pointer' }}
            />
          );
        default:
          return null;
      }
    });
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
        <svg width="300" height="200" className="svg-map">
          {renderSvgElements(sections[currentSection].elements)}
        </svg>
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