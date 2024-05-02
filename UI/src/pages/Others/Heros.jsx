import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import "./Heros.css";

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
                            src="https://yt3.googleusercontent.com/dgqyEcZOrvmDeHde_rnn6Up1vBSgWWsnaoJu6IYCESpNwuzlHjbM2YYz0V-aAx7N1i_XK2XuYvk=s900-c-k-c0x00ffffff-no-rj"
                            alt="IIUC LOGO"
                            class="hero-img"
                        />
                    </div>
                </div>
            </section>

            <Links></Links>
            <Footer></Footer>
        </>
    );
}

export default Heros;  