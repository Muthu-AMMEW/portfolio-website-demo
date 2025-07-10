
export default function Head() {
    return (<>
        {/* <!-- navbar starts --> */}
        <header>
            <a href="/" class="logo"><i class="fab fa-node-js"></i> MERN</a>

            <div id="menu" class="fas fa-bars"></div>
            <nav class="mm-navbar">
                <ul>
                    <li><a class="mm-active" href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        {/* <!-- navbar ends --> */}
    </>
    )
}