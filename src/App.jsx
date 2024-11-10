import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import AddMember from "./pages/Add/Member";
import ViewMember from "./pages/View/Member";
import ManageMember from "./pages/Manage/Member";
import UpdateMember from "./pages/Update/Member";

import AddCourse from "./pages/Add/Course";
import ViewCourse from "./pages/View/Course";
import ManageCourse from "./pages/Manage/Course";
import UpdateCourse from "./pages/Update/Course";

import AddSection from "./pages/Add/Section";
import ViewSection from "./pages/View/Section";
import ManageSection from "./pages/Manage/Section";
import UpdateSection from "./pages/Update/Section";

import AddTeacher from "./pages/Add/Teacher";
import ViewTeacher from "./pages/View/Teacher";
import ManageTeacher from "./pages/Manage/Teacher";
import UpdateTeacher from "./pages/Update/Teacher";

function App() {
  const URL = "https://cloud-campus-backend.onrender.com"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-member",
      element: <AddMember />,
    },
    {
      path: "/view-member",
      element: <ViewMember />,
      loader: function () {
        return fetch(`${URL}/all-members`);
      },
    },
    {
      path: "/manage-member",
      element: <ManageMember />,
      loader: function () {
        return fetch(`${URL}/all-members`);
      },
    },
    {
      path: "/update-member/:id",
      element: <UpdateMember></UpdateMember>,
      loader: function ({ params }) {
        return fetch(`${URL}/member/${params.id}`);
      },
    },
    {
      path: "/add-course",
      element: <AddCourse />,
    },
    {
      path: "/view-course",
      element: <ViewCourse />,
      loader: function () {
        return fetch(`${URL}/all-courses`);
      },
    },
    {
      path: "/manage-course",
      element: <ManageCourse />,
      loader: function () {
        return fetch(`${URL}/all-courses`);
      },
    },
    {
      path: "/update-course/:id",
      element: <UpdateCourse></UpdateCourse>,
      loader: function ({ params }) {
        return fetch(`${URL}/course/${params.id}`);
      },
    },
    {
      path: "/add-section",
      element: <AddSection />,
    },
    {
      path: "/view-section",
      element: <ViewSection />,
      loader: function () {
        return fetch(`${URL}/all-sections`);
      },
    },
    {
      path: "/manage-section",
      element: <ManageSection />,
      loader: function () {
        return fetch(`${URL}/all-sections`);
      },
    },
    {
      path: "/update-section/:id",
      element: <UpdateSection></UpdateSection>,
      loader: function ({ params }) {
        return fetch(`${URL}/section/${params.id}`);
      },
    },
    {
      path: "/add-sir",
      element: <AddTeacher />,
    },
    {
      path: "/view-sir",
      element: <ViewTeacher />,
      loader: function () {
        return fetch(`${URL}/all-sir`);
      },
    },
    {
      path: "/manage-sir",
      element: <ManageTeacher />,
      loader: function () {
        return fetch(`${URL}/all-sir`);
      },
    },
    {
      path: "/update-sir/:id",
      element: <UpdateTeacher></UpdateTeacher>,
      loader: function ({ params }) {
        return fetch(`${URL}/sir/${params.id}`);
      },
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
