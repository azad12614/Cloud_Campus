import Clubs from "../../components/Clubs";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Clubs />
      <Links />
      <Footer />
    </>
  );
};

export default Home;
