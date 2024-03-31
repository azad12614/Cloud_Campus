import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Teacher.css";
import { useEffect, useState } from "react";

function Teacher() {

  const [Sir, setSir] = useState([]);
  useEffect(() => {
    fetch(`https://cloud-xmqm.onrender.com/all-sir`)
      .then((res) => res.json())
      .then((data) => setSir(data));
  }, []);

  const myh1 = {
    paddingTop: "100px",
    paddingBottom: "39px",
    fontSize: "3.5rem",
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  }

  function single(Teacher) {
    return (
      <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


        <div class="col-12 col-sm-6 col-lg-3">

          <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp", }}>
            <div class="advisor_thumb"><img src={Teacher?.image} alt="" />
              <div class="social-info">
                <a href="#"><i class="fa-solid fa-graduation-cap"></i></a>
                <a href="#"><i class="fa-brands fa-researchgate fa-lg"></i></a>
                <a href="#"><i class="fa-brands fa-orcid fa-lg"></i></a>
              </div>
            </div>

            <div class="single_advisor_details_info">
              <h6 className='font-extrabold'>{Teacher?.name}</h6>
              <p className="designation text-3xl font-bold"> {Teacher?.role}</p>
              <p className="designation text-xl pt-2 font-semibold"> Ph.D.: {Teacher?.phd}</p>
              <p className="designation text-xl pt-2 font-semibold"> M.Sc.: {Teacher?.msc}</p>
              <p className="designation text-xl py-2  font-semibold"> B.Sc.: {Teacher?.bsc}</p>
              <p className="designation text-xl py-1 font-serif font-medium"> Mobile: {Teacher?.number}</p>
              <p className="designation text-xl font-medium"> E-mail: {Teacher?.email}</p>
            </div>
          </div>

        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 style={myh1}>Faculty & Staff</h1>
      <div class="container">
        <div class="row">

          {
            Sir.map((Teacher) => (
              single(Teacher)
            ))
          }

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Teacher;