import React, { useState } from "react";
import "./Bus.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

function Bus() {
  const [mainFileId, setMainFileId] = useState(
    "1DiDz1SaJaEKkEfNbKNTkZdDJURHZnQ91"
  );

  const images = [
    {
      id: "1DiDz1SaJaEKkEfNbKNTkZdDJURHZnQ91",
      thumbnail:
        "https://drive.google.com/file/d/1DiDz1SaJaEKkEfNbKNTkZdDJURHZnQ91/preview",
    },
    {
      id: "1LEAPi_xpcqDQlqFyN1AY9cGZZvg1c-i6",
      thumbnail:
        "https://drive.google.com/file/d/1LEAPi_xpcqDQlqFyN1AY9cGZZvg1c-i6/preview",
    },
    {
      id: "1bKUzpG2MBnJGIe0lYl_TbZ56TwKK_mXd",
      thumbnail:
        "https://drive.google.com/file/d/1bKUzpG2MBnJGIe0lYl_TbZ56TwKK_mXd/preview",
    },
    {
      id: "1JwmMijWTL5jpoZPRiYVPTmzpgxG8-SHk",
      thumbnail:
        "https://drive.google.com/file/d/1JwmMijWTL5jpoZPRiYVPTmzpgxG8-SHk/preview",
    },
    {
      id: "1SfGgdgBjKowdz1JoI-tSg4aWo_i5fZuj",
      thumbnail:
        "https://drive.google.com/file/d/1SfGgdgBjKowdz1JoI-tSg4aWo_i5fZuj/preview",
    },
    {
      id: "1O2t_Z1rnrrfUfSYKRlgyW7q8I7C0XNUR",
      thumbnail:
        "https://drive.google.com/file/d/1O2t_Z1rnrrfUfSYKRlgyW7q8I7C0XNUR/preview",
    },
    {
      id: "1lZMNZe2Cvu0lMb_f95pM-3vYzuoebBKx",
      thumbnail:
        "https://drive.google.com/file/d/1lZMNZe2Cvu0lMb_f95pM-3vYzuoebBKx/preview",
    },
  ];

  const handleClick = (id) => {
    setMainFileId(id);
  };

  return (
    <>
      <Navbar />
      <Section text={"Bus Schedule"} />
      <div className="bus-page">
        <div className="main-preview fade-in">
          <iframe
            key={mainFileId}
            src={`https://drive.google.com/file/d/${mainFileId}/preview`}
            title="Bus Schedule"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        <div className="thumbnail-container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumbnail ${img.id === mainFileId ? "active" : ""}`}
              onClick={() => handleClick(img.id)}
            >
              <iframe
                src={img.thumbnail}
                title={`Schedule ${index + 1}`}
                className="thumbnail-iframe"
                allow="autoplay"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bus;
