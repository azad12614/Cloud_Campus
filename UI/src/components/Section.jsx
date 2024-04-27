import React from 'react';
import "./Section.css";

function Section({ text }) {
    return (
        <>
            <header className="header-ui">
                <div className="wrapper">
                    <div className="bg">  {text} </div>
                    <div className="fg">  {text} </div>
                </div>
            </header>
        </>
    )
}

export default Section