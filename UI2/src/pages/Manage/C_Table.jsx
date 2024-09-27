import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TbHttpDelete } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";

function Table() {
  const navigate = useNavigate();
  const team = useLoaderData();
  function handleDelete(id) {
    fetch(`https://cloud-campus-backend.onrender.com/delete-course/${id}`, {
      method: "DELETE"
    }).then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-course");
        }
      })

  }
  return (
    <>
      <div className="my-auto mx-auto md:mx-40 lg:mx-96">
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Manage Course
        </h1>
        <table className="table table-dark">
          <thead>
            <tr className="border-[#000000]">
              <th className="text-center font-bold text-lg ">Semester</th>
              <th className="text-center font-bold text-lg ">Code</th>
              <th className="text-center font-bold text-lg ">Name</th>
              <th className="text-center font-bold text-lg ">Credit</th>
              <th className="text-center font-bold text-lg ">Co-requisite</th>
              <th className="text-center font-bold text-lg ">Pre-requisite</th>
              <th className="text-center font-bold text-lg ">Image</th>
              <th className="text-center font-bold text-lg ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {team?.map((course) => (
              <tr className="hover" key={course._id}>
                <td className="text-center text-lg border-[#000000] ">{course.semester}</td>
                <td className="text-center text-lg border-[#000000] ">{course.code}</td>
                <td className="text-center text-lg border-[#000000] ">{course.name}</td>
                <td className="text-center text-lg border-[#000000] ">{course.credit}</td>
                <td className="text-center text-lg border-[#000000] ">{course.coCourse}</td>
                <td className="text-center text-lg border-[#000000] ">{course.preCourse}</td>
                <td className="text-center text-lg border-[#000000] "><a href={course.image}>URL</a></td>
                <td className="text-center text-lg border-[#000000] ">
                  <button className="btn btn-sm md:btn-md lg:btn-lg btn-warning  mx-1" onClick={() => handleDelete(course?._id)}> <TbHttpDelete></TbHttpDelete> </button>
                  <Link to={`/update-course/${course?._id}`}>
                    <button className="btn btn-sm md:btn-md lg:btn-lg btn-primary mx-1"> <GrUpdate></GrUpdate> </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
