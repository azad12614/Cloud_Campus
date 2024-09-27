import { useLoaderData, useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const sir = useLoaderData();

    function formHandle(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const role = event.target.role.value;
        const phd = event.target.phd.value;
        const msc = event.target.msc.value;
        const bsc = event.target.bsc.value;
        const gs = event.target.gs.value;
        const rg = event.target.rg.value;
        const od = event.target.od.value;
        const image = event.target.image.value;
        const Teacher = {
            name,
            email,
            number,
            role,
            phd,
            msc,
            bsc,
            gs,
            rg,
            od,
            image,
        };
        fetch(`https://cloud-campus-backend.onrender.com/update-sir/${sir?._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(Teacher),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/manage-sir");
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
                    <h1 className="text-center text-4xl font-semibold text-white pb-4">Update sir</h1>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.name}
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
                            name="email"
                            id="email"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.email}
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            E-mail
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="number"
                            id="number"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.number}
                        />
                        <label
                            htmlFor="number"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Number
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="phd"
                            id="phd"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.phd}
                        />
                        <label
                            htmlFor="phd"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phd
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="msc"
                            id="msc"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.msc}
                        />
                        <label
                            htmlFor="msc"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            M.Sc.
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="bsc"
                            id="bsc"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.bsc}
                        />
                        <label
                            htmlFor="bsc"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            B.Sc.
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="role"
                            id="role"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.role}
                        />
                        <label
                            htmlFor="role"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Role
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="gs"
                            id="gs"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.gs}
                        />
                        <label
                            htmlFor="gs"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Google Scholar
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="rg"
                            id="rg"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.rg}
                        />
                        <label
                            htmlFor="rg"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Research Gate
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-3 group">
                        <input
                            type="text"
                            name="od"
                            id="od"
                            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required=""
                            defaultValue={sir?.od}
                        />
                        <label
                            htmlFor="od"
                            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            ORCID
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
                            defaultValue={sir?.image}
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
