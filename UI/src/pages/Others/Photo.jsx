import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import "./Photo.css";

function Photo() {
  // State to manage lightbox visibility
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Handle image click to open lightbox
  const openLightbox = (imageUrl) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <Navbar />
      <Section text={"Gallery"} />
      <div id="flexbox">
        {/* Column 1 */}
        <div className="column">
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://media.licdn.com/dms/image/D5622AQFHwBtk9q8WLw/feedshare-shrink_2048_1536/0/1680463600169?e=2147483647&v=beta&t=7B-1L3knbBpZuygb0fDalESYMY_QTYAH1cWjao2kFeo"
              )
            }
          >
            <img
              src="https://media.licdn.com/dms/image/D5622AQFHwBtk9q8WLw/feedshare-shrink_2048_1536/0/1680463600169?e=2147483647&v=beta&t=7B-1L3knbBpZuygb0fDalESYMY_QTYAH1cWjao2kFeo"
              alt="IIUC CSE Building"
            />
            <div className="caption">IIUC CSE Building</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/e/ec/IIUC_CENTRAL_LIBRARY_2.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/IIUC_CENTRAL_LIBRARY_2.jpg"
              alt="IIUC Central Library"
            />
            <div className="caption">IIUC Central Library</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/6/64/CSE_building_of_IIUC.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSE_building_of_IIUC.jpg"
              alt="CSE Building"
            />
            <div className="caption">CSE Building</div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="column">
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0W-z-W6tkCD27TaASe_9OyfPe414H6cA_g&usqp=CAU"
              )
            }
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0W-z-W6tkCD27TaASe_9OyfPe414H6cA_g&usqp=CAU"
              alt="IIUC Sky View"
            />
            <div className="caption">IIUC Sky View</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://media.licdn.com/dms/image/D5622AQHYZlcoLB2OqA/feedshare-shrink_800/0/1692457350620?e=2147483647&v=beta&t=qrZwSxK2EcdYTHL19MPlFS5PyPa8dOB7DDY_EcD3cMQ"
              )
            }
          >
            <img
              src="https://media.licdn.com/dms/image/D5622AQHYZlcoLB2OqA/feedshare-shrink_800/0/1692457350620?e=2147483647&v=beta&t=qrZwSxK2EcdYTHL19MPlFS5PyPa8dOB7DDY_EcD3cMQ"
              alt="IIUC Classroom"
            />
            <div className="caption">IIUC Classroom</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/b/ba/Auditorium_-_panoramio.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Auditorium_-_panoramio.jpg"
              alt="IIUC Auditorium"
            />
            <div className="caption">IIUC Auditorium</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/8/8f/IIUC_Football_Field.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/IIUC_Football_Field.jpg"
              alt="IIUC Sports Field"
            />
            <div className="caption">IIUC Sports Field</div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="column">
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/8/81/IIUC_Central_Shaheed_Minar.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/IIUC_Central_Shaheed_Minar.jpg"
              alt="IIUC Central Shaheed Minar"
            />
            <div className="caption">IIUC Shaheed Minar</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/7/72/IIUC_Central_Mosque_front_view.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/72/IIUC_Central_Mosque_front_view.jpg"
              alt="IIUC Central Mosque"
            />
            <div className="caption">IIUC Central Mosque</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/9/98/IIUC_Hazrat_Uthman_%28R%29_Hall%282%29.jpg"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/IIUC_Hazrat_Uthman_%28R%29_Hall%282%29.jpg"
              alt="IIUC CSE Hall"
            />
            <div className="caption">IIUC CSE Hall</div>
          </div>
          <div
            className="card"
            onClick={() =>
              openLightbox(
                "https://upload.wikimedia.org/wikipedia/commons/b/ba/International_Islamic_University_Chittagong_Main_Campus_Kumira_Entry_Gate.JPG"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/International_Islamic_University_Chittagong_Main_Campus_Kumira_Entry_Gate.JPG"
              alt="IIUC Main Gate"
            />
            <div className="caption">IIUC Main Gate</div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Large View" />
        </div>
      )}

      <Links />
      <Footer />
    </>
  );
}

export default Photo;
