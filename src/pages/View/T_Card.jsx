import React from "react";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Card = () => {
    const [Teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-sir`)
            .then((res) => res.json())
            .then((data) => setTeachers(data));
    }, []);

    function single(sir) {
        const pic = sir?.image;
        console.log(pic);
        return (
            <div className="bg-[#161A30] shadow-xl my-2 mx-auto" key={sir._id}>
                <div className="m-auto border-2 border-dark">
                    <figure>
                        <img
                            className="object-cover h-52 w-64"
                            src={`${pic}`}
                            alt="sir image"
                        />
                    </figure>
                </div>
                <div className="card-body text-[#fed7aa]">
                    <h4 className="card-title text-center font-bold text-2xl mx-auto -my-4 h-20">
                        {sir.name}
                    </h4>
                    <h1 className="btn text-center text-[#FFFFFF] font-bold text-xl bg-transparent border-0">
                        {sir.role}
                    </h1>
                    <div className="card-actions justify-evenly">
                        <button
                            className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
                            onClick={() => document.getElementById(`${sir?._id}+${sir?.name}`).showModal()}
                        >
                            Education
                        </button>
                        <dialog id={`${sir?._id}+${sir?.name}`} className="modal">
                            <div className="modal-box bg-[#31304D]">
                                <h3 className="font-bold text-lg">Education Info</h3>
                                <p className="py-4">
                                    PhD: {`${sir?.phd}`};<br></br>
                                    M.Sc.: {`${sir?.msc}`};<br></br>
                                    B.Sc.: {`${sir?.bsc}`};
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn bg-[#161A30]">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button
                            className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
                            onClick={() => document.getElementById(`${sir?.name}+${sir?.role}`).showModal()}
                        >
                            Contact
                        </button>
                        <dialog id={`${sir?.name}+${sir?.role}`} className="modal">
                            <div className="modal-box bg-[#31304D]">
                                <h3 className="font-bold text-lg">Contact Info</h3>
                                <p className="py-4">
                                    E-mail: {`${sir?.email}`};<br></br>
                                    Mobile number: {`${sir?.number}`};
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn bg-[#161A30]">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div className="card-actions justify-evenly mt-3 -mb-3">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="https://twitter.com/login" target="_blank">
                            <FaXTwitter></FaXTwitter>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-2">
            {Teachers.map((sir) => single(sir))}
        </div>
    );
};

export default Card;
