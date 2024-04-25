import { Link } from "react-router-dom";

import cc from "../assets/Cloud_Campus1.png";

function Footer() {
  return (
    <>
      <footer className="max-w-screen bg-[#00d9ff] text-white px-5">
        <div className="footer-logo">
          <Link to='/'>
            <img src={cc} className="w-36 h-36 rounded-full" />
          </Link>
        </div>
        <hr className="border-[#555] border-3" />
        <h4 className="text-3xl text-[#000] font-medium text-center py-2">
          © ALL OF THE RIGHTS RESERVED.
        </h4>
      </footer>
    </>
  );
}

export default Footer;
