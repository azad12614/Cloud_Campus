import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { TbHttpDelete } from "react-icons/tb";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const courses = useLoaderData();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://cloud-campus-backend.onrender.com/delete-course/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.acknowledged) {
        navigate("/manage-course");
      } else {
        setError("Failed to delete course. Please try again.");
      }
    } catch (err) {
      setError(
        "An error occurred while deleting the course. Please try again later."
      );
    }
  };

  const updateSemesterEightToNine = async (course) => {
    setError(null);

    console.log(course);

    try {
      const updatedCourse = { ...course, semester: "9" };
      console.log(updatedCourse);
      fetch(
        `https://cloud-campus-backend.onrender.com/update-course/${course?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedCourse),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            navigate("/manage-course");
          }
        });
    } catch (error) {
      console.error("Error updating courses:", error);
      setError(error.message); // Set the error message from the caught error
    }
  };

  return (
    <>
      <div className="my-auto mx-auto md:mx-40 lg:mx-96">
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Manage Course
        </h1>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {!error && (
          <table className="table table-dark">
            <thead>
              <tr className="border-[#000000]">
                <th className="text-center font-bold text-lg ">Semester</th>
                <th className="text-center font-bold text-lg ">Code</th>
                <th className="text-center font-bold text-lg ">Name</th>
                <th className="text-center font-bold text-lg ">Credit</th>
                <th className="text-center font-bold text-lg ">Co-requisite</th>
                <th className="text-center font-bold text-lg ">
                  Pre-requisite
                </th>
                <th className="text-center font-bold text-lg ">Image</th>
                <th className="text-center font-bold text-lg ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course) => (
                <tr className="hover" key={course._id}>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.semester}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.code}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.name}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.credit}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.coCourse}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    {course.preCourse}
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    <a href={course.image}>URL</a>
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    <button
                      className="btn btn-sm md:btn-md lg:btn-lg btn-warning  mx-1"
                      onClick={() => handleDelete(course?._id)}
                    >
                      <TbHttpDelete></TbHttpDelete>
                    </button>
                    <Link to={`/update-course/${course?._id}`}>
                      <button className="btn btn-sm md:btn-md lg:btn-lg btn-primary mx-1">
                        <GrUpdate></GrUpdate>
                      </button>
                    </Link>
                  </td>
                  <td className="text-center text-lg border-[#000000] ">
                    <button
                      className="btn btn-sm md:btn-md lg:btn-lg btn-warning  mx-1"
                      onClick={() => updateSemesterEightToNine(course)}
                      disabled={course.semester != 8}
                    >
                      Update 8 to 9
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Table;
