// src/components/Footer.js

import React from 'react';
import './footer.css'; // Ensure you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 E-Commerce Site</p>
      <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
    </footer>
  );
};

export default Footer;
