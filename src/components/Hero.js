// src/components/Hero.js
import React from 'react';
// import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          AFFORDABLE & TRUSTED <br />
          <span>THAT'S A&T!</span>
        </h1>
        <p>Your Partner in Quality Without Compromise!</p>
        <ul className="hero-highlights">
          <li> Hassle-Free 1-Year Warranty</li>
          <li>Affordable Prices, No Hidden Costs</li>
          <li> Quick Support, Always Ready</li>
        </ul>
        <div className="hero-buttons">
          <a href="https://www.croma.com/computers-tablets/laptops/c/20?srsltid=AfmBOopWmPOmmVECRjLAKjZutPB5Jyjzdm5aQaScy_88Vh8BaPeQ4KEJ" className="btn primary">SHOP NOW</a>
          <a href="#chat" className="btn secondary">CHAT NOW</a>

        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/laptop-1.webp" alt="Hero Image" />
      </div>
    </section>
  );
}

export default Hero; 
