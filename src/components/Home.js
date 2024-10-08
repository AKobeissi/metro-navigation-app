import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.svg';
import BottomNavBar from './BottomNavBar';

function Home() {
  return (
    <div className="Home">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1>Metro Navigation Assistant</h1>
      <Link to="/search" className="button">New Search</Link>
      <Link to="/saves" className="button">My Saves</Link>
      <BottomNavBar />
    </div>
  );
}

export default Home;