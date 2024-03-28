import React from "react";
import { useEffect, useState } from "react";

const Card = () => {
    const [Sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/all-sections`)
            .then((res) => res.json())
            .then((data) => setSections(data));
    }, []);

    function single(section) {
        const pic = section?.image;
        console.log(pic);
        return (
            <div className="bg-[#161A30] shadow-xl mb-4" key={section._id}>
                <div className="m-auto border-2 border-dark">
                    <figure>
                        <img
                            className="object-cover h-52 w-64"
                            src={`${pic}`}
                            alt="section image"
                        />
                    </figure>
                </div>
                <div className="card-body text-[#fed7aa]">
                    <h4 className="card-title justify-evenly font-bold text-2xl -mt-5 mb-2">
                        {section.name}
                    </h4>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
            {Sections.map((section) => single(section))}
        </div>
    );
};

export default Card;
