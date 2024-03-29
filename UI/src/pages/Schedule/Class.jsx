import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import "./Class.css";
import React from "react";
import { useEffect, useState } from "react";

function Class() {

    const [Sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-xmqm.onrender.com/all-sections`)
            .then((res) => res.json())
            .then((data) => setSections(data));
    }, []);

    const myh1 = {
        paddingTop: "100px",
        paddingBottom: "39px",
        fontSize: "3.5rem",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
    }

    function single(section) {
        return (
            <>
                <li className="bg-[#ffffff] rounded-full" key={section?._id}>
                    <div class="icon"><i class="fa-solid fa-section"></i></div>
                    <div class="title"><a href={section?.image}>{section?.name}</a></div>
                </li>
            </>
        );
    }

    return (
        <>
            <Navbar></Navbar>
            <h1 style={myh1}>Class Schedule</h1>
            <div className="bg-list px-20 pb-24 text-center justify-center">
                <ol>
                    {
                        Sections.map((section) => (
                            single(section)
                        ))
                    }
                </ol>
            </div>
            <Links></Links>
            <div className="fixed bottom-0 w-full">
                <Footer></Footer>
            </div>
        </>
    );
}

export default Class;
