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
        <div className="brand">
          <h1>MaeLu Bordados</h1>
          <h1>Bordados personalizados e feitos com muito amor!</h1>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;