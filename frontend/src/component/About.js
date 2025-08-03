const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">About Us</h2>
      <div className="about-content-wrapper">
        <div className="about-left">
          <p>
            At EventCrew, we believe every celebration deserves thoughtful planning and effortless execution. 
            We are a passionate team dedicated to transforming your ideas into memorable experiences. 
            From intimate gatherings to grand occasions, we ensure every detail is handled with care.
          </p>
          <p>
            With industry experience, creative thinking, and reliable partnerships, we handle your events with a personal touch. 
            We're not just managing events — we’re building moments that matter.
          </p>
        </div>
        <div className="about-right">
          <ul className="about-points">
            <li><span>🎯</span> Focused on client satisfaction</li>
            <li><span>🤝</span> Trusted vendor network</li>
            <li><span>💡</span> Innovative planning approach</li>
            <li><span>⏱️</span> On-time execution</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
