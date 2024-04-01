import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Course from "./pages/Course/Course.jsx";
import Home from "./pages/Home/Home.jsx";
import Academic from "./pages/Others/Academic.jsx";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
