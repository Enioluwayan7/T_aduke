import React from 'react';

const ContactUs = () => {
  return (
    <div className="linktree-container">
      <header>
        <nav className="navbar">
          <div className='product-id'>
            <img src= "./images/logo.png" alt='logo' className='grandeur-logo' />
            <h4 className='prod-name'>GrandeurDefined</h4>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home <i class="bi bi-house-door-fill"></i> </a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./login">Login</a></li>
          </ul>
        </nav>
      </header>
      <div className='allContainer'>
        <div className='container'>
            <div className="profile-image">
              <img src="./images/logo.png" alt="Grandeur Defines Logo" />
              <div>
                <p>Shop Now 🛒</p>
              </div>
            </div>
        </div>

        <div className='linktrees'>
          <div className='links'>
            <p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social'>
                <i class="bi bi-instagram"></i>
              </a>
            </p>
            <p>
              <a className="link-button" href="https://wa.me/07055657968" >Message Henny</a>
            </p>
            <p><i class="bi bi-three-dots-vertical"></i></p>
          </div>

          <div className='links'>
            <p>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='social'>
                <i class="bi bi-whatsapp"></i>
              </a>
            </p>
            <p>
              <a className="link-button" href="https://wa.me/09034463620">Message Emmanuel</a>
            </p>
            <p><i class="bi bi-three-dots-vertical"></i></p>
          </div>

          <div className='links'>
            <p>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className='social'>
              <i class="bi bi-tiktok"></i>
            </a>
            </p>
            <p>
            <a className="link-button" href="https://instagram.com/">Instagram</a>
            </p>
            <p><i class="bi bi-three-dots-vertical"></i></p>
          </div>

          <div className='links'>
            <p>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className='social'>
              <i class="bi bi-snapchat"></i>
            </a>
            </p>
            <p>
            <a className="link-button" href="https://tiktok.com">TikTok</a>
            </p>
            <p><i class="bi bi-three-dots-vertical"></i></p>
          </div>
        </div>

        <footer>
          <p>Join Grandeur Defines on Linktree</p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;