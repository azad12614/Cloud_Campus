import React from "react";
import "./Links.css"; // Import the CSS file

const Links = () => {
  const links = [
    { url: "https://www.iiuc.ac.bd/alumni/adirectory", text: "Alumni List" },
    {
      url: "https://t.me/+-0idhqk_Od1jMDhl",
      text: "Class Records (1st-3rd MID)",
    },
    {
      url: "https://drive.google.com/drive/folders/1j6P06WLqRLESwiWYiPlTa4ui-m8g8C1i",
      text: "CSE Resources",
    },
    {
      url: "https://www.facebook.com/groups/1134953564340876/?ref=share",
      text: "IIUC Competitions Hub",
    },
    { url: "https://www.iiuc.ac.bd/home/career/", text: "Job Offer" },
    { url: "https://opac.iiuc.ac.bd/", text: "Library" },
    { url: "https://t.me/quesbankofcse", text: "Que Bank" },
  ];

  return (
    <div className="links-container">
      <h2>Useful Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
