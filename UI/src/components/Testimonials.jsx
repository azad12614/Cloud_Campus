import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Md. Asif Rahman",
      role: "Software Engineer, Brain Station 23",
      quote:
        "IIUC CSE gave me the skills to thrive in the tech industry. The hands-on projects and supportive faculty prepared me for real-world challenges.",
    },
    {
      id: 2,
      name: "Farhana Ahmed",
      role: "Data Analyst, Grameenphone",
      quote:
        "The CSE program at IIUC helped me develop strong analytical skills. The courses on data science and machine learning were particularly impactful.",
    },
    {
      id: 3,
      name: "Abdullah Al Mamun",
      role: "Full-Stack Developer, TechNext",
      quote:
        "IIUC CSE provided a perfect balance of theory and practice. The programming courses and internships helped me land my dream job.",
    },
    {
      id: 4,
      name: "Sadia Islam",
      role: "AI Researcher, Samsung R&D",
      quote:
        "The research opportunities at IIUC CSE allowed me to explore AI in depth. I’m grateful for the guidance from my professors.",
    },
    {
      id: 5,
      name: "Rafiqul Islam",
      role: "System Architect, bKash",
      quote:
        "The networking and system design courses at IIUC CSE were top-notch. They gave me the foundation to excel in my career.",
    },
    {
      id: 6,
      name: "Nusrat Jahan",
      role: "Mobile App Developer, Pathao",
      quote:
        "IIUC CSE’s focus on practical learning helped me build apps that solve real problems. The hackathons were a great experience.",
    },
    {
      id: 7,
      name: "Tahmid Hasan",
      role: "Cybersecurity Specialist, DataSoft",
      quote:
        "The cybersecurity courses at IIUC CSE were cutting-edge. I now work on securing systems for top companies.",
    },
    {
      id: 8,
      name: "Ayesha Siddiqua",
      role: "UI/UX Designer, Sheba.xyz",
      quote:
        "IIUC CSE encouraged creativity alongside technical skills. I now design user-friendly interfaces for tech solutions.",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Students and Alumni Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
