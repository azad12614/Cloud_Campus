//https://codepen.io/BradleyPJ/pen/LmpzNx
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Academic.css";

function Academic() {

    const myh1 = {
        paddingTop: "100px",
        paddingBottom: "39px",
        fontSize: "3.5rem",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
    }

    return (

        <div>
            <Navbar></Navbar>
            <h1 style={myh1}>Academic Calendar</h1>
            <section class="design-section">
                <div class="timeline">

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>HTML</h3>
                        <p>Some Text</p>
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>CSS</h3>
                        <p>Some Text.</p>
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>Javascript</h3>
                        <p>Some Text.</p>
                    </div>

                </div>
            </section >
            <div className="fixed bottom-0 w-full z-[10]">
                <Footer></Footer>
            </div>
        </div >
    )
}

export default Academic; 