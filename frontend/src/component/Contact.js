import React from "react";
//import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">We're here to help you plan your perfect event.</p>

          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>eventcrew.contact@gmail.com</span>
            </div>
            <div className="info-item">
              <FaLinkedin className="icon" />
              <span>@eventcrew</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80"
            alt="Event Crew Contact"
            className="contact-img"
          />
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="contact-footer">
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <p className="footer-text">© 2025 Event Crew. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
