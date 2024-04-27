import React from 'react';

function Footer  ()  {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="mailto:info@example.com">Email Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;