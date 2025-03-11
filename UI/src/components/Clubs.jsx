import React from "react";
import { Link } from "react-router-dom";
import IIUC_CSE from "../assets/IIUC_CSE.png";
import "./Clubs.css";

const Clubs = () => {
  return (
    <>
      {/* Clubs Section */}
      <section className="clubs-section">
        <h2 className="clubs-heading">Our Clubs</h2>
        <div className="clubs-container">
          {/* IIUCCPS Card */}
          <div className="club-card">
            <h3>IIUC Competitive Programming Society (IIUCCPS)</h3>
            <div className="club-icons">
              <a
                href="https://iiuccps.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/IIUCCPS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://bd.linkedin.com/company/iiuccps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@IIUCCPS/channels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* IIUCCFCPS Card */}
          {/* <div className="club-card">
            <h3>IIUC Computer Club (IIUCCFCPS)</h3>
            <div className="club-icons">
              <a
                href="https://facebook.com/IIUCCFCPS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://linkedin.com/company/iiuccfcps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://youtube.com/iiuccfcps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div> */}

          {/* IIUC Computer Club Card */}
          <div className="club-card">
            <h3>IIUC Computer Club</h3>
            <div className="club-icons">
              <a
                href="https://computerclub.iiuc.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/IIUCComputerClub.Official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/iiuc-computer-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@IIUCComputerClub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clubs;
