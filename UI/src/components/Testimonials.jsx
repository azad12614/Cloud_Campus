import React from 'react';
import { useEffect } from 'react';
import "./Testimonials.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

const Testimonials = () => {

    function test() {
        const testimonialsContainer = document.querySelector(".testimonials-container");
        const testimonial = document.querySelector(".testimonial");
        const userImage = document.querySelector(".user-image");
        const username = document.querySelector(".username");
        const role = document.querySelector(".role");
        const btnPrev = document.getElementById("btn-prev");
        const btnNext = document.getElementById("btn-next");
        const progressDots = document.getElementById("progress-dots");

        const testimonials = [
            {
                name: "Mr. Omar Sharif",
                position: "CTO of Green Savers Bangladesh",
                photo: "https://randomuser.me/api/portraits/men/97.jpg",
                text:
                    "The IIUC CSE program provided me with a solid foundation in computer science principles. The coursework not only equipped me with the technical expertise needed to excel in the field but also fostered an innovative mindset.  The department actively encourages participation in research projects and hackathons, which proved invaluable in developing my problem-solving skills and fostering a passion for entrepreneurship.  This strong foundation was instrumental in co-founding Green Savers Bangladesh, a company developing  sustainable energy solutions using  IoT technology.  The entrepreneurial spirit and focus on real-world applications at IIUC CSE  were instrumental in shaping my career path."
            },
            {
                name: "Tahmina Rahman",
                position: "CoO of Green Tech Innovations",
                photo: "https://randomuser.me/api/portraits/women/67.jpg",
                text:
                    "Earning my computer science and engineering degree from IIUC was instrumental in launching my entrepreneurial journey. The program fostered my creativity and innovation skills, which have been essential in developing new technologies for sustainable development. The coursework exposed me to a wide range of software development methodologies and best practices, which I leverage to lead the technical team at my startup company, Green Tech Innovations.  The program also provided valuable opportunities to collaborate with classmates on projects, which honed my teamwork and communication skills – essential assets for any entrepreneur."
            },
            {
                name: "Fatima Khan",
                position: "Data Scientist at BRAC",
                photo: "https://randomuser.me/api/portraits/women/8.jpg",
                text:
                    "As a data scientist at BRAC, I rely heavily on the analytical and problem-solving skills I honed during my time in the computer science and engineering program at IIUC. The program provided a comprehensive curriculum that covered everything from machine learning to big data analytics. The professors were passionate about their fields and encouraged us to think critically and creatively. The program also offered opportunities to participate in research projects, which gave me valuable hands-on experience in applying data science techniques to real-world problems."
            },
            {
                name: "Javed Iqbal",
                position: "IT Consultant",
                photo:
                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
                text:
                    "The computer science and engineering program at IIUC provided me with a strong foundation in computer programming, networking, and database management systems. These skills have been essential for my success as an IT consultant, where I help businesses of all sizes design, implement, and manage their IT infrastructure. The program also emphasized communication and teamwork skills, which are crucial for working effectively with clients and colleagues. I am grateful for the well-rounded education I received at IIUC, which has prepared me for a rewarding career in the IT field."
            }
        ];

        let idx = 0;

        testimonials.forEach((testimonial) => {
            const dot = document.createElement("div");
            dot.classList.add("progress-dot");
            progressDots.appendChild(dot);
        });

        function displayTestimonial() {
            const { name, position, photo, text } = testimonials[idx];

            testimonial.innerHTML = text;
            userImage.src = photo;
            username.innerHTML = name;
            role.innerHTML = position;

            updateProgressDots();
        }

        function updateProgressDots() {
            const dots = progressDots.children;
            [...dots].forEach((dot) => {
                dot.classList.remove("active");
            });
            dots[idx].classList.add("active");
        }

        btnNext.addEventListener("click", () => {
            idx === testimonials.length - 1 ? (idx = 0) : idx++;
            console.log(idx);

            displayTestimonial();
        });

        btnPrev.addEventListener("click", () => {
            idx === 0 ? (idx = testimonials.length - 1) : idx--;
            console.log(idx);

            displayTestimonial();
        });

        displayTestimonial();
    }

    useEffect(() => {
        let ignore = false;

        if (!ignore) test()
        return () => { ignore = true; }
    }, []);

    return (
        <>
            <h1 class="th1">Testimonials</h1>
            <hr class="thr" />
            <div className='testimonial-box'>
                <div class="testimonial-container">
                    <div class="btn" id="btn-prev"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="btn" id="btn-next"><i class="fa-solid fa-chevron-right"></i></div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="testimonial">
                        "My time at the International Islamic University Chittagong's computer science and engineering program provided a strong foundation for my career in software engineering. The curriculum was rigorous and up-to-date, and the professors were passionate about teaching and helping students succeed. The program's emphasis on both theoretical concepts and practical application was invaluable, and it equipped me with the skills I needed to excel in the real world. I highly recommend the IIUC CSE program to anyone interested in a challenging and rewarding education in computer science."
                    </p>
                    <div class="user">
                        <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" class="user-image" />
                        <div class="user-details">
                            <h4 class="username">Dr. Anika Khan</h4>
                            <p class="role">Software Engineer</p>
                        </div>
                    </div>
                    <div class="progress-dots" id="progress-dots"></div>

                </div>
            </div>
        </>
    )
}

export default Testimonials