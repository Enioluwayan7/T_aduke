import React from 'react';

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Step into Style</h1>
        <i class="bi bi-house-heart"></i>
        <p>Discover the latest fashion trends with us.</p>
        <a href="#products" className="shop-now">Shop Now</a>
      </div>
    </section>
  );
}

export default HeroSection;