import React from 'react';
import './Bus.css';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

function Bus() {
    function image() {
        var thumbnails = document.getElementById("thumbnails")
        var imgs = thumbnails.getElementsByTagName("img")
        var main = document.getElementById("main")
        var counter = 0;

        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i]


            img.addEventListener("click", function () {
                main.src = this.src
            })

        }
    }
    return (
        <>
            <Navbar />
            <Section text={"Bus Schedule"}></Section>
            <div className='buses'>
                <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaeAXjhMIBZhtdDlSJoOz1kDZzEMM33mjeh_GesB0OlwUeMeW72QwJaXrwytaI9ZnupfwjAGxzhkBsbbp_zGlgHw3rvYyeR-XM=s1600-rw-v1" id="main" />
                <div id="thumbnails">
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaeAXjhMIBZhtdDlSJoOz1kDZzEMM33mjeh_GesB0OlwUeMeW72QwJaXrwytaI9ZnupfwjAGxzhkBsbbp_zGlgHw3rvYyeR-XM=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihY1gI8zw_iM7LaktYbGqzGWgQLFAzsf81CBiKwCvk-Ipdjf8L7BKYo9X93NiNmjucCjzSgxZiikVhC406EBtej1BvYQHyURkiY=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZIFhsreGFZdEhFJMegu-sq9nV3XV6R5e6T_IL4pfVEDmCRnsCITmzA_rcPi2kk3Ni1RVc2yDSsQ0YOFES82lRf_826DEcKHeU=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZv75eJ-oeqIDQ-7q3pRGBoqBC0-zW2oud31xltgcZRiHt7y9TStkswP_rbMOnRws7C36e1cek03YZTtTzzQXf0WFSq29vK6bY=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbKf0aJCyy1F5aFsAB3aSW69ynzp8UYUAmHqv_-2L1koo4qQdfr4jFzxgnzmC-Uj6V6fboQXvRRESA33eAZhmulGcuNNsBdDFE=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpiha_tVenZ4xfp7hftpbF466mrVMjbw0Kx82cO00EpZNoAEOtyGSUPJ2P1EJ-upK8w3Z8z0I64oKgiaF4xbc9_FFz-HKYJCWPRpg=s1600-rw-v1" onClick={image} />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYOrnDsMcqBkAu30PcrHu3pY-YBCNDrsns6rGpF7xkIQe6bGlJQVK0hkAqNMfoeS75qedy9ybFzeVhNLF8hN0eJD4zEvjEQvxk=s1600-rw-v1" onClick={image} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bus;