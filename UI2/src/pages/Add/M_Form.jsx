import { useNavigate } from "react-router-dom";

function M_Form() {
  const navigate = useNavigate();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const role = event.target.role.value;
    const company = event.target.company.value;
    const image = event.target.image.value;
    const member = {
      name,
      email,
      role,
      company,
      image,
    };
    fetch("https://cloud-campus-backend.onrender.com/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-member");
        }
      });
  }
  return (
    <>
      <form
        method="POST"
        onSubmit={formHandle}
        className="m-auto w-96 bg-[#161A30] px-10 pt-4 pb-3 rounded-lg border-1 border-[#B6BBC4] text-[#B6BBC4] font-semibold"
      >
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Add Member
        </h1>
        <div className="grid md:grid-cols-1 md:gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=""
              required="y"
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NAME
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="email"
              id="email"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
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
              name="role"
              id="role"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
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
              name="company"
              id="company"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="company"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company
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
          Submit
        </button>
      </form>
    </>
  );
}

export default M_Form;
