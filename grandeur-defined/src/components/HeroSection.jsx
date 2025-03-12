import React from 'react';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>THE GRANDEUR COLLECTION'S</h1>
        <p>Discover the latest fashion trends with us.</p>
        <Link to={"/product"} className="shop-now">Shop Now</Link>
      </div>
    </section>
  );
}

export default HeroSection;