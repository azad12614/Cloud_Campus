import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="d-flex flex-column max-w-full overflow-x-hidden">
      <Navbar/>
      <Hero></Hero>
      <Links></Links>
      <Footer></Footer>
    </div>
  );
}

export default Home;
