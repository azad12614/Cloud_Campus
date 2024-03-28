import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Member.css";

function Member() {
    const myh1 = {
        paddingTop: "100px",
        paddingBottom: "39px",
        fontSize: "3.5rem",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
    }
    return (
        <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
            <Navbar></Navbar>
            <h1 style={myh1}>Contributor</h1>
            <div id="container">
                <div class="card" id="deadpool">
                    <div class="card-text">
                        <div>
                            <span>

                                Abdullah AL Azad
                            </span>
                        </div>
                        <div>02461</div>
                    </div>
                    <div class="card-image">
                        <p>&copy; 1979 Marvel <br />Comics Group</p>
                        <img src="https://www.pngkey.com/png/full/82-824923_deadpool-deadpool-marvel-comics.png" />
                    </div>
                </div>
                <div class="card" id="spiderman">
                    <div class="card-image">
                        <img src="https://pngimg.com/uploads/spider_man/spider_man_PNG59.png" />
                    </div>
                    <div class="card-text">
                        <h2>MARVEL</h2>

                        <div>
                            <div>
                                <span>COMICS</span>
                                <span>GROUP</span>

                            </div>
                            <div><span>12</span><span>&cent;</span></div>
                        </div>
                    </div>
                </div>
                <div class="card" id="hulk">
                    <div class="card-image">
                        <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png" />
                    </div>
                    <div class="card-text">
                        <h2>CTO</h2>
                        <p>Md. Ariful<br />Islam</p>
                        <div>
                            <div>
                                <span>15</span>
                                <span>&cent;</span>
                                <span>&cent;</span>

                            </div>
                            <div><span>27</span><span>May</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto mb-0">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Member;
