// HomePage.js
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Footer from '../components/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: 'offer1.png', alt: 'Offer 1' },
    { src: 'offer2.png', alt: 'Offer 2' },
    { src: 'offer3.jpg', alt: 'Offer 3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search products..." />
        <button className="search-icon">🔍</button>
      </div>

      <div className="latest-offers">
        <h2>Latest Offers</h2>
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.src} alt={slide.alt} className="slider-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="best-products">
        <h2>Best Products</h2>
        <div className="card-container">
          <div className="card">
            <img src="path/to/best-product1.jpg" alt="Best Product 1" />
            <h3>Product 1</h3>
            <p>Description of product 1.</p>
          </div>
          <div className="card">
            <img src="path/to/best-product2.jpg" alt="Best Product 2" />
            <h3>Product 2</h3>
            <p>Description of product 2.</p>
          </div>
        </div>
      </div>

      <div className="latest-deals">
        <h2>Latest Deals on Phone</h2>
        <div className="card-container">
          <div className="card">
            <img src="deal-phone1.jpg" alt="Phone Deal 1" />
            <h3>Phone 1</h3>
            <p>Description of phone deal 1.</p>
          </div>
          <div className="card">
            <img src="deal-phone2.jpg" alt="Phone Deal 2" />
            <h3>Phone 2</h3>
            <p>Description of phone deal 2.</p>
          </div>
          <div className="card">
            <img src="deal-phone2.jpg" alt="Phone Deal 2" />
            <h3>Phone 2</h3>
            <p>Description of phone deal 2.</p>
          </div>
          <div className="card">
            <img src="deal-phone2.jpg" alt="Phone Deal 2" />
            <h3>Phone 2</h3>
            <p>Description of phone deal 2.</p>
          </div>  
        </div>
      </div>

      <div className="shoes-category">
        <h2>Shoes Category</h2>
        <div className="card-container">
          <div className="card">
            <img src="shoes1.jpg" alt="Shoe 1" />
            <h3>Shoe 1</h3>
            <p>Description of shoe 1.</p>
          </div>
          <div className="card">
            <img src="shoes2.jpg" alt="Shoe 2" />
            <h3>Shoe 2</h3>
            <p>Description of shoe 2.</p>
          </div>
          <div className="card">
            <img src="shoes2.jpg" alt="Shoe 2" />
            <h3>Shoe 2</h3>
            <p>Description of shoe 2.</p>
          </div>
          <div className="card">
            <img src="shoes2.jpg" alt="Shoe 2" />
            <h3>Shoe 2</h3>
            <p>Description of shoe 2.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
