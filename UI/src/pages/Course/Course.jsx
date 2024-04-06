import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Course.css";

function Course() {

    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-xmqm.onrender.com/all-courses`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const myh2 = {
        paddingLeft: "12px",
        fontSize: "3rem",
        fontWeight: "300",
        textTransform: "uppercase",
        textAlign: "start",
        marginTop: "60px",
    }

    function single(course) {
        return (
            <>
                <div className="ag-courses_item" key={course._id}>
                    <a href={course?.image} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div id="ag-courses-item_title1">
                            {course.code}
                        </div>
                        <div className="ag-courses-item_title">
                            {course.name}
                        </div>
                        <div className="ag-courses-item_date-box">
                            Credit:
                            <span className="ag-courses-item_date">
                                {`${course?.credit}`}
                            </span>
                        </div>
                        <div className="ag-courses-item_date-box">
                            Co-requisite:
                            <span className="ag-courses-item_date">
                                {`${course?.coCourse}`}
                            </span>
                        </div>
                        <div className="ag-courses-item_date-box">
                            Pre-requisite:
                            <span className="ag-courses-item_date">
                                {`${course?.preCourse}`}
                            </span>
                        </div>
                    </a>
                </div>
            </>
        );
    }

    return (
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#000]">
            <Navbar></Navbar>
            <Section text={"Course Offer"}></Section>
            <h2 style={myh2}>Select Semester</h2>

            <div role="tablist" className="tabs tabs-lifted mb-16">

                <input type="radio" name="my_tabs_2" role="tab tab-active" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="1st" defaultChecked />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "1" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="2nd" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "2" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="3rd" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "3" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="4th" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "4" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="5th" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "5" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="6th" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "6" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="7th" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "7" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-white text-5xl h-20 bg-[#0275dd]" aria-label="8th" />
                <div role="tabpanel" className="tab-content text-white">
                    <div className="ag-format-container">
                        <div className="ag-courses_box">

                            {
                                Courses.map((course) => (
                                    <>
                                        {
                                            course.semester == "8" ? (single(course)) : (<></>)
                                        }
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full z-[10]">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Course;
