import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = ['Platform', 'Solutions', 'People-First', 'Customers', 'About'];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">OperaFlow</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
              </li>
            ))}
          </ul>
          
          <div className="header-actions">
            <a href="#login" className="btn btn-outline">Login</a>
            <a href="#get-started" className="btn btn-primary">Get Started</a>
          </div>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;