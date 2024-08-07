import React from 'react';
import './ContactUs.css';
import Footer from '../components/Footer'; // Ensure this path is correct

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-content">
        <div className="contact-image">
          <img src="ContactUs.jpg" alt="Contact Us" />
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <p>If you have any questions or feedback, please let us know!</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default ContactUsPage;
