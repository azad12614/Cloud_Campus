import { Link } from "react-router-dom";
import IIUC_CSE from "../../assets/IIUC_CSE.png";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials";
import "./Home.css";

function Heros() {
  return (
    <>
      <Navbar />
      {/* <section class="section-hero">
        <div class="heros">
          <div class="hero-text-box">
            <h1 class="heading-primary">Welcome to The CSE!</h1>
            <p class="hero-description">
              Embark on your journey to shape the digital world at the
              International Islamic University Chittagong's Department of
              Computer Science and Engineering. Here, you'll gain the knowledge
              and skills to solve real-world problems, guided by Islamic
              principles of ethics and excellence. Join our vibrant community
              and become a leader in the ever-evolving field of technology.
            </p>
            <a
              href="https://www.iiuc.ac.bd/home/apply-online"
              target="_blank"
              class="enroll"
            >
              Enroll Now
            </a>
          </div>
          <div class="hero-img-box">
            <img src={IIUC_CSE} alt="IIUC LOGO" className="hero-img" />
          </div>
        </div>
      </section> */}

      <section className="hero-section">
        <div className="hero-content">
          {/* Logo and Title */}
          <div className="hero-brand">
            <img
              src={IIUC_CSE} // Replace with the actual logo/picture
              alt="IIUC CSE Department Logo"
              className="hero-logo"
            />
            <h1 className="hero-title">
              Department of Computer Science & Engineering
            </h1>
            <p className="hero-subtitle">
              International Islamic University Chittagong (IIUC)
            </p>
          </div>

          {/* Welcome Text */}
          <div className="hero-text-container">
            <p className="hero-text">
              Welcome to the Department of Computer Science and Engineering at
              IIUC, where innovation meets excellence. Our mission is to empower
              students with cutting-edge knowledge, foster research, and prepare
              future leaders in the field of computer science and engineering.
            </p>
            <p className="hero-text">
              Explore our programs, state-of-the-art facilities, and vibrant
              community that drives technological advancements.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a
              href="https://iciset.iiuc.ac.bd/"
              target="_blank"
              className="hero-button"
            >
              Research
            </a>
            <Link to="/courses" className="hero-button">
              Explore Programs
            </Link>
            <a
              href="https://www.iiuc.ac.bd/cse/bachelor"
              target="_blank"
              className="hero-button"
            >
              Admissions
            </a>
          </div>

          {/* Additional Visual Element */}
          <div className="hero-stats">
            <div className="stat-item">
              <h2>20+</h2>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h2>5000+</h2>
              <p>Graduates</p>
            </div>
            <div className="stat-item">
              <h2>50+</h2>
              <p>Research Projects</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials></Testimonials>
      <Links></Links>
      <Footer></Footer>
    </>
  );
}

export default Heros;
