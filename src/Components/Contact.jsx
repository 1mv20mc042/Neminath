
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Welcome to Neminath TC</p>
        <div className="contact-details">
          <p><i className="fas fa-phone"></i> 9920909123</p>
          <p><i className="fas fa-envelope"></i> hiteshdoshi2@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 03, ADISHWAR BLDG., 215 BAPU KHOTE ST., PYDHONIE JN., OPP PYDHONIE POLICE STATION., MUMBAI -400 003</p>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="contact-form">
        <h2>Any question or remarks? Just write us a message!</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Subject?</option>
              <option value="general">General Inquiry</option>
              <option value="flight">Flight Booking</option>
              <option value="hotel">Hotel Booking</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Write your message..." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;