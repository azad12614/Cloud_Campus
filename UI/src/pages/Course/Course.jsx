import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Course.css";
import React from "react";
import { useEffect, useState } from "react";

function Course() {

    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/all-courses`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const myh1 = {
        paddingTop: "100px",
        paddingBottom: "39px",
        fontSize: "3.5rem",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
    }
    const myh2 = {
        paddingLeft: "12px",
        fontSize: "3rem",
        fontWeight: "300",
        textTransform: "uppercase",
        textAlign: "start",
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
        <div className="d-flex flex-column max-w-full overflow-x-hidden">
            <Navbar></Navbar>
            <h1 style={myh1}>Courses</h1>
            <h2 style={myh2}>Select Semester</h2>

            <div role="tablist" className="tabs tabs-lifted px-4">

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
