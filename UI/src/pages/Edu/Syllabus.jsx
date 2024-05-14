import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pdf from "../../assets/CSE_Syllabus.pdf";

function Syllabus() {
    return (
        <>
            <div className="d-flex flex-column max-w-full overflow-x-hidden">
                <Navbar />
                <div className='mt-44'>
                    <iframe
                        src={pdf}
                        width="100%"
                        height="100%"
                    >
                    </iframe>
                    {/* <object data="../../src/assets/CSE_Syllabus-Autumn-2022-UGC (updated 20.09.22) 12PM.pdf" type="application/pdf"
                        width="100%"
                        height="680"
                    ></object> */}
                </div>
                {/* <div className="fixed bottom-0 w-full z-[10]"> */}
                <Footer></Footer>
                {/* </div> */}
            </div>
        </>
    )
}

export default Syllabus