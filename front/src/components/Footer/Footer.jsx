import React from 'react';
import './Footer.css';
import 'flag-icons/css/flag-icons.min.css'; 

function Footer() {
  return (
    <div className='foot'>
      <div className="footer-section">
        <h3>HELP & INFORMATION</h3>
        <ul>
          <li>Help</li>
          <li>Track order</li>
          <li>Delivery & returns</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ABOUT MODERNA</h3>
        <ul>
          <li>About us</li>
          <li>Careers at MODERNA</li>
          <li>Corporate responsibility</li>
          <li>Investors' site</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>MORE FROM MODERNA</h3>
        <ul>
          <li>Mobile and MODERNA apps</li>
          <li>MODERNA Marketplace</li>
          <li>Gift vouchers</li>
          <li>Black Friday</li>
          <li>MODERNA x Thrift+</li>
          <li>Discover the MODERNA Credit Card</li>
          <li>Help Improve MODERNA Website</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SHOPPING FROM:</h3>
        <p>You're in <i className="fi fi-tn flag-icon"></i></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MODERNA COSMETICS</p>
        <ul>
          <li>Privacy & Cookies</li>
          <li>Ts&Cs</li>
          <li>Accessibility</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
