import React, { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Class.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

function Class() {

    const [Sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-sections`)
            .then((res) => res.json())
            .then((data) => setSections(data));
    }, []);


    function single(section) {
        return (
            <>
                <a key={section?._id} href={section?.image} target="_blank">
                    <li key={section?._id}>
                        <div class="icon"><SiGoogleclassroom /></div>
                        <div class="title">{section?.name}</div>
                    </li>
                </a>
            </>
        );
    }

    return (
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Section text={"Class Schedule"}></Section>
            <h2>Select Semester</h2>

            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab tab-active" className="tab tabList" aria-label="1st" defaultChecked />
                <div role="tabpanel" className="tab-content">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '1' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="2nd" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '2' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="3rd" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '3' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="4th" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '4' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="5th" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '5' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="6th" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '6' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="7th" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '7' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="8th" />
                <div role="tabpanel" className="tab-content text-white">

                    <div className="List">
                        <ol>
                            {
                                Sections.map((section) => (
                                    <>
                                        {
                                            section?.name[0] == '8' ? (single(section)) : (<></>)
                                        }
                                    </>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <Links></Links>
            {/* <div className="fixed bottom-0 w-full"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default Class;
