import React from "react";
import { FaCalendarAlt, FaUsers, FaBullhorn, FaMusic } from "react-icons/fa";
//import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Bringing your vision to life with seamless planning and unforgettable experiences.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <FaCalendarAlt className="service-icon" />
          <h3>Event Planning</h3>
          <p>From ideation to execution — we handle logistics, venues, themes, and more with precision and passion.</p>
        </div>
        <div className="service-card">
          <FaUsers className="service-icon" />
          <h3>Guest Management</h3>
          <p>Invitations, RSVPs, seating, hospitality — ensure every guest feels valued and welcomed.</p>
        </div>
        <div className="service-card">
          <FaBullhorn className="service-icon" />
          <h3>Marketing & Promotion</h3>
          <p>Drive buzz with digital campaigns, influencer tie-ups, and outreach strategies that matter.</p>
        </div>
        <div className="service-card">
          <FaMusic className="service-icon" />
          <h3>Entertainment</h3>
          <p>Live acts, DJs, performances, and engaging experiences customized for your crowd.</p>
        </div>
      </div>
    </section>
  );
};
export default Services;