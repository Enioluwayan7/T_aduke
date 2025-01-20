import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='product-id'>
        <img src= "./images/logo.png" alt='logo' className='grandeur-logo' />
        <h4 className='prod-name'>GrandeurDefined</h4>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>      
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;