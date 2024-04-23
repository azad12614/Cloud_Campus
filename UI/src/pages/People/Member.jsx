import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Member.css";

function Member() {
    return (
        <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Section text={"Contributor"}></Section>
            <div id="container">
                <div class="card" id="spiderman">
                    <div class="card-image">
                        <img src="https://pngimg.com/uploads/spider_man/spider_man_PNG59.png" />
                    </div>
                    <div class="card-text">
                        <h2>Abdullah Al Azad</h2>
                        <div>
                            <div>
                                <span>&copy;2024 Cloud</span>
                                <span>Campus Team</span>
                            </div>
                            <div>
                                <span>
                                    <a href="" target="_blank">
                                        <button className="px-4 btn text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl text-[#EE0000] bg-blue hover:bg-[#000000] hover:text-[#FFFFFF] border-0 rounded-3xl">
                                            Details
                                        </button>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" id="deadpool">
                    <div class="card-text">
                        <div>
                            <span>
                                Abdur Rahman
                            </span>
                        </div>
                        <div>
                            <span>
                                <a href="" target="_blank">
                                    <button className="px-4 btn text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl text-[#000000] bg-[#EEEE00] hover:bg-[#EE0000] hover:text-[#FFFFFF] border-0 rounded-3xl">
                                        Details
                                    </button>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="card-image">
                        <p>&copy; 2024 Cloud <br />Campus Team</p>
                        <img src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a7/%E0%B9%80%E0%B8%94%E0%B8%94%E0%B8%9E%E0%B8%B9%E0%B8%A5.png/178px-%E0%B9%80%E0%B8%94%E0%B8%94%E0%B8%9E%E0%B8%B9%E0%B8%A5.png" />
                    </div>
                </div>

                <div class="card" id="hulk">
                    <div class="card-image">
                        <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png" />
                    </div>
                    <div class="card-text">
                        <h2>Md. Ariful<br />Islam</h2>
                        <div>
                            <div>
                                <span>&copy;2024 Cloud</span>
                                <span>Campus Team</span>
                            </div>
                            <div><span>
                                <a href="" target="_blank">
                                    <button className="px-4 btn text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl text-[#00EE00] bg-[#524983] hover:bg-[#007700] hover:text-[#FFFFFF] border-0 rounded-3xl">
                                        Details
                                    </button>
                                </a>
                            </span></div>
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
