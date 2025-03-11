import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import "./Academic.css";

function Academic() {
  const eventsData = [
    {
      event: "Orientation Program for newly admitted students",
      date: "1st & 2nd February 2025",
      duration: "2 days",
    },
    {
      event: "Lecture Period-I",
      date: "04 Feb – 19 March 2025",
      duration: "6 Weeks",
    },
    {
      event: "Registration Period",
      date: "04 Feb – 22 Feb 2025",
      duration: "3 Weeks",
    },
    {
      event: "Course Add & Drop",
      date: "23 Feb – 02 March 2025",
      duration: "1 Week",
    },
    {
      event: "Mid-Term Test",
      date: "06 April – 17 April 2025",
      duration: "10 Days",
    },
    { event: "Result of Mid-Term Test", date: "23 April 2025", duration: "-" },
    {
      event: "Course Withdrawal Period",
      date: "24 April – 03 May 2025",
      duration: "1 Week",
    },
    {
      event: "Lecture Period-II",
      date: "19 April – 25 June 2025",
      duration: "9 Weeks",
    },
    {
      event: "1st Admission Test for Autumn-2025",
      date: "21 - 22 April 2025",
      duration: "2 Days",
    },
    {
      event: "Semester End Exam",
      date: "28 June – 21 July 2025",
      duration: "20 Days",
    },
    {
      event: "Submission of Marks and Result Processing",
      date: "05 July – 27 July 2025",
      duration: "-",
    },
    {
      event: "Publication of Semester Result",
      date: "30 July 2025",
      duration: "-",
    },
  ];

  const holidays = [
    "Shab-e-Miraj - 28 January 2025",
    "Shawtshati Puja - 03 February 2025",
    "Shab-e-Barat - 15 February 2025",
    "International Mother’s Language Day - 21 February 2025",
    "Independence & National Day & Lailatul Qadr & Eid-ul-Fitre - 22 March – 02 April 2025",
    "Bangla New Year - 14 April 2025",
    "May Day - 01 May 2025",
    "Summer vacation - (to be determined)",
    "Buddha Purnima - 11 May 2025",
    "Eid-ul-Azha - 03 - 11 June 2025",
    "Muhammad (Asura) - 06 July 2025",
    "Semester vacation of Spring-2025 - (to be determined)",
  ];

  return (
    <div className="academic-container">
      <Navbar />
      <Section text="Academic Calendar" />

      <main className="academic-content">
        <h2 className="semester-title">Spring Semester - 2025</h2>

        <div className="calendar-box">
          <div className="calendar-events">
            {eventsData.map((item, index) => (
              <div className="event-card" key={index}>
                <h4 className="event-name">{item.event}</h4>
                <p className="event-date">{item.date}</p>
                <p className="event-duration">{item.duration}</p>
              </div>
            ))}
          </div>

          <h3 className="holidays-title">National / University Holidays</h3>
          <ul className="holidays-list">
            {holidays.map((holiday, index) => (
              <li key={index}>{holiday}</li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Academic;
