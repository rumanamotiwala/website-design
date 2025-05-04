import React from 'react';

const brandsData = [
  {
    img:'/assets/dell.webp', // update path as needed
    description: 'Dell Refurbished Laptops',
    button: 'SHOP NOW',
  },
  {
    img: '/assets/hp.webp',
    description: 'HP Refurbished Laptops',
    button: 'SHOP NOW',
  },
  {
    img: '/assets/lenovo.webp',
    description: 'Lenovo Refurbished Laptops',
    button: 'SHOP NOW',
  },
];

const Brands = () => {
  return (
    <section className="brands-section" id="brands">
      <h2 className="brands-title">
  <span className="small-heading">Shop By</span><br />
  <span className="big-heading">BRANDS</span>
</h2>

      <div className="brands-container">
        {brandsData.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.img} alt={brand.description} className="brand-img" />
            <p className="brand-desc">{brand.description}</p>
            <button className="shop-btn">{brand.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
