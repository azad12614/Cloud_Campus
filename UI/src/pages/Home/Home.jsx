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
            <section class="section-hero">

                <div class="heros">
                    <div class="hero-text-box">
                        <h1 class="heading-primary">
                            Welcome, The Future Innovators!
                        </h1>
                        <p class="hero-description">
                            Embark on your journey to shape the digital world at the International Islamic University Chittagong's Department of Computer Science and Engineering.  Here, you'll gain the knowledge and skills to solve real-world problems, guided by Islamic principles of ethics and excellence.  Join our vibrant community and become a leader in the ever-evolving field of technology.
                        </p>
                        <a href="https://www.iiuc.ac.bd/home/apply-online" target="_blank" class="enroll">Enroll Now</a>
                    </div>
                    <div class="hero-img-box">
                        <img
                            src={IIUC_CSE}
                            alt="IIUC LOGO"
                            className="hero-img"
                        />
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