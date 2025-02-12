import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/projects';
import Contact from './pages/contact';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <div>h5</div>

      {/*<nav className="navbar">
        <NavLink to="/" className="nav-link" style={{color:'red'}}>Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div> */}
    </div>
  );
};
export default App;
