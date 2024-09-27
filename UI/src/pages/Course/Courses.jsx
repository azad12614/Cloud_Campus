import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Courses.css";

function Course() {

    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-courses`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    function single(course) {
        return (
            <>
                <div className="ag-courses_item" key={course._id}>
                    <a href={course?.image} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div id="ag-courses-item_code">
                            {course.code}
                        </div>
                        <div className="ag-courses-item_name">
                            {course.name}
                        </div>
                        <div className="ag-courses-item_credit">
                            Credit:
                            <span className="ag-courses-item_value">
                                {`${course?.credit}`}
                            </span>
                        </div>
                        <div className="ag-courses-item_pre">
                            Pre-requisite:
                            <span className="ag-courses-item_value">
                                {`${course?.preCourse}`}
                            </span>
                        </div>
                        <div className="ag-courses-item_co">
                            Co-requisite:
                            <span className="ag-courses-item_value">
                                {`${course?.coCourse}`}
                            </span>
                        </div>
                    </a>
                </div>
            </>
        );
    }

    return (
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Section text={"Course Offer"}></Section>
            <h2>Select Semester</h2>

            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab tab-active" className="tab tabList" aria-label="1st" defaultChecked />
                <div role="tabpanel" className="tab-content">
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="2nd" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="3rd" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="4th" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="5th" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="6th" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="7th" />
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

                <input type="radio" name="my_tabs_2" role="tab" className="tab tabList" aria-label="8th" />
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

            {/* <div className="fixed bottom-0 w-full z-[10]"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default Course;
