import React, { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Section";
import "./Class.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

function Class() {

    const [Sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-xmqm.onrender.com/all-sections`)
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
            <Banner text={"Class Schedule"}></Banner>
            <div className="mt-36 bg-list px-20 pb-20 text-center justify-center">
                <div class="deconstructed">
                    1st Semester
                    <div>1st Semester</div>
                    <div>1st Semester</div>
                    <div>1st Semester</div>
                    <div>1st Semester</div>
                </div>
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
                <div class="deconstructed">
                    2nd Semester
                    <div>2nd Semester</div>
                    <div>2nd Semester</div>
                    <div>2nd Semester</div>
                    <div>2nd Semester</div>
                </div>
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
                <div class="deconstructed">
                    3rd Semester
                    <div>3rd Semester</div>
                    <div>3rd Semester</div>
                    <div>3rd Semester</div>
                    <div>3rd Semester</div>
                </div>
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
                <div class="deconstructed">
                    4th Semester
                    <div>4th Semester</div>
                    <div>4th Semester</div>
                    <div>4th Semester</div>
                    <div>4th Semester</div>
                </div>
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
                <div class="deconstructed">
                    5th Semester
                    <div>5th Semester</div>
                    <div>5th Semester</div>
                    <div>5th Semester</div>
                    <div>5th Semester</div>
                </div>
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
                <div class="deconstructed">
                    6th Semester
                    <div>6th Semester</div>
                    <div>6th Semester</div>
                    <div>6th Semester</div>
                    <div>6th Semester</div>
                </div>
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
                <div class="deconstructed">
                    7th Semester
                    <div>7th Semester</div>
                    <div>7th Semester</div>
                    <div>7th Semester</div>
                    <div>7th Semester</div>
                </div>
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
                <div class="deconstructed">
                    8th Semester
                    <div>8th Semester</div>
                    <div>8th Semester</div>
                    <div>8th Semester</div>
                    <div>8th Semester</div>
                </div>
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
            <Links></Links>
            {/* <div className="fixed bottom-0 w-full"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default Class;
