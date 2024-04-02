import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Course from "./pages/Course/Course.jsx";
import Home from "./pages/Home/Home.jsx";
import Academic from "./pages/Edu/Academic.jsx";
import Syllabus from "./pages/Edu/Syllabus.jsx";
import Member from "./pages/People/Member.jsx";
import Teacher from "./pages/People/Teacher.jsx";
import Class from "./pages/Schedule/Class.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Course />,
    },
    {
      path: "/class",
      element: <Class />,
    },
    {
      path: "/teacher",
      element: <Teacher />,
    },
    {
      path: "/member",
      element: <Member />,
    },
    {
      path: "/ac",
      element: <Academic />,
    },
    {
      path: "/syllabus",
      element: <Syllabus />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
