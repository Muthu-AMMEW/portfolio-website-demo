
export default function Hero() {
  return (<>
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
  </>
  )
}