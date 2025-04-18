import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import { FaReact, FaArtstation, FaDatabase } from "react-icons/fa";
import "./Member.css";

function Member() {
  return (
    <div className="pages">
      <Navbar></Navbar>
      <Section text={"Contributor"}></Section>
      <section class="section-team">
        {/* <!-- Start Single Person --> */}
        <div class="single-person">
          <div class="person-image">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdrKEJ8idghNv-1ggreNGKm4IQa4SIXmzq99Ru6JIoAQf4XyrN"
              alt=""
            />
            <span class="icon">
              <FaReact size={40} />
            </span>
          </div>
          <div class="person-info">
            <h3 class="full-name">Abdullah Al Azad</h3>
            <span class="speciality">Web Developer</span>
          </div>
        </div>
        {/* <!-- / End Single Person -->
		<!-- Start Single Person --> */}
        <div class="single-person">
          <div class="person-image">
            <img
              src="https://eaassets-a.akamaihd.net/battlelog/prod/emblem/954/916/320/2955057091324382882.png?v=1524391412"
              alt=""
            />
            <span class="icon">
              <FaArtstation size={40} />
            </span>
          </div>
          <div class="person-info">
            <h3 class="full-name">Abdur Rahman</h3>
            <span class="speciality">UI/UX Designer</span>
          </div>
        </div>
        {/* <!-- / End Single Person -->
		<!-- Start Single Person --> */}
        <div class="single-person">
          <div class="person-image">
            <img
              src="https://i5.walmartimages.com/seo/Marvel-Black-Panther-Knob-Home-Accessory-Gift-Keepsake_5e58f0c1-89c5-4643-8ebf-149371d723d9.9e78b051338832f049529d29776c8f0c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
              alt=""
            />
            <span class="icon">
              <FaDatabase size={40} />
            </span>
          </div>
          <div class="person-info">
            <h3 class="full-name">Md. Ariful Islam</h3>
            <span class="speciality">QA Engineer</span>
          </div>
        </div>
        {/* <!-- / End Single Person --> */}
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Member;
