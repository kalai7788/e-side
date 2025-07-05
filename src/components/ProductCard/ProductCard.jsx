// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" data-aos="fade-up"> {/* AOS animation */}
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;