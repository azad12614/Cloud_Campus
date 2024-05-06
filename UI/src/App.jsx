import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact.jsx";
import Course from "./pages/Course/Courses.jsx";
import Academic from "./pages/Edu/Academic.jsx";
import Syllabus from "./pages/Edu/Syllabus.jsx";
import Home from "./pages/Home/Home.jsx";
import Photo from "./pages/Others/Photo.jsx";
import Member from "./pages/People/Member.jsx";
import Teacher from "./pages/People/Teacher.jsx";
import Class from "./pages/Schedule/Class.jsx";
import Fee from "./pages/Others/Fee.jsx";

function App() {
  fetch("https://cloud-xmqm.onrender.com/");

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
        <Route path="contact" element={<Contact />} />
        <Route path="photo" element={<Photo />} />
        <Route path="fee" element={<Fee />} />
      </Routes>
    </div>
  )
}

export default App;
