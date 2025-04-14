// File: src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import cc from "../assets/Cloud_Campus.png";

// Social icons
import map from "../assets/google-maps.png";
import fb from "../assets/facebook.png";
import yt from "../assets/youtube.png";
import ln from "../assets/linkedin.png";

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      {/* Left Section: Logo and Social Links */}
      <div>
        <Link to="/">
          <img id="footer_logo" src={cc} alt="Cloud Campus Logo" />
        </Link>
        <h1>CLOUD CAMPUS</h1>

        {/* Social Media Links */}
        <div className="social">
          <a
            href="https://www.google.com/maps/place/..."
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img src={map} alt="Google Maps" />
          </a>
          <a
            href="https://www.facebook.com/iiuc.ac.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@internationalislamicuniver5603"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img src={yt} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/iiuctg"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img src={ln} alt="LinkedIn" />
          </a>
        </div>

        <h3 className="footer-copyright">2024 © All Rights Reserved</h3>
      </div>

      {/* Middle Section: Useful Links */}
      <div className="col">
        <p>
          <a
            href="https://www.iiuc.ac.bd/program/cse"
            target="_blank"
            rel="noopener noreferrer"
          >
            About CSE Program
          </a>
        </p>
        <p>
          <a
            href="https://www.iiuc.ac.bd/home/admission-instruction#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admission Details
          </a>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/member">Contributor</Link>
        </p>
      </div>

      {/* Right Section: Contact Info */}
      <div className="col">
        <p>☎️ +8801768674457</p>
        <p>📧 mjamalpatiya@gmail.com</p>
        <p>☎️ +8801814942219</p>
        <p>📧 mdakhtar16@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
