import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import USP from './components/USP';
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Brands from './components/Brands';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';






function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Header />
      <section className="hero"><Hero /></section>
      <section className="usp"><USP /></section>
      <section className="products"><Products /></section>
      <section className="categories"><Categories /></section>
      <section className="about"><About /></section>
      <section className="brands"><Brands /></section>
      <section className="price"><Price /></section>
<section className="testimonials"><Testimonials /></section>
<section className="enquiry"><EnquiryForm /></section>

<section className="faq">
  <FAQ />
</section>

      <Footer />
    </div>
  );
}

export default App;
