import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
