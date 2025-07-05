// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Eshop</h1>
        <p className="hero-subtitle">Discover the latest trends in fashion & accessories</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;