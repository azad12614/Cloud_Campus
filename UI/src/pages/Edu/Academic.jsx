//https://codepen.io/BradleyPJ/pen/LmpzNx
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import "./Academic.css";

function Academic() {
    return (
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Section text={"Academic Calendar"} class="custom-section"></Section>
            <h2>Spring Semester - 2024</h2>
            <section class="design-section">
                <div class="timeline">

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class="timeline-component timeline-content">
                        <h3>23th Dec 2023</h3>
                        <p>Orientation Program for newly admitted students</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class="timeline-component timeline-content">
                        <h3>01 Jan 2024 - 12 Feb 2024</h3>
                        <p>Lecture Period - 1</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>29 Jan 2024 - 05 Feb 2024</h3>
                        <p>Course Add & Drop</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>09th Feb 2024</h3>
                        <p><span>Holiday:</span> Shab-e-Miraj</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>14th Feb 2024</h3>
                        <p><span>Holiday:</span> Shawrshati Puja</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>15 Feb 2024 - 28 Feb 2024</h3>
                        <p>Mid Term Test</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>21th Feb 2024</h3>
                        <p><span>Holiday:</span> International Mother's Language Day</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>26th Feb 2024</h3>
                        <p><span>Holiday:</span> Shab-e-Barat</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>09th Mar 2024</h3>
                        <p>Result of Mid Term Test</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>02 Mar 2024 - 15 May 2024</h3>
                        <p>Lecture Period - 2</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>10 Mar 2024 - 16 March 2024</h3>
                        <p>Course Withdrawal Period</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>17th Mar 2024</h3>
                        <p><span>Holiday:</span> Birthday of Bonghabandhu</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>20th Mar 2024</h3>
                        <p>Admission Test - Autumn 2024</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>26th Mar 2024</h3>
                        <p><span>Holiday:</span> Independence Day</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>06 April 2024 - 17 April 2024</h3>
                        <p><span>Holiday:</span> Eid-ul-Fitre</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>1st May 2024</h3>
                        <p><span>Holiday:</span> May Day</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>16 May 2024 - 20 May 2024</h3>
                        <p>Preparation Period</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>21 May 2024 - 10 June 2024</h3>
                        <p>Semester End Exam</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>23th May 2024</h3>
                        <p><span>Holiday:</span> Buddha Purnima</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>11 June 2024 - 19 June 2024</h3>
                        <p><span>Holiday:</span> Eid-ul-Azha</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>22 June 2024 - 25 June 2024</h3>
                        <p>Practical Exam</p>
                    </div>

                    {/* <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div> */}
                    <div class=" timeline-component timeline-content">
                        <h3>2nd July 2024</h3>
                        <p>Result Publish</p>
                    </div>

                </div>
            </section >
            {/* <div className="fixed bottom-0 w-full z-[10]"> */}
            <Footer></Footer>
            {/* </div> */}
        </div >
    )
}

export default Academic; 