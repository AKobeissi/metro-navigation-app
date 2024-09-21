import logo from '../src/assets/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import SelectStation from './components/SelectStation';
import EnterOrLeave from './components/EnterOrLeave';
import Saves from './components/Saves';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saves" element={<Saves />} />
          <Route path="/search" element={<Search />} />
          <Route path="/select-station" element={<SelectStation />} />
          <Route path="/enter-or-leave" element={<EnterOrLeave />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
 // return (
  //  <div className="App">
   //   <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
     //   <p>
      //    Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
        //  className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
         // rel="noopener noreferrer"
       // >
        //  Learn React
       // </a>
     // </header>
    //</div>
  //);
//}

//export default App;
