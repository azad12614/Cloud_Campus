import React from 'react';
import "./Section.css";
import banner from "../assets/cloud-banner.png";

function Section({ text }) {
    return (
        <>
            <header class="header-ui">
                <img src={banner} />

                <h1 class="header-title">{text}</h1>
            </header>
        </>
    )
}

export default Section