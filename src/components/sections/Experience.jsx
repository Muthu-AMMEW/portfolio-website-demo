
export default function Experience() {
    return (<>
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
    </>
    )
}