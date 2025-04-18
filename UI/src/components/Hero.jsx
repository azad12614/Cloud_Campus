// File: src/components/Hero.jsx

import "./Hero.css";
import aiHero from "../assets/IIUC_CSE.png";

function Hero() {
  return (
    <section className="hero-section">
      {/* Background grid overlay */}
      <div className="hero-overlay" />

      {/* Main container for text and image */}
      <div className="hero-container">
        {/* Left column: Hero text content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Shaping the Future</span> with Code & Intelligence
          </h1>

          <p className="hero-description">
            Cloud Campus is your all-in-one academic hub — designed for
            students, faculty, and learners to connect, collaborate, and grow.
            Stay ahead with live schedules, smart tools, and a seamless
            experience built for the next generation of education.
          </p>

          {/* Update notice */}
          <div className="update-banner">
            📢 This website's content was last updated in{" "}
            <strong>Spring 2024</strong>.
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="/courses" className="btn-primary">
              Get Started
            </a>
            <a
              href="https://iciset.iiuc.ac.bd/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Explore Research
            </a>
          </div>
        </div>

        {/* Right column: Hero image */}
        <div className="hero-image">
          <div className="hero-image-card">
            <img src={aiHero} alt="AI Vision" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
