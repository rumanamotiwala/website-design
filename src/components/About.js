import React from 'react';
// import './AboutSection.css'; 

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <p>
          At A&amp;T Services Inc., we take pride in providing high-quality refurbished computers and laptops at unbeatable prices.
          With years of experience in the Indian IT industry, we’ve built a strong reputation for offering reliable hardware solutions,
          backed by prompt, expert support. Our clients trust us not only for our exceptional products but also for our outstanding customer service,
          often referring us to others for their hardware needs.
        </p>
        <a href="#" className="read-more-btn">READ MORE</a>
      </div>
    </section>
  );
};

export default AboutSection;
