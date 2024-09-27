import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import "./Teacher.css";
import { useEffect, useState } from "react";

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
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <div class="col-12 col-sm-6 col-lg-3">

          <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp", }}>
            <div class="advisor_thumb"><img src={Teacher?.image} alt="" />

              <div class="social-info">
                <a href={Teacher?.gs} class="icon">
                  <span class="tooltip">Google Scholar</span>
                  <i class="fa-solid fa-graduation-cap"></i>
                </a>
                <a href={Teacher?.rg} class="icon">
                  <span class="tooltip">Research Gate</span>
                  <i class="fa-brands fa-researchgate fa-lg"></i>
                </a>
                <a href={Teacher?.od} class="icon">
                  <span class="tooltip">ORCID</span>
                  <i class="fa-brands fa-orcid fa-lg"></i>
                </a>
                <a href="#" class="icon">
                  <span class="tooltip">Education</span>
                  <i class="fa-solid fa-book"
                    onClick={() => document.getElementById(`${Teacher?.name}+${Teacher?.role}`).showModal()}
                  ></i>
                  <dialog id={`${Teacher?.name}+${Teacher?.role}`} className="modal">
                    <div className="modal-box box">
                      <h5 className="designation mb-4">Education Info</h5>
                      <h4 className="designation"> Ph.D.: {Teacher?.phd}</h4>
                      <h4 className="designation"> M.Sc.: {Teacher?.msc}</h4>
                      <h4 className="designation"> B.Sc.: {Teacher?.bsc}</h4>
                      <div className="modal-action">
                        <form method="dialog" className='mx-auto'>
                          <button className="btn edu1">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </a>
              </div>

            </div>

            <div class="single_advisor_details_info">
              <h6 className='font-extrabold'>{Teacher?.name}</h6>
              <h5 className="designation font-bold"> {Teacher?.role}</h5>

              <h4 className="designation font-semibold pt-1"> Mobile: {Teacher?.number}</h4>
              <h4 className="designation font-semibold"> E-mail: {Teacher?.email}</h4>

            </div>
          </div>

        </div>
      </>
    );
  }

  return (
    <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
      <Navbar></Navbar>
      <Section text={"Faculty & Staff"}></Section>
      <div class="container my-36">
        <h2>Chairman & Coordinator</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Chairman & Associate Professor" ? (single(Teacher)) : (<></>)
                }
                {
                  Teacher?.role == "Associate Professor & Coordinator" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
        <h2>Professor</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Professor" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
        <h2>Associate Professor</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Associate Professor" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
        <h2>Assistant Professor</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Assistant Professor" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
        <h2>Lecturer</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Lecturer" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
        <h2>Assistant Lecturer</h2>
        <div class="row">
          {
            Sir.map((Teacher) => (
              <>
                {
                  Teacher?.role == "Assistant Lecturer" ? (single(Teacher)) : (<></>)
                }
              </>
            ))
          }
        </div>
      </div>
      {/* <div className="fixed bottom-0 w-full z-[10]"> */}
      <Footer></Footer>
      {/* </div> */}
    </div>
  )
}

export default Teacher;