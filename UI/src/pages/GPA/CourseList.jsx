// CourseList.js 
import React from 'react';

const CourseList = ({ courses, onDeleteCourse, calculateGPA, totalCredit }) => {
    return (
        <div className="section2">
            <div>
                <h2>Course List</h2>
                <ul style={{ borderBottom: '1px solid #ced4da', paddingBottom: '10px' }}>
                    <li>Course</li>
                    <li>Credits</li>
                    <li>Grade</li>
                    <li>Action</li>
                </ul>
                {courses.map((course, index) => (
                    <ul key={index}>
                        <li>{course.courseName}</li>
                        <li>{course.creditHours}</li>
                        <li>{course.grade}</li>
                        <li><button onClick={() => onDeleteCourse(index)}>Delete</button></li>
                    </ul>
                ))}
            </div>
            <div>
                <h3>Credits taken: {totalCredit()}</h3>
                <h3>GPA: {calculateGPA().toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default CourseList; 