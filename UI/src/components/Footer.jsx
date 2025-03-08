import { Link } from "react-router-dom";
import cc from "../assets/Cloud_Campus.png";
import React from "react";
import "./Footer.css";

import map from "../assets/google-maps.png";
import fb from "../assets/facebook.png";
import yt from "../assets/youtube.png";
import ln from "../assets/linkedin.png";

function Footer() {
  return (
    <footer id="footer">
      <div>
        <Link to="/">
          <img id="footer_logo" src={cc} />
        </Link>
        <h1>CLOUD CAMPUS</h1>
        <div className="social">
          <a
            href="https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu"
            target="_blank"
            className="link"
          >
            <img src={map} />
          </a>
          <a
            href="https://www.facebook.com/iiuc.ac.bd/"
            target="_blank"
            className="link"
          >
            <img src={fb} />
          </a>
          <a
            href="https://www.youtube.com/@internationalislamicuniver5603"
            target="_blank"
            className="link"
          >
            <img src={yt} />
          </a>
          <a
            href="https://www.linkedin.com/company/iiuctg"
            target="_blank"
            className="link"
          >
            <img src={ln} />
          </a>
        </div>
        <h3 className="footer-copyright">2024 © All Rights Reserved</h3>
      </div>
      <div className="col">
        <p>
          <a href="https://www.iiuc.ac.bd/program/cse">About CSE Program</a>
        </p>
        <p>
          <a href="https://www.iiuc.ac.bd/home/admission-instruction#">
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

// import React from "react";
// import "./Footer.css"; // Import the CSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         {/* Logo and Title */}
//         <div className="footer-brand">
//           <img src="logo.png" alt="Logo" className="footer-logo" />
//           <h2 className="footer-title">Your Brand Name</h2>
//         </div>

//         {/* Links */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Quick Links</h3>
//           <ul className="footer-links">
//             <li>
//               <a href="/about">About Us</a>
//             </li>
//             <li>
//               <a href="/services">Services</a>
//             </li>
//             <li>
//               <a href="/blog">Blog</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Contact Us</h3>
//           <ul className="footer-contact">
//             <li>
//               <a href="mailto:info@example.com">info@example.com</a>
//             </li>
//             <li>
//               <a href="mailto:support@example.com">support@example.com</a>
//             </li>
//             <li>
//               <a href="tel:+1234567890">+1 (234) 567-890</a>
//             </li>
//             <li>
//               <a href="tel:+0987654321">+0 (987) 654-321</a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Follow Us</h3>
//           <div className="footer-social">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Facebook
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Twitter
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Instagram
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="footer-copyright">
//         <p>
//           &copy; {new Date().getFullYear()} Your Brand Name. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
