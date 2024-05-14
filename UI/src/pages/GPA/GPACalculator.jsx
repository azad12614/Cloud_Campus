// GPACalculator.js 

import React, { useState } from 'react';
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import './GPACalculator.css';

const gradePoints = {
    'A+': 4.0,
    'A': 3.75,
    'A-': 3.50,
    'B+': 3.25,
    'B': 3.00,
    'B-': 2.75,
    'C+': 2.50,
    'C': 2.25,
    'D': 2.00,
    'F': 0.0
};

const GPACalculator = () => {
    const [courses, setCourses] = useState([]);

    const handleAddCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    const handleDeleteCourse = (index) => {
        const updatedCourses = courses.filter((course, i) => i !== index);
        setCourses(updatedCourses);
    };

    const calculateGPA = () => {
        let totalGradePoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            totalGradePoints += gradePoints[course.grade] * course.creditHours;
            totalCreditHours += course.creditHours;
        });

        return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours;
    };

    const totalCredit = () => {
        let totalCredit = 0;

        courses.forEach((course) => {
            totalCredit += course.creditHours;
        });
        return totalCredit;
    };


    return (
        <>
            <Navbar />
            <Section text={"GPA Calculator"}></Section>
            <div className='cgpa_container'>
                <div className="section">
                    <CourseForm onAddCourse={handleAddCourse} />
                    <CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} totalCredit={totalCredit} />
                </div>
            </div>
            <Links />
            <Footer />
        </>
    );
};

export default GPACalculator; 