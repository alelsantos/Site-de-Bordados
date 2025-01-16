import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 50,00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', price: 'R$ 70,00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produto 3', price: 'R$ 100,00', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <nav className="nav-bar">
          <div className="navbar-content">
            <div className="navbar-item">
              <i className="fab fa-facebook"></i> Maelu Bordados
            </div>
            <div className="navbar-item">
              <i className="fab fa-instagram"></i> @maelubordados
            </div>
            <div className="navbar-item">
              <i className="fab fa-whatsapp"></i> (19) 99735-5489
            </div>
          </div>
        </nav>
        <h1>PRODUTOS</h1>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
