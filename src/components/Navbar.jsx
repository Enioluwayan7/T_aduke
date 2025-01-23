import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='product-id'>
        <img src= "./images/logo.png" alt='logo' className='grandeur-logo' />
        <h4 className='prod-name'>GrandeurDefined</h4>
      </div>
      <ul className="nav-links">
        <li><Link to={"/"}>Home</Link></li>      
        <li><Link to={"/product"}>Products</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><a href="./login">Login</a></li>
      </ul>
    </nav>
  );
  
}

export default Navbar;