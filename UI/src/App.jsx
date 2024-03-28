import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Class from "./pages/Schedule/Class.jsx";
import Course from "./pages/Course/Course.jsx";
import Teacher from "./pages/People/Teacher.jsx";
import Member from "./pages/People/Member.jsx";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
