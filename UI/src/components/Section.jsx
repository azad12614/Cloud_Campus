import React from 'react';
import "./Section.css";

function Section({ text }) {
    return (
        <>
            <header class="header-ui">
                <div class="wrapper">
                    <div class="bg">  {text} </div>
                    <div class="fg">  {text} </div>
                </div>
            </header>
        </>
    )
}

export default Section