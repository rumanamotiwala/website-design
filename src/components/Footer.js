import React from 'react';
// import './Footer.css'; // Ensure to create and link this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        
        <div className="footer-header">
          <h2 className="footer-logo">Logo | A&T Services Inc.</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Rest of the content */}
        <div className="footer-addresses">
          <p><strong>Head Office:</strong><br />
            E-246/1, Allama Shibli Nomani Road, Abul Fazal Enclave,<br />
            Shaheen Bagh, Jasola Vihar, New Delhi, Delhi 110025
          </p>

          <div className="branches">
            <p><strong>Branches:</strong></p>
            <ul>
              <li><strong>Delhi:</strong> G-167, Ground Floor, Hari Nagar Jail Road Street, 1, Mother Dairy Road, New Delhi, Delhi 110058</li>
              <li><strong>Mumbai:</strong> Plot No. 70, AL-Hudibia Apartment, Opp Bharat Gear, Kausa, Mumbra, Thane, Maharashtra – 400612</li>
              <li><strong>Bangalore:</strong> 29 Roshan Nagar 3rd Cross, Near Salmaniya Masjid, Deepanjali Nagar, Bangalore, Karnataka - 560026</li>
              <li><strong>Hyderabad:</strong> Plot No. 761, Road No. 39, CBI Colony, Jubilee Hills, Hyderabad, Telangana - 500033</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <p><strong>Phone:</strong> +91 95 9909 0603</p>
          <p><strong>Email:</strong> support@antservicesmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © A&T Services Inc.</p>
        <p><a href="#">Terms & Conditions</a> - <a href="#">Privacy Policy</a> - <a href="#">Blogs</a></p>
      </div>
    </footer>
  );
};

export default Footer;
