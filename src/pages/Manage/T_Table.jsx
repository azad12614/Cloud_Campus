import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";

function Table() {
  const navigate = useNavigate();
  const Teacher = useLoaderData();
  function handleDelete(id) {
    fetch(`https://cloud-campus-backend.onrender.com/delete-sir/${id}`, {
      method: "DELETE"
    }).then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-sir");
        }
      })

  }
  return (
    <>
      <div className="my-auto mx-auto md:mx-40 lg:mx-96">
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Manage Teacher
        </h1>
        <table className="table table-dark">
          <thead>
            <tr className="border-[#000000]">
              <th className="text-center font-bold text-lg ">Name</th>
              <th className="text-center font-bold text-lg ">E-mail</th>
              <th className="text-center font-bold text-lg ">Mobile</th>
              <th className="text-center font-bold text-lg ">Phd</th>
              <th className="text-center font-bold text-lg ">M.Sc.</th>
              <th className="text-center font-bold text-lg ">B.Sc.</th>
              <th className="text-center font-bold text-lg ">Role</th>
              <th className="text-center font-bold text-lg ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Teacher?.map((sir) => (
              <tr className="hover" key={sir._id}>
                <td className="text-center text-lg border-[#000000] ">{sir.name}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.email}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.number}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.phd}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.msc}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.bsc}</td>
                <td className="text-center text-lg border-[#000000] ">{sir.role}</td>
                <td className="text-center text-lg border-[#000000] ">
                  <button className="btn btn-sm md:btn-md lg:btn-lg btn-warning  mx-1" onClick={() => handleDelete(sir?._id)}> <TbHttpDelete></TbHttpDelete> </button>
                  <Link to={`/update-sir/${sir?._id}`}>
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
