import IIUC from "../assets/IIUC.png";
function Hero() {
  return (
    <>
      <div
        className="hero mx-auto w-screen vh-100"
      >
        <video src="https://www.shutterstock.com/shutterstock/videos/1053758117/preview/stock-footage-flying-inside-artificial-intelligence-digital-brain-bid-data-illustration-of-thinking-process.webm" autoPlay loop muted id="HV" />
        <div className="hero-content flex-col lg:flex-row-reverse -mt-96">
          <div className="text-center hero-title logo">
            {/* <h2>
              <span>C</span>loud
              <span>C</span>ampus
            </h2>
            <h3>Presents</h3> */}
            <img src="https://yt3.googleusercontent.com/dgqyEcZOrvmDeHde_rnn6Up1vBSgWWsnaoJu6IYCESpNwuzlHjbM2YYz0V-aAx7N1i_XK2XuYvk=s900-c-k-c0x00ffffff-no-rj" />
            {/* <h1>
              Department of Computer Science and Engineering
            </h1> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
