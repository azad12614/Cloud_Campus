// File: src/components/Clubs.jsx

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
      {/* Section Heading */}
      <h2 className="clubs-heading">Our Clubs</h2>

      <div className="clubs-container">
        {/* ===== IIUCCPS Card ===== */}
        <div className="club-card">
          <h3>IIUC Competitive Programming Society (IIUCCPS)</h3>
          <div className="club-icons">
            <a
              href="https://iiuccps.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Official Website"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://www.facebook.com/IIUCCPS/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://bd.linkedin.com/company/iiuccps"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@IIUCCPS/channels"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ===== IIUC Computer Club Card ===== */}
        <div className="club-card">
          <h3>IIUC Computer Club</h3>
          <div className="club-icons">
            <a
              href="https://computerclub.iiuc.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              title="Official Website"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://www.facebook.com/IIUCComputerClub.Official/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/iiuc-computer-club"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@IIUCComputerClub"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
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
