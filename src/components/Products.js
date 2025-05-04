import React from 'react';
// import './App.css'; 

function ProductList() {
  const products = [
    {
      name: 'HP EliteBook 840 G5 i5-8th Gen',
      price: '₹ 21,200',
      image: '/assets/lap(1).webp',
    },
    {
      name: 'Lenovo ThinkPad T470 i5-7th Gen',
      price: '₹ 13,156',
      image: '/assets/lap(2).webp',
    },
    {
      name: 'Dell Latitude 5420 i5-11th Gen',
      price: '₹ 23,300',
      image: '/assets/lap(3).webp',
    },
    {
      name: 'Dell Latitude 5400 i5-8th Gen',
      price: '₹ 17,161',
      image: '/assets/lap(4).webp',
    },
    {
      name: 'Lenovo ThinkPad T480 i5-8th Gen',
      price: '₹ 14,872',
      image: '/assets/lap(5).webp',
    },
    {
      name: 'Apple Macbook Air M1 A2337',
      price: '₹ 45,000',
      image: '/assets/lap(6).webp',
    },
  ];

  return (
    <section className="products" id="products">
      <p>PRODUCTS</p>
      <h2 className="section-title">BEST SELLING PRODUCTS</h2>

      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <div className="buttons">
              <a href="#buy" className="btn">Buy Now</a>
              <a href="#chat" className="btn secondary">Chat Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
