import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa'; // Importing search and bell icons from react-icons
import profilePic from '../images/logo.png'; // Replace with the correct path to the profile image
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-welcome">
        <h2>Welcome back, Gnotra!</h2>
        <p>It is the best time to manage your finances.</p>
      </div>
      <div className="header-icons">
        <FaSearch className="header-icon" />
        <FaBell className="header-icon" />
        <div className="header-profile-container">
          <img src={profilePic} alt="Profile" className="header-profile-img" />
          <span className="header-profile-name">Gnotra</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
