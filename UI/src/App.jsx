import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bus from "./pages/Schedule/Bus.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Course from "./pages/Course/Courses.jsx";
import Academic from "./pages/Edu/Academic.jsx";
import Syllabus from "./pages/Edu/Syllabus.jsx";
import GPACalculator from "./pages/GPA/GPACalculator.jsx";
import Home from "./pages/Home/Home.jsx";
import Fee from "./pages/Others/Fee.jsx";
import Photo from "./pages/Others/Photo.jsx";
import Member from "./pages/People/Member.jsx";
import Teacher from "./pages/People/Teacher.jsx";
import Class from "./pages/Schedule/Class.jsx";

function App() {
  fetch("https://cloud-campus-backend.onrender.com/");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Course />} />
        <Route path="class" element={<Class />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="member" element={<Member />} />
        <Route path="ac" element={<Academic />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="bus" element={<Bus />} />
        <Route path="photo" element={<Photo />} />
        <Route path="cgpa" element={<GPACalculator />} />
        <Route path="fee" element={<Fee />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
