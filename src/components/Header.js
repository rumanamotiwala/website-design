import React, { useState } from 'react';
// import './App.css';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="navbar">
      {/* LEFT SIDE: Logo + Navigation */}
      <div className="nav-left">
     
       <div className="logo-text">
  <div className="logo-main">A&T</div>
  <div className="logo-sub">SERVICES INC</div>
</div>



        <nav className=" nav-center nav-links">
          <a href="#products">PRODUCTS</a>
          <a href="#categories">CATEGORIES</a>
          <a href="#about">ABOUT US</a>
        </nav>
      </div>

      {/* RIGHT SIDE: Contact Info + Buttons */}
      <div className="nav-right">
        <div className="contact-info">
          <video
            className="call-icon-video"
            src="/assets/call-icon.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <span className="phone-number">+91 95 9909 0603</span>
        </div>

        <button className="enquire-btn">Enquire Now</button>
        <button className="menu-btn" onClick={toggleSidebar}>Menu</button>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <a href="#home" onClick={closeSidebar}>Home</a>
        <a href="#about" onClick={closeSidebar}>About</a>
        <a href="#services" onClick={closeSidebar}>Services</a>
        <a href="#contact" onClick={closeSidebar}>Contact</a>
      </div>

      {/* Optional overlay for dim background */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </header>
  );
}

export default Header;
