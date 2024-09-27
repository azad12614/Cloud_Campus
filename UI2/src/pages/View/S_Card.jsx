import React from "react";
import { useEffect, useState } from "react";

const Card = () => {
    const [Sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`https://cloud-campus-backend.onrender.com/all-sections`)
            .then((res) => res.json())
            .then((data) => setSections(data));
    }, []);

    function single(section) {
        const pic = section?.image;
        console.log(pic);
        return (
            <div className="bg-[#161A30] shadow-xl my-2" key={section._id}>
                <div className="m-auto border-2 border-dark">
                    <figure>
                        <img
                            className="object-cover h-36 w-52"
                            src={`${pic}`}
                            alt="section image"
                        />
                    </figure>
                </div>
                <div className="card-body text-[#fed7aa]">
                    <h4 className="card-title justify-evenly font-bold text-2xl -m-4">
                        {section.name}
                    </h4>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-2">
            {Sections.map((section) => single(section))}
        </div>
    );
};

export default Card;
