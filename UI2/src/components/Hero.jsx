import { Link } from "react-router-dom";
import bg from "../images/bg.png";
function Hero() {
  const pic = bg;
  const heroBg = {
    background: `url(${pic}) no-repeat center center fixed`,
    backgroundSize: "cover",
  }
  return (
    <>
      <div
        className="hero mx-auto w-screen h-screen"
        style={heroBg}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="mt-52 text-pink text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              WELCOME TO THE CSE WORLD!
            </h1>
            <h1 className="my-2 text-orange text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              WHERE LIFE EQUAL TO PERA!!!
            </h1>
            <Link to={"/view-course"}>
              <button className="px-10 btn text-center sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] bg-[#F11A6B] hover:bg-transparent border-0 mt-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
