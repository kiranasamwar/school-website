import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './logo.png'; // Path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img src={logo} alt="School Logo" /> */}
       <Link to={"/"} className="nav-link-home-page"> <span className='logo-heading'>Springdale Public <br/> School</span></Link>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </label>
      <div className="navbar-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <div className="nav-item dropdown">
          <Link to="#" className="nav-link">Academics</Link>
          <div className="dropdown-menu">
            <Link to="/primary" className="dropdown-item">Primary</Link>
            <Link to="/secondary" className="dropdown-item">Secondary</Link>
            <Link to="/senior-secondary" className="dropdown-item">Senior Secondary</Link>
          </div>
        </div>
        <Link to="/admissions" className="nav-link">Admissions</Link>
        <Link to="/faculty" className="nav-link">Faculty</Link>
        <Link to="/students" className="nav-link">Students</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
