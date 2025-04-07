import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    console.log('🍔 Menu toggle:', !isOpen);
  };

  return (
    <nav className="menu">
      {/* 🍔 Hamburger icon (solo visibile su mobile/tablet) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu list visibile solo se isOpen su mobile */}
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        {links.map((item, index) => (
          <li key={index} className="menu-item">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
