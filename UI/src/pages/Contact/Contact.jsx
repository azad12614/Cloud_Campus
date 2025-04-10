// src/pages/Contact.jsx
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaMap,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Section text={"Contact"}></Section>
      <section className="contact-section">
        <div className="contact-container glass-card">
          <h2 className="contact-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-subtitle">We’d love to hear from you!</p>

          <div className="contact-grid">
            {/* Left: Contact Details */}
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>IIUC Campus, Kumira, Chattogram-4318</span>
              </div>
              <div className="info-item">
                <FiMail className="info-icon" />
                <span>mjamalpatiya@gmail.com</span>
              </div>
              <div className="info-item">
                <FiPhone className="info-icon" />
                <span>+8801768674457</span>
              </div>
              <div className="info-item">
                <FiMail className="info-icon" />
                <span>mdakhtar16@gmail.com</span>
              </div>
              <div className="info-item">
                <FiPhone className="info-icon" />
                <span>+8801814942219</span>
              </div>

              <div className="contact-socials">
                <a
                  href="https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMap />
                </a>
                <a
                  href="https://www.facebook.com/iiuc.ac.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/iiuctg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@internationalislamicuniver5603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
