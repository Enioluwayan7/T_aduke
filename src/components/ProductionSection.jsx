import React, { useState } from 'react';
import '../SlideBtn.css'


{/*
const ImageSlider = () => {
  const images = [
    "./images/Eve.jpg",
    "./images/Aduke.jpg",
    "./images/DamDam.jpeg",
    "./images/Funmilayo.jpg",
    "./images/Grandeur.jpg",
    "./images/Olufayo.jpeg",
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  return (
    <div className='slider'>
      <div className='slides' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img src={image} alt={`Slide ${index + 1}`} key={index} />
          ))}
      </div>
      <div className='buttons'>
        <button className='prev' onClick={prevSlide}> ❮ </button>
      </div>
      <div className='buttons'>
        <button className='next' onClick={nextSlide}> ❯ </button>
      </div>  
    </div>
  );
};

export default ImageSlider;

*/}

function ProductSection() {
  return (
    <section className="products" id="products">
      <h2 className='col-head'>Our Collection's</h2>
      <div className="product-list">
        <div className='prod-item'>
          <img src='./images/Eve.jpg' alt= 'Eve maxi Dress' />
          <div className='prod-describe'>
            <p>Eve maxi Dress</p>
            <p className='price'>£80</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Aduke.jpg' alt= 'Aduke black dress with aso oke' />
           <div className='prod-describe'>
            <p>Aduke black dress with aso-oke Rose</p>
            <p className='price'>£80</p>
            <button>Add to Cart</button>
           </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Funmilayo.jpg' alt= 'FUNMILAYO reflective maxi dress' />
          <div className='prod-describe'>
            <p>FUNMILAYO reflective maxi dress</p>
            <p className='price'>£120</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Olufayo.jpeg' alt= 'Olufayo Black Maxi reflective flare dress' />
          <div className='prod-describe'>
            <p>Olufayo Black Maxi reflective flare dress</p>
            <p className='price'>£89</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/DamDam.jpeg' alt= 'DamDam luxe blazer' />
          <div className='prod-describe'>
            <p>DamDam luxe blazer</p>
            <p className='price'>£150</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Temilade.jpeg' alt= 'Temilade Gradient Laser Texture maxi dress' />
          <div className='prod-describe'>
            <p>Temilade Gradient Laser Texture maxi dress</p>
            <p className='price'>£120</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Grandeur.jpg' alt= 'Grandeur short black dress with white flower like design' />
          <div className='prod-describe'>
            <p>Grandeur short black dress with white flower like design </p>
            <p className='price'>£80</p>
            <Link to={"./cart"}>Add to Cart</Link>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Ifelodun.jpg' alt= 'Ifelodun maxi dress with asooke pocket and bush tassel ' />
          <div className='prod-describe'>
            <p>Ifelodun maxi dress with asooke pocket and bush tassel </p>
            <p className='price'>£100</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Irepodun.jpg' alt= 'IREPODUN maxi dress ' />
          <div className='prod-describe'>
            <p>IREPODUN maxi dress </p>
            <p className='price'>£200</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Morenike.jpg' alt= 'MORENIKE maxi dress with bush tassel ' />
          <div className='prod-describe'>
            <p>MORENIKE maxi dress with bush tassel </p>
            <p className='price'>£100</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className='prod-item'>
          <img src='./images/Rere.jpg' alt= 'RERE maxi dress' />
          <div className='prod-describe'>
            <p>RERE maxi dress</p>
            <p className='price'>£100</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;