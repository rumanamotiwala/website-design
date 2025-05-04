import React from 'react';
// import './EnquiryForm.css';

const EnquiryForm = () => {
  return (
    <section className="enquiry-section">
  <p>Enquire Now</p>
  <h2>Write A MESSAGE TO US</h2>
  <form className="enquiry-form">
    <div className="form-row">
      <input type="text" placeholder="Company Name" className="form-input" />
      <input type="tel" placeholder="Phone Number" className="form-input" />
    </div>
    <div className="form-row">
      <input type="email" placeholder="Email Address" className="form-input" />
      <textarea placeholder="Message" className="form-input message-box"></textarea>
    </div>
    <div className="submit-container">
      <button type="submit" className="submit-btn">Submit Now</button>
    </div>
  </form>
</section>


  );
};

export default EnquiryForm;
