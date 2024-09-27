import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";

function Table() {
    const navigate = useNavigate();
    const sections = useLoaderData();
    function handleDelete(id) {
        fetch(`https://cloud-campus-backend.onrender.com/delete-section/${id}`, {
            method: "DELETE"
        }).then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/manage-section");
                }
            })

    }
    return (
        <>
            <div className="my-auto mx-auto md:mx-40 lg:mx-96">
                <h1 className="text-center text-4xl font-semibold text-white pb-4">
                    Manage Sections
                </h1>
                <table className="table table-dark">
                    <thead>
                        <tr className="border-[#000000]">
                            <th className="text-center font-bold text-lg ">Name</th>
                            <th className="text-center font-bold text-lg ">Image</th>
                            <th className="text-center font-bold text-lg ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sections?.map((section) => (
                            <tr className="hover" key={section._id}>
                                <td className="text-center text-lg border-[#000000] ">{section.name}</td>
                                <td className="text-center text-lg border-[#000000] "><a href={section.image}>URL</a></td>
                                <td className="text-center text-lg border-[#000000] ">
                                    <button className="btn btn-sm md:btn-md lg:btn-lg btn-warning  mx-1" onClick={() => handleDelete(section?._id)}> <TbHttpDelete></TbHttpDelete> </button>
                                    <Link to={`/update-section/${section?._id}`}>
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
