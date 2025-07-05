// src/pages/Home.jsx
import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import Modal from '../components/Modal/Modal';
import './Home.css';
// Import product images
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png'; // Fixed extension
import product10 from '../assets/product10.png'; // Fixed extension
import product11 from '../assets/product11.png';

import { useState } from 'react';

const products = [
  {
    title: "Mobile case",
    price: 49.99,
    image: product1,
  },
  {
    title: "Airpods",
    price: 89.99,
    image: product2,
  },
  {
    title: "Joket",
    price: 599.99,
    image: product3,
  },
  {
    title: "Wireless mouse",
    price: 129.99,
    image: product4,
  },
  {
    title: "Wireless Headphone", // Unique title
    price: 39.99,
    image: product5,
  },
  {
    title: "Keyboard", // Unique title
    price: 79.99,
    image: product6,
  },
  {
    title: "Charger", // Unique title
    price: 69.99,
    image: product7,
  },
  {
    title: "Camera", // Unique title
    price: 149.99,
    image: product8,
  },
  {
    title: "Shoe", // Unique title
    price: 29.99,
    image: product9,
  },
  {
    title: "Watch", // Unique title
    price: 24.99,
    image: product10,
  },
  {
    title: "Iphone", // Unique title
    price: 34.99,
    image: product11,
  },
];



const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="products-section">
      <h2 className="products-heading">Featured Products</h2>

      {/* Example Button to Open Modal */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button className="newsletter-button" onClick={() => setIsModalOpen(true)}>
          Subscribe to Newsletter
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on new products and exclusive offers.</p>
        <input type="email" placeholder="Enter your email" className="modal-input" />
        <button className="modal-button">Subscribe</button>
      </Modal>

      {/* Product Cards */}
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;