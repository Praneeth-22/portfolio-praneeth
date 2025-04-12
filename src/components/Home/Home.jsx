import React, { useEffect, useRef } from 'react';
import './Home.css';
import Data from './Data';

const Home = () => {
  const imgRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgRef.current) return;
      
      // Calculate mouse position relative to the center of the viewport
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      
      // Apply the inverse transform to create the "moving against" effect
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    // Add the event listener to the window
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__img" ref={imgRef}></div>
          <Data />
        </div>
        
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
        
        <div className="home__shapes">
          <div className="home__shape home__shape-1"></div>
          <div className="home__shape home__shape-2"></div>
          <div className="home__shape home__shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;