import { Link } from "react-router-dom";
import pic1 from "../images/logo.png";
function Navbar() {
  const logo = pic1;
  return (
    <>
      <div className="navbar mx-auto px-1 lg:px-3 max-w-screen bg-[#161A30]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-[#fed7aa]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bg-[#161A30] text-[#fed7aa] menu menu-md dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Alumni</summary>
                  <ul>
                    <li>
                      <Link to={"/add-member"}>Add Member</Link>
                    </li>
                    <li>
                      <Link to={"/view-member"}>View Member</Link>
                    </li>
                    <li>
                      <Link to={"/manage-member"}>Manage Member</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Courses</summary>
                  <ul>
                    <li>
                      <Link to={"/add-course"}>Add Course</Link>
                    </li>
                    <li>
                      <Link to={"/view-course"}>View Course</Link>
                    </li>
                    <li>
                      <Link to={"/manage-course"}>Manage Course</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Section</summary>
                  <ul>
                    <li>
                      <Link to={"/add-section"}>Add Section</Link>
                    </li>
                    <li>
                      <Link to={"/view-section"}>View Section</Link>
                    </li>
                    <li>
                      <Link to={"/manage-section"}>Manage Section</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Teacher</summary>
                  <ul>
                    <li>
                      <Link to={"/add-sir"}>Add Teacher</Link>
                    </li>
                    <li>
                      <Link to={"/view-sir"}>View Teacher</Link>
                    </li>
                    <li>
                      <Link to={"/manage-sir"}>Manage Teacher</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          {/* <div className="btn btn-ghost text-xl text-[#fed7aa] bg-[#3E001F] hover:bg-transparent border-0 rounded-full">3A</div> */}
          <Link to={"/"}>
            <img src={`${logo}`} className="-m-4 ml-3 w-16 rounded-lg" />
          </Link>
        </div>
        <div className="navbar-center mr-20 hidden lg:flex">
          <ul className="menu menu-horizontal text-[#fed7aa]">
            <li className="font-bold">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Team
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-[#161A30] mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-member"}>Add Member</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-member"}>View Member</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-member"}>Manage Member</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Course
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-[#161A30] mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-course"}>Add Course</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-course"}>View Course</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-course"}>Manage Course</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Section
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-[#161A30] mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-section"}>Add Section</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-section"}>View Section</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-section"}>Manage Section</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Teacher
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-[#161A30] mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-sir"}>Add Teacher</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-sir"}>View Teacher</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-sir"}>Manage Teacher</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
