import React, { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Class.css";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

function Class() {
  const [Sections, setSections] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

  useEffect(() => {
    fetch(`https://cloud-campus-backend.onrender.com/all-sections`)
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  function single(section) {
    return (
      <>
        <a key={section?._id} href={section?.image} target="_blank">
          <li key={section?._id}>
            <div class="icon">
              <SiGoogleclassroom />
            </div>
            <div class="title">{section?.name}</div>
          </li>
        </a>
      </>
    );
  }

  const Semester = (semester) => (
    <>
      <div className="List">
        <ol>
          {Sections.map((section) =>
            section?.name[0] === semester ? single(section) : null
          )}
        </ol>
      </div>
    </>
  );

  return (
    <>
      <div className="Class pages">
        <Navbar></Navbar>
        <Section text={"Class Schedule"}></Section>
        <h2>Select Semester</h2>

        <div className="tab-wrapper">
          <div className="courses-tabs">
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => setActiveTab(semester)}
                className={`tabLabel ${activeTab === semester ? "active" : ""}`}
              >
                {semester}
              </button>
            ))}
          </div>

          <div className="tab-content">{Semester(activeTab)}</div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Class;
