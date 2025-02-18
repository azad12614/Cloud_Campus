import React, { useState, useCallback } from "react";
import "./Bus.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

function Bus() {
  const [mainImage, setMainImage] = useState(
    "https://drive.google.com/uc?export=view&id=1DiDz1SaJaEKkEfNbKNTkZdDJURHZnQ91" // Corrected URL
  );

  const imageSources = [
    "https://drive.google.com/uc?export=view&id=1DiDz1SaJaEKkEfNbKNTkZdDJURHZnQ91", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1LEAPi_xpcqDQlqFyN1AY9cGZZvg1c-i6", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1bKUzpG2MBnJGIe0lYl_TbZ56TwKK_mXd", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1JwmMijWTL5jpoZPRiYVPTmzpgxG8-SHk", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1SfGgdgBjKowdz1JoI-tSg4aWo_i5fZuj", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1O2t_Z1rnrrfUfSYKRlgyW7q8I7C0XNUR", // Corrected URL
    "https://drive.google.com/uc?export=view&id=1lZMNZe2Cvu0lMb_f95pM-3vYzuoebBKx", // Corrected URL
  ];

  const handleThumbnailClick = useCallback((src) => {
    setMainImage(src);
  }, []);

  return (
    <>
      <Navbar />
      <Section text={"Bus Schedule"} />
      <div className="buses">
        <img src={mainImage} id="main" alt="Main Bus Schedule" />{" "}
        {/* Added alt text */}
        <div id="thumbnails">
          {imageSources.map((src, index) => (
            <a href={src} target="_blank">
              <img
                key={index}
                src={src}
                onClick={() => handleThumbnailClick(src)}
                alt={`Bus Schedule ${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bus;
