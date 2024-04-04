import bgvideo from "../assets/bg.mp4";
import IIUC from "../assets/IIUC.png";
function Hero() {
  return (
    <>
      <div
        className="hero mx-auto w-screen vh-100"
      >
        <video src={bgvideo} autoPlay loop muted id="HV" />
        <div className="hero-content flex-col lg:flex-row-reverse -mt-96">
          <div className="text-center hero-title logo">
            <h2>
              <span>C</span>loud
              <span>C</span>ampus
            </h2>
            <h3>Presents</h3>
            <img src={IIUC} className="w-96 h-96" />
            <h1>
              Department of Computer Science and Engineering
            </h1>
          </div>
        </div>
      </div >
    </>
  );
}

export default Hero;
