import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

import map from "../assets/google-maps.png";
import fb from "../assets/facebook.png";
import yt from "../assets/youtube.png";
import ln from "../assets/linkedin.png";
import cc from "../assets/Cloud_Campus.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <Link to="/">
            <img src={cc} />
          </Link>
        </div>

        {/* 2nd Menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex font-bold"
                >
                  <span>Schedule</span>
                  <svg
                    className="fill-current h-12 w-12 pt-2 pl-2 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <div className="dropdown-content menu-2">
                  <div>
                    <li className="p-2">
                      <Link to={"/class"}>Class Schedule</Link>
                    </li>
                    <li className="p-2">
                      <Link to={"/bus"}>Bus Schedule</Link>
                    </li>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex font-bold"
                >
                  <span>People</span>
                  <svg
                    className="fill-current h-12 w-12 pt-2 pl-2 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <div className="dropdown-content menu-2">
                  <div>
                    <li className="p-2">
                      <Link to="/teacher">Faculty & Staff</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/member">Contributor</Link>
                    </li>
                    <li className="p-2">
                      <a
                        href="https://www.iiuc.ac.bd/alumni/adirectory"
                        target="_blank"
                      >
                        Alumni
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex font-bold"
                >
                  <span>Education</span>
                  <svg
                    className="fill-current h-12 w-12 pt-2 pl-2 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <div className="dropdown-content menu-2">
                  <div>
                    <li className="p-2">
                      <Link to="/ac">Academic Calender</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/syllabus">Syllabus</Link>
                    </li>
                    <li className="p-2">
                      <a
                        href="https://drive.google.com/drive/folders/1j6P06WLqRLESwiWYiPlTa4ui-m8g8C1i"
                        target="_blank"
                      >
                        Resource
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex font-bold"
                >
                  <span>Others</span>
                  <svg
                    className="fill-current h-12 w-12 pt-2 pl-2 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <div className="dropdown-content menu-2">
                  <div>
                    <li className="p-2">
                      <Link to="/photo">Gallery</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/cgpa">GPA Calculator</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/fee">FEE Structures</Link>
                    </li>
                    <li className="p-2">
                      <a href="https://opac.iiuc.ac.bd/" target="_blank">
                        Library
                      </a>
                    </li>
                    <li className="p-2">
                      <a
                        href="https://www.iiuc.ac.bd/home/career/"
                        target="_blank"
                      >
                        Career
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu"
                target="_blank"
              >
                <img src={map} className="w-12 h-12" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/iiuc.ac.bd/" target="_blank">
                <img src={fb} className="w-12 h-12" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@internationalislamicuniver5603"
                target="_blank"
              >
                <img src={yt} className="w-12 h-12" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/iiuctg" target="_blank">
                <img src={ln} className="w-12 h-12" />
              </a>
            </li>
          </ul>

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
