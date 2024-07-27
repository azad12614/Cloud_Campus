import React from 'react';
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Contact.css";

import fb from "../../assets/facebook.png";
import map from "../../assets/google-maps.png";
import ln from "../../assets/linkedin.png";
import yt from "../../assets/youtube.png";

function Contact() {
    return (
        <div className="d-flex flex-column max-w-full bg-[#d4f0fc]">
            <Navbar />
            <section id="contact">

                <Section text={"Contact"}></Section>

                <div class="contact-wrapper">

                    {/* <!-- Left contact page --> */}
                    <form action='mailto:c213106@ugrad.iiuc.ac.bd' id="contact-form" class="form-horizontal" method='POST'>
                        <div class="group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" required="y"></input>
                            </div>
                        </div>

                        <div class="group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required="y"></input>
                            </div>
                        </div>

                        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required="y"></textarea>

                        <button class="btn send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <i id='icon' class="fa-solid fa-paper-plane fa-2xl"></i>
                                <span class="send-text">SEND</span>
                            </div>
                        </button>

                    </form>

                    {/* <!-- Right contact page --> */}
                    <div class="direct-contact-container">
                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2xl"><span class="contact-text place"><a href='https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu' title='Take me to a ride' target='_blank'>Kumira, Chattogram-4318</a></span></i></li>

                            <li class="list-item"><i class="fa fa-phone fa-2xl"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call" target='_blank'>+8801768674457</a></span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2xl"><span class="contact-text gmail"><a href="mailto:mjamalpatiya@gmail.com" title="Send me an email" target='_blank'>mjamalpatiya@gmail.com</a></span></i></li>

                            <li class="list-item"><i class="fa fa-phone fa-2xl"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call" target='_blank'>+8801814942219</a></span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2xl"><span class="contact-text gmail"><a href="mailto:mdakhtar16@gmail.com" title="Send me an email" target='_blank'>mdakhtar16@gmail.com</a></span></i></li>
                        </ul>
                        <hr />

                        <ul class="social-media-list">
                            <a
                                href="https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu"
                                target="_blank" class="contact-icon">
                                <li>
                                    <img src={map} />
                                </li>
                            </a>
                            <a
                                href="https://www.facebook.com/iiuc.ac.bd/"
                                target="_blank" class="contact-icon">
                                <li>
                                    <img src={fb} />
                                </li>
                            </a>
                            <a
                                href="https://www.youtube.com/@internationalislamicuniver5603"
                                target="_blank" class="contact-icon">
                                <li>
                                    <img src={yt} />
                                </li>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/iiuctg"
                                target="_blank" class="contact-icon">
                                <li>
                                    <img src={ln} />
                                </li>
                            </a>
                        </ul>
                        <hr />

                        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED.</div>
                    </div>
                </div>
            </section>
            <Links></Links>
            {/* <div className="mt-auto mb-0"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default Contact;