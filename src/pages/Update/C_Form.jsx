import { useLoaderData, useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const course = useLoaderData();

    function formHandle(event) {
        event.preventDefault();
        const semester = event.target.semester.value;
        const code = event.target.code.value;
        const name = event.target.name.value;
        const credit = event.target.credit.value;
        const coCourse = event.target.coCourse.value;
        const preCourse = event.target.preCourse.value;
        const image = event.target.image.value;
        const courses = {
            semester,
            code,
            name,
            credit,
            coCourse,
            preCourse,
            image,
        };
        fetch(`https://cloud-campus-backend.onrender.com/update-course/${course?._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(courses),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/manage-course");
                }
            });
    }
    return (
        <>
            <form
                method="PUT"
                onSubmit={formHandle}
                className="m-auto w-96 bg-[#161A30] px-10 pt-4 pb-3 rounded-lg border-1 border-[#B6BBC4] text-[#B6BBC4] font-semibold"
            >
                <div className="grid md:grid-cols-1 md:gap-2">
                    <h1 className="text-center text-4xl font-semibold text-white pb-4">Update course</h1>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="semester"
                            id="semester"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.semester}
                        />
                        <label
                            htmlFor="semester"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Semester
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="code"
                            id="code"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.code}
                        />
                        <label
                            htmlFor="code"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Code
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.name}
                        />
                        <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="credit"
                            id="credit"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.credit}
                        />
                        <label
                            htmlFor="credit"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Credit
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="coCourse"
                            id="coCourse"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.coCourse}
                        />
                        <label
                            htmlFor="coCourse"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Co-requisite Course Code
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="preCourse"
                            id="preCourse"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.preCourse}
                        />
                        <label
                            htmlFor="preCourse"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Pre-requisite Course Code
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="image"
                            id="image"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={course?.image}
                        />
                        <label
                            htmlFor="image"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Image URL
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
                >
                    Update
                </button>
            </form>
        </>
    );
}

export default Form;
