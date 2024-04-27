import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Syllabus() {
    return (
        <>
            <div className="d-flex flex-column max-w-full overflow-x-hidden">
                <Navbar />
                <div className='lg:mt-40 mt-28'>
                    <object
                        data='../../src\assets\CSE_Syllabus-Autumn-2022-UGC (updated 20.09.22) 12PM.pdf'
                        type="application/pdf"
                        width="100%"
                        height="850"
                    >
                        <iframe
                            src='../../src\assets\CSE_Syllabus-Autumn-2022-UGC (updated 20.09.22) 12PM.pdf'
                            width="100%"
                            height="850"
                        >
                            <p>This browser does not support PDF!</p>
                        </iframe>
                    </object>
                </div>
                {/* <div className="fixed bottom-0 w-full z-[10]"> */}
                <Footer></Footer>
                {/* </div> */}
            </div>
        </>
    )
}

export default Syllabus