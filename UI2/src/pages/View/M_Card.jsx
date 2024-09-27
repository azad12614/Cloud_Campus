import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Card = () => {
    const [Members, setMembers] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-members`)
            .then((res) => res.json())
            .then((data) => setMembers(data));
    }, []);

    function single(member) {
        const pic = member?.image;
        console.log(pic);
        return (
            <div className="bg-[#161A30] shadow-xl my-2" key={member._id}>
                <div className="m-auto border-2 border-dark">
                    <figure>
                        <img
                            className="object-cover h-52 w-64"
                            src={`${pic}`}
                            alt="Member image"
                        />
                    </figure>
                </div>
                <div className="card-body text-[#fed7aa]">
                    <h4 className="card-title justify-evenly font-bold text-2xl -mt-2">
                        {member.name}
                    </h4>
                    <div className="card-actions justify-evenly">
                        <button
                            className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
                            onClick={() => document.getElementById(`${member?._id}+${member?.name}`).showModal()}
                        >
                            Details
                        </button>
                        <dialog id={`${member?._id}+${member?.name}`} className="modal">
                            <div className="modal-box bg-[#31304D]">
                                <h3 className="font-bold text-lg">Job info!</h3>
                                <p className="py-4">
                                    Role: {`${member?.role}`}<br></br>
                                    Company: {`${member?.company}`};
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
                            onClick={() => document.getElementById(`${member?._id}+${member?.email}`).showModal()}
                        >
                            E-mail
                        </button>
                        <dialog id={`${member?._id}+${member?.email}`} className="modal">
                            <div className="modal-box bg-[#31304D]">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">
                                    You can contact with me by the E-mail address!!!<br></br>
                                    E-mail: {`${member?.email}`};
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
        <>
            <h1 className="text-white text-4xl font-bold mx-auto mt-2">Alumni</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-2">
                {Members.map((member) => single(member))}
            </div>
        </>
    );
};

export default Card;
