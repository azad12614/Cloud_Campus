import Footer from "../../components/Footer";
import Card from "./T_Card";
import Navbar from "../../components/Navbar";

function Member() {
    return (
        <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
            <Navbar></Navbar>
            <Card></Card>
            <div className="mt-auto mb-0">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Member;
