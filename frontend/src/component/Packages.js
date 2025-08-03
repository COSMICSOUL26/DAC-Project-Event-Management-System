import React from "react";
import { FaHandsHelping, FaClock, FaStar, FaRupeeSign } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // renamed to avoid conflict
import { Link as ScrollLink } from "react-scroll"; // used for navbar scrolling

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section" id="why">
      <div className="why-header">
        <h2>Why Choose Us</h2>
        <p>Your celebration deserves expert care and attention — here's what sets us apart.</p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <FaHandsHelping className="why-icon" />
          <h4>End-to-End Planning</h4>
          <p>From concept to completion, we manage every detail with care and creativity.</p>
        </div>
        <div className="why-card">
          <FaClock className="why-icon" />
          <h4>On-Time Execution</h4>
          <p>Timely delivery and punctual service ensure a stress-free experience for you.</p>
        </div>
        <div className="why-card">
          <FaStar className="why-icon" />
          <h4>Proven Expertise</h4>
          <p>Backed by experience, we bring professionalism and perfection to every event.</p>
        </div>
        <div className="why-card">
          <FaRupeeSign className="why-icon" />
          <h4>Budget-Friendly</h4>
          <p>We offer smart solutions to suit your budget — without compromising on quality.</p>
        </div>
      </div>

      <div className="cta-section">
        <h3 className="cta-text">Ready to make your event unforgettable?</h3>
        <RouterLink to="/customer" className="home-btn home-btn-cta">
          Start Your Journey
        </RouterLink>
      </div>
    </section>
  );
};

export default WhyChooseUs;
