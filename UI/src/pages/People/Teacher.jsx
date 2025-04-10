import React, { useEffect, useState } from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { SiOrcid, SiResearchgate } from "react-icons/si";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Teacher.css";

function Teacher() {
  const [Sir, setSir] = useState([]);
  useEffect(() => {
    fetch(`https://cloud-campus-backend.onrender.com/all-sir`)
      .then((res) => res.json())
      .then((data) => setSir(data));
  }, []);

  function single(Teacher) {
    return (
      <>
        <div className="teacher-column">
          <div
            className="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <div className="advisor_thumb">
              <img src={Teacher?.image} alt="" />
              <div className="social-info">
                <a href={Teacher?.gs} className="icon">
                  <span className="tooltip">Google Scholar</span>
                  <FaGraduationCap />
                </a>
                <a href={Teacher?.rg} className="icon">
                  <span className="tooltip">Research Gate</span>
                  <SiResearchgate />
                </a>
                <a href={Teacher?.od} className="icon">
                  <span className="tooltip">ORCID</span>
                  <SiOrcid />
                </a>
                <a
                  href="#"
                  className="icon"
                  onClick={() =>
                    document
                      .getElementById(
                        `${Teacher?.name?.replace(/\s+/g, "_")}_${
                          Teacher?.role
                        }`
                      )
                      ?.showModal()
                  }
                >
                  <span className="tooltip">Education</span>
                  <FaBook />
                </a>

                <dialog
                  id={`${Teacher?.name?.replace(/\s+/g, "_")}_${Teacher?.role}`}
                  className="modal"
                >
                  <div className="modal-box education-box">
                    <h5 className="designation modal-title">Education Info</h5>
                    <h4 className="designation">Ph.D.: {Teacher?.phd}</h4>
                    <h4 className="designation">M.Sc.: {Teacher?.msc}</h4>
                    <h4 className="designation">B.Sc.: {Teacher?.bsc}</h4>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="edu-close-btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="single_advisor_details_info">
              <h6 className="font-extrabold">{Teacher?.name}</h6>
              <h5 className="designation font-bold">{Teacher?.role}</h5>
              <h4 className="designation font-semibold">
                Mobile: {Teacher?.number}
              </h4>
              <h4 className="designation font-semibold">
                E-mail: {Teacher?.email}
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="pages">
      <Navbar></Navbar>
      <Section text={"Faculty & Staff"}></Section>
      <div class="container">
        <h2>Chairman & Coordinator</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>
              {Teacher?.role == "Chairman & Associate Professor" ? (
                single(Teacher)
              ) : (
                <></>
              )}
              {Teacher?.role == "Associate Professor & Coordinator" ? (
                single(Teacher)
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <h2>Professor</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>{Teacher?.role == "Professor" ? single(Teacher) : <></>}</>
          ))}
        </div>
        <h2>Associate Professor</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>
              {Teacher?.role == "Associate Professor" ? single(Teacher) : <></>}
            </>
          ))}
        </div>
        <h2>Assistant Professor</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>
              {Teacher?.role == "Assistant Professor" ? single(Teacher) : <></>}
            </>
          ))}
        </div>
        <h2>Lecturer</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>{Teacher?.role == "Lecturer" ? single(Teacher) : <></>}</>
          ))}
        </div>
        <h2>Assistant Lecturer</h2>
        <div class="row">
          {Sir.map((Teacher) => (
            <>
              {Teacher?.role == "Assistant Lecturer" ? single(Teacher) : <></>}
            </>
          ))}
        </div>
      </div>
      {/* <div className="fixed bottom-0 w-full z-[10]"> */}
      <Footer></Footer>
      {/* </div> */}
    </div>
  );
}

export default Teacher;
