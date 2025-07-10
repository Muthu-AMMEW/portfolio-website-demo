import { useEffect, useState } from "react";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import { toast } from 'react-toastify';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Work from "./sections/Work";

export default function Home() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (2 === 3) {
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
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Work />
                    <Education />
                    <Contact />
                    {/* <!-- scroll top btn --> */}
                    <a href="#home" aria-label="ScrollTop" class="fas fa-angle-up" id="scroll-top"></a>
                    {/* <!-- scroll back to top --> */}
                </>
            }
        </>
    )
}