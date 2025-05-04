import React from 'react';
// import './PriceSection.css';

const priceData = [
  {
    title: 'Under ₹20,000',
    description: 'Budget-friendly options with great performance.',
    linkText: 'SHOP NOW',
  },
  {
    title: 'Under ₹30,000',
    description: 'Perfect balance of affordability and power.',
    linkText: 'SHOP NOW',
  },
  {
    title: 'Above ₹30,000',
    description: 'High-performance laptops for all your needs.',
    linkText: 'SHOP NOW',
  },
];

const PriceSection = () => {
  return (
    <section className="price-section">
      <h2 className="price-title">PRICE</h2>
      <div className="price-container">
        {priceData.map((item, index) => (
          <div className="price-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#" className="shop-link">{item.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceSection;
