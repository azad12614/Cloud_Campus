import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Courses.css";

function Course() {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [semesterCredits, setSemesterCredits] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `https://cloud-campus-backend.onrender.com/all-courses`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setCourses(data);
        calculateSemesterCredits(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const calculateSemesterCredits = (coursesData) => {
    const credits = {};
    coursesData.forEach((course) => {
      if (course.semester && course.credit) {
        const semester = course.semester.toString();
        credits[semester] =
          (credits[semester] || 0) + parseInt(course.credit, 10) || 0; // Parse credit as integer, handle missing values
      }
    });
    setSemesterCredits(credits);
  };

  const renderCourseItem = (course) => (
    <div className="ag-courses_item" key={course._id}>
      <a
        href={course?.image}
        className="ag-courses-item_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="ag-courses-item_bg"></div>
        <div id="ag-courses-item_code">{course.code}</div>
        <div className="ag-courses-item_name">{course.name}</div>
        <div className="ag-courses-item_credit">
          Credit:{" "}
          <span className="ag-courses-item_value">{course?.credit}</span>
        </div>
        <div className="ag-courses-item_pre">
          Pre-requisite:{" "}
          <span className="ag-courses-item_value">{course?.preCourse}</span>
        </div>
        <div className="ag-courses-item_co">
          Co-requisite:{" "}
          <span className="ag-courses-item_value">{course?.coCourse}</span>
        </div>
      </a>
    </div>
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSemesterCourses = (semester) => (
    <div className="ag-format-container">
      <div className="semester-credits">
        Total Credits: {semesterCredits[semester] || 0}
      </div>
      <div className="ag-courses_box">
        {courses.map((course) =>
          course.semester === semester ? renderCourseItem(course) : null
        )}
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column min-h-screen overflow-x-hidden bg-[#d4f0fc]">
      <Navbar />
      <Section text={"Course Offer"} />
      <h2>Select Semester</h2>
      <div role="tablist" className="tabs tabs-lifted">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
          <React.Fragment key={semester}>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab tabList"
              aria-label={`${semester}th`}
              id={`tab-${semester}`}
              checked={activeTab === String(semester)}
              onChange={() => handleTabChange(String(semester))}
            />
            <div
              role="tabpanel"
              className={`tab-content ${
                activeTab === String(semester) ? "" : "hidden"
              }`}
            >
              {renderSemesterCourses(String(semester))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Course;
