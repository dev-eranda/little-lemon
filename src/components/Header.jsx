import React from 'react';
import logo from '../assets/Logo.svg';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="little lemon logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
