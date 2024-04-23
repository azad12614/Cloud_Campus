import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Section";
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
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Banner text={"Class Schedule"}></Banner>
            <div className="mt-36 bg-list px-20 pb-20 text-center justify-center">
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
        </div>
    );
}

export default Class;
