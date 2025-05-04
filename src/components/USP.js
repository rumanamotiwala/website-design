// src/components/USP.js
import React from 'react';
// import './USP.css';

function USP() {
  return (
    <section className="usp">
      <div className="usp-content">
        <p>UNIQUE SELLING PROPOSITION</p>
        <h2>WE ARE SPECIALIZED IN</h2>

        {/* Sliding Container Wrapper */}
        <div className="usp-items-slider">
          <div className="usp-items">
            {/* First Set of USP items */}
            <div className="usp-item">
              <img src="/assets/10-day-replacement.webp" alt="10 Day Replacement" />
              <span>10 Day Replacement</span>
            </div>
            <div className="usp-item">
              <img src="/assets/amc.webp" alt="After-Sales Service" />
              <span>Reliable After-Sales Service</span>
            </div>
            <div className="usp-item">
              <img src="/assets/free-delivery.webp" alt="Free Delivery" />
              <span>Free Delivery</span>
            </div>
            <div className="usp-item">
              <img src="/assets/1-year-warranty.webp" alt="1 Year Warranty" />
              <span>1 Year Warranty</span>
            </div>
            <div className="usp-item">
              <img src="/assets/72-Qualitty-check.webp" alt="72 Quality Checks" />
              <span>72 Quality Checks</span>
            </div>

            {/* Duplicate Set of USP items */}
            <div className="usp-item">
              <img src="/assets/10-day-replacement.webp" alt="10 Day Replacement" />
              <span>10 Day Replacement</span>
            </div>
            <div className="usp-item">
              <img src="/assets/amc.webp" alt="After-Sales Service" />
              <span>Reliable After-Sales Service</span>
            </div>
            <div className="usp-item">
              <img src="/assets/free-delivery.webp" alt="Free Delivery" />
              <span>Free Delivery</span>
            </div>
            <div className="usp-item">
              <img src="/assets/1-year-warranty.webp" alt="1 Year Warranty" />
              <span>1 Year Warranty</span>
            </div>
            <div className="usp-item">
              <img src="/assets/72-Qualitty-check.webp" alt="72 Quality Checks" />
              <span>72 Quality Checks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default USP;
