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
                <li key={section?._id}>
                    <div class="icon"><SiGoogleclassroom /></div>
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
            {/* <div className="fixed bottom-0 w-full"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default Class;
