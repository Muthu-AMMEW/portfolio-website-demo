
export default function About() {
    return (<>
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
    </>
    )
}