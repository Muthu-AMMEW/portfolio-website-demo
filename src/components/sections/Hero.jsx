import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import VanillaTilt from 'vanilla-tilt';

export default function HeroSection() {
  const typedRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    // Typed.js effect
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Development", "Backend Development", "Fullstack Development", "Web Development"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      loop: true,
    });

    // VanillaTilt effect
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, { max: 15 });
    }

    // ScrollReveal effect
    ScrollReveal().reveal('.hero .content h2, .hero .content p, .hero .mm-btn', {
      delay: 200,
      distance: '80px',
      duration: 1000,
      origin: 'top',
      reset: true,
    });

    ScrollReveal().reveal('.hero .image', { delay: 400 });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero px-lg-3" id="home">
      <div className="row mt-5 p-5 justify-content-center">
        <div className="content col-12 col-lg-7 text-center mt-5">
          <h2>
            Hi There, I'm<br /> Muthu <span>Arivazhagan</span>
          </h2>
          <p>I am Into <span className="typing-text" ref={typedRef}></span></p>
          <a href="#about" className="mm-btn text-decoration-none">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </div>
        <div className="image col-12 col-lg-5 text-center mt-5">
          <img
            ref={tiltRef}
            draggable="false"
            className="tilt"
            src="portfolio.png"
            alt="Muthu Arivazhagan"
          />
        </div>
      </div>
    </section>
  );
}
