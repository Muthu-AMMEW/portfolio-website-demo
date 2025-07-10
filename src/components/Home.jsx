import { useEffect, useState } from "react";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import { toast } from 'react-toastify';

export default function Home() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (2===3) {
            return toast.error(error, { position: 'top-center' })
        }
    }, [])

    useEffect(() => {
        // Try scrolling the document itself
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE
        document.body.scrollTop = 0;             // For Safari
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <MetaData title={'Muthu Arivazhagan'} />

                    {/* <!-- hero section starts --> */}
                    <section class="home px-lg-3" id="home">
                        <div id="particles-js"></div>
                        <div class="row mt-5 p-5 justify-content-center">
                            <div class="content col-12 col-lg-7 text-center mt-5">
                                <h2>Hi There, I'm<br /> Muthu <span>Arivazhgan</span></h2>
                                <p>I am Into <span class="typing-text"></span></p>
                                <a href="#about" class="mm-btn text-decoration-none"><span>About Me</span>
                                    <i class="fas fa-arrow-circle-down"></i>
                                </a>
                                <div class="socials">
                                    <ul class="social-icons">
                                        <li><a class="linkedin" aria-label="LinkedIn" href="#" target="_blank"><i
                                            class="fab fa-linkedin"></i></a>
                                        </li>
                                        <li><a class="github" aria-label="GitHub" href="https://github.com/Muthu-AMMEW" target="_blank"><i
                                            class="fab fa-github"></i></a></li>
                                        <li><a class="twitter" aria-label="Twitter" href="https://x.com/Muthu_AMMEW" target="_blank"><i
                                            class="fab fa-twitter"></i></a></li>
                                        <li><a class="telegram" aria-label="Telegram" href="https://t.me/Muthu_AMMEW" target="_blank"><i
                                            class="fab fa-telegram-plane"></i></a></li>
                                        <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/muthu.ammew"><i
                                            class="fab fa-instagram" target="_blank"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="image col-12 col-lg-5 text-center mt-5">
                                <img draggable="false" class="tilt" src="portfolio.png" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* <!-- hero section ends --> */}


                    {/* <!-- about section starts --> */}
                    <section class="about container p-2" id="about">
                        <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>

                        <div class="d-flex flex-column flex-md-row justify-content-center">

                            <div class="image text-center p3 p-lg-5">
                                <img draggable="false" class="tilt rounded-4" src="about.jpg" alt="" />
                            </div>
                            <div class="content mt-4">
                                <h3 class="fw-bold">I'm Muthu Arivazhagan</h3>
                                <h5 class="fw-bold mb-3">Full Stack Developer</h5>

                                <p>
                                    <strong>Full-Stack MERN Developer</strong> with 1+ years of experience developing scalable web
                                    applications
                                    using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. Proficient in building
                                    <strong>RESTful
                                        APIs</strong>, integrating <strong>payment gateways</strong>, <strong>Redux</strong> state
                                    management and
                                    creating responsive UIs with<strong> Bootstrap, and Tailwind CSS</strong>. Skilled in
                                    <strong>JavaScript
                                        (ES6+), TypeScript</strong>, and modern tools like <strong>Vite, Git</strong>, and cloud
                                    platforms such as
                                    <strong>Render, AWS, Vercel, and Netlify</strong>. Strong understanding of <strong>JWT
                                    </strong><strong>Authentication, MongoDB Atlas</strong>, and deployment workflows.
                                </p>

                                <div class="box-container">
                                    <div class="box">
                                        <p><span> Email : </span> muthu.ammew333@gmail.com</p>
                                        <p><span> Place : </span> Tamil Nadu, India</p>
                                    </div>
                                </div>

                                <div class="resumebtn my-4">
                                    <a href="#" target="_blank" class="mm-btn"><span>Resume</span>
                                        <i class="fas fa-chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!-- about section ends --> */}

                    {/* <!-- skills section starts --> */}
                    <section class="skills p-3" id="skills">

                        <h2 class="heading"><i class="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

                        <div class="mm-container py-3 py-lg-5">
                            <div class="mm-row" id="skillsContainer">
                            </div>
                        </div>
                    </section>
                    {/* <!-- skills section ends --> */}


                    {/* <!-- experience section starts --> */}
                    <section class="experience" id="experience">

                        <h1 class="heading pt-2"><i class="fas fa-briefcase"></i> Experience</h1>

                        <div class="box-container d-flex flex-column justify-content-center align-items-center">

                            <div class="box d-flex flex-wrap flex-lg-nowrap justify-content-center p-3 p-lg-5">
                                <div>
                                    <img draggable="false" class="object-fit-cover position-relative w-100 h-100"
                                        src="/assets/images/experience/gtek-logo.png" alt="" />
                                </div>
                                <div class="content">
                                    <div class="d-flex flex-column flex-lg-row justify-content-between">
                                        <h2>GTEK Techno Solutions Pvt. Ltd.</h2>
                                        <h6 class="pe-3">Mogappair West, Chennai</h6>
                                    </div>
                                    <div class="d-flex flex-column flex-lg-row justify-content-between">
                                        <h5 class="text-start">Full stack (MERN) Web Developer </h5>
                                        <h6 class="pe-3">Jun-2024 – Jul-2025</h6>
                                    </div>
                                    <ul class="fs-6 pt-3">
                                        <li>Built and maintained full-stack web applications using MongoDB, Express.js, React.js, and
                                            Node.js
                                            (MERN).</li>
                                        <li>Developed responsive and dynamic user interfaces or transform existing website with React,
                                            Redux
                                            Toolkit,
                                            Bootstrap. Integrated third-party services such as Razorpay, Cloudinary, and Firebase.</li>
                                        <li>Created secure and scalable backend services using Express, Node.js, and Mongoose with
                                            JWT-based
                                            authentication and role-based access control.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- <div class="box">
                                <div class="image">
                                    <img draggable="false" src="about.jpg" alt="" />
                                </div>
                                <div class="content">
                                    <h3>SSLC (Secondary School Leaving Certificate)</h3>
                                    <p>Government Higher Secondary School,
                                        Kuthalam, Tamil Nadu
                                    </p>
                                    <h4>2013 – 2014 </h4>
                                    <h4>94%</h4>
                                </div>
                            </div>

                            <div class="box">
                                <div class="image">
                                    <img draggable="false" src="about.jpg" alt="" />
                                </div>
                                <div class="content">
                                    <h3>HSC (Higher Secondary Certificate)</h3>
                                    <p>Government Higher Secondary School,
                                        Kuthalam, Tamil Nadu
                                    </p>
                                    <h4>2015 – 2016</h4>
                                    <h4>69%</h4>
                                </div>
                            </div> --> */}

                        </div>
                    </section>
                    {/* <!-- experience section ends --> */}


                    {/* <!-- work project section starts --> */}
                    <section class="work py-3" id="work">

                        <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

                        <div class="box-container d-flex flex-wrap justify-content-around row-gap-4 px-xl-5 mx-xl-5">
                        </div>

                        <div class="viewall mt-4">
                            <a href="/projects" class="mm-btn"><span>View All</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>

                    </section>
                    {/* <!-- work project section ends --> */}

                    {/* <!-- education section starts --> */}
                    <section class="education py-4 ps-3 ps-lg-0" id="education">

                        <h2 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span> </h2>
                        <p class="qoute">Education is the most powerful weapon which you can use to change the world.</p>

                        <div class="timeline">

                            <div class="mm-container right">
                                <div class="content">
                                    <div class="tag">
                                        <h5>HDCA (Honors Diploma in Computer Applications) &nbsp;&nbsp; 90%</h5>
                                    </div>
                                    <div class="desc">
                                        <h6>Guru Computers, Kuthalam, Tamil Nadu</h6>
                                        <p>2011 – 2012</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mm-container left">
                                <div class="content">
                                    <div class="tag">
                                        <h5>SSLC (Secondary School Leaving Certificate) &nbsp;&nbsp; 94%</h5>
                                    </div>
                                    <div class="desc">
                                        <h6>Government Higher Secondary School, TN board</h6>
                                        <p>2013 – 2014</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mm-container right">
                                <div class="content">
                                    <div class="tag">
                                        <h5>HSC (Higher Secondary Certificate) &nbsp;&nbsp; 69%</h5>
                                    </div>
                                    <div class="desc">
                                        <h6>Government Higher Secondary School, TN board</h6>
                                        <p>2015 – 2016</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mm-container left">
                                <div class="content">
                                    <div class="tag">
                                        <h5>DJO (Diploma in Journalism) &nbsp;&nbsp; II – Class</h5>
                                    </div>
                                    <div class="desc">
                                        <h6>DAAC, Affiliated to Bharathidasan University</h6>
                                        <p>2018 – 2019</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mm-container right">
                                <div class="content">
                                    <div class="tag">
                                        <h5>B.Sc. Computer Science &nbsp;&nbsp; A Grade (74.38%)</h5>
                                    </div>
                                    <div class="desc">
                                        <h6>DAAC, Affiliated to Bharathidasan University</h6>
                                        <p>2017 – 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* <!-- education section ends --> */}

                    {/* <!-- contact section starts --> */}
                    <section class="contact p-3" id="contact">

                        <h2 class="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

                        <div class="container d-flex flex-wrap justify-content-around">
                            <div class="image-box">
                                <img draggable="false" src="./assets/images/contact1.png" alt="" />
                            </div>

                            <form id="contact-form" class="d-flex flex-column mt-4">
                                <div class="input-group mt-3">
                                    <input type="text" class="form-control ps-5" name="name" placeholder="Name" required />
                                        <i class='fas fa-user'></i>
                                </div>
                                <div class="input-group mt-3">
                                    <input type="email" class="form-control ps-5" name="email" placeholder="Email" required />
                                        <i class='fas fa-envelope'></i>
                                </div>
                                <div class="input-group mt-3">
                                    <input type="number" class="form-control ps-5" name="phone" placeholder="Whatsapp No." minlength="10"
                                        required />
                                        <i class='fas fa-phone-alt'></i>
                                </div>
                                <div class="input-group mt-3">
                                    <textarea class="form-control ps-5" placeholder="Message" name="message" required></textarea>
                                    <i class="fas fa-comment-dots"></i>
                                </div>
                                <div class="button-area d-flex justify-content-center my-4">
                                    <button class="btn btn-primary" type="submit">
                                        Submit <i class="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* <!-- contact section ends --> */}
                    
                    {/* <!-- scroll top btn --> */}
                    <a href="#home" aria-label="ScrollTop" class="fas fa-angle-up" id="scroll-top"></a>
                    {/* <!-- scroll back to top --> */}
                </>
            }
        </>
    )
}