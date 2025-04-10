// src/pages/Clubs.jsx
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Clubs.css";

const Clubs = () => {
  return (
    <section className="clubs-section">
      <h2 className="clubs-heading">Our Clubs</h2>
      <div className="clubs-container">
        {/* IIUCCPS */}
        <div className="club-card">
          <h3>IIUC Competitive Programming Society (IIUCCPS)</h3>
          <div className="club-icons">
            <a
              href="https://iiuccps.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://www.facebook.com/IIUCCPS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://bd.linkedin.com/company/iiuccps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@IIUCCPS/channels"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* IIUC Computer Club */}
        <div className="club-card">
          <h3>IIUC Computer Club</h3>
          <div className="club-icons">
            <a
              href="https://computerclub.iiuc.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://www.facebook.com/IIUCComputerClub.Official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/iiuc-computer-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@IIUCComputerClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
