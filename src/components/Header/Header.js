import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <button className="menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="brand-titule">
          <h1>MaeLu Bordados</h1>
          <div className="brand">
          <h1>Bordados personalizados e feitos com muito amor!</h1>
        </div>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <nav className={`sidebar  ${isMenuOpen ? 'open' : ''}` }>
        <ul>
          <li><a href="#">Bordados</a></li>
          <li><a href="#">Bory bebê</a></li>
          <li><a href="#">Fraldas</a></li>
          <li><a href="#">Marca página</a></li>
          <li><a href="#">Toalhas de bebê</a></li>
          <li><a href="#">Toalhas de escolinha</a></li>
          <li><a href="#">Talha de lavado</a></li>
          <li><a href="#">Toalha de rosto</a></li>
          <li><a href="#">Últimos lançamentoscls</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;