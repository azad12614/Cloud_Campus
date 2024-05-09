// CourseForm.js 
import React, { useState } from 'react';

const CourseForm = ({ onAddCourse }) => {
    const [courseName, setCourseName] = useState('');
    const [creditHours, setCreditHours] = useState(1);
    const [grade, setGrade] = useState('A+');

    const handleAddCourse = () => {
        if (courseName && creditHours > 0 && grade) {
            const newCourse = {
                courseName,
                creditHours,
                grade,
            };

            onAddCourse(newCourse);
            setCourseName('');
            setCreditHours(1);
            setGrade('A+');
        } else {
            alert('Please enter valid course details.');
        }
    };

    return (
        <div className="section1">
            <div>
                <p>Course</p>
                <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
            </div>
            <div>
                <p>Credits</p>
                <select value={creditHours} onChange={(e) => setCreditHours(Number(e.target.value))}>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                {/* <input 
					type="text"
					value={creditHours} 
					onChange={(e) => setCreditHours(Number(e.target.value))} 
				/>  */}
            </div>
            <div>
                <p>Grade</p>
                <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </div>
            <div>
                <p style={{ opacity: 0 }}>-</p>
                <button onClick={handleAddCourse}>Add</button>
            </div>
        </div>
    );
};

export default CourseForm; 