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
        <li><Link to={"/product"}>Shop All</Link></li>
        <li><Link to={"/about"}>Our Brand</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
      <div className='loginCont'>
        <img src='./images/Login.jpg' alt='login' className='login-img' />
        <Link to={"/login"} className='login-name'>Login</Link>
      </div>
    </nav>
  );
  
}

export default Navbar;