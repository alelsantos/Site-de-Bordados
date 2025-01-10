import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 MaeLu Bordados. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;