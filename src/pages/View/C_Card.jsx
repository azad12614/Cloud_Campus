import React from "react";
import { useEffect, useState } from "react";

const Card = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-courses`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    function single(course) {
        return (
            <div className="bg-[#161A30] shadow-xl my-2" key={course?._id}>
                <div className="card-body text-[#fed7aa]">
                    <h1 className="btn text-center text-[#FFFFFF] font-bold text-xl bg-transparent border-0">
                        {course?.code}
                    </h1>
                    <h4 className="card-title text-center font-bold text-2xl mx-auto -mt-4 mb-2 h-20">
                        {course?.name}
                    </h4>
                    <div className="card-actions justify-evenly">
                        <a href={course?.image} target="_blank">
                            <button className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0">
                                Details
                            </button>
                        </a>
                        <button
                            className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
                            onClick={() => document.getElementById(`${course?.code}`).showModal()}
                        >
                            Others
                        </button>
                        <dialog id={`${course?.code}`} className="modal">
                            <div className="modal-box bg-[#31304D]">
                                <h3 className="font-bold text-lg">Credit: {`${course?.credit}`}</h3>
                                <p className="py-4">
                                    Co-requisite: {`${course?.coCourse}`};
                                    <br></br>
                                    Pre-requisite: {`${course?.preCourse}`};
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn bg-[#161A30]">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-2">
            {Courses.map((course) => single(course))}
        </div>
    );
};

export default Card;
