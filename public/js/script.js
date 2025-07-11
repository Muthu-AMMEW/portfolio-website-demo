document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".mm-navbar");
  const scrollTopBtn = document.getElementById("scroll-top");

  // Toggle menu
  menu.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });

  // Scroll and load behavior
  function onScrollLoad() {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");

    if (window.scrollY > 60) {
      scrollTopBtn.classList.add("mm-active");
    } else {
      scrollTopBtn.classList.remove("mm-active");
    }

    // Scroll spy
    document.querySelectorAll("section").forEach((section) => {
      const height = section.offsetHeight;
      const offset = section.offsetTop - 200;
      const top = window.scrollY;
      const id = section.getAttribute("id");

      if (top > offset && top < offset + height) {
        document.querySelectorAll(".mm-navbar ul li a").forEach((a) => {
          a.classList.remove("mm-active");
        });

        const currentLink = navbar.querySelector(`a[href="#${id}"]`);
        if (currentLink) currentLink.classList.add("mm-active");
      }
    });
  }

  window.addEventListener("scroll", onScrollLoad);
  window.addEventListener("load", onScrollLoad);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // EmailJS Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.init("X_5SiPdTYQLCesYka");

      emailjs
        .sendForm("contact_service", "template_contact", "#contact-form")
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            contactForm.reset();
            alert("Form Submitted Successfully");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Form Submission Failed! Try Again");
          }
        );
    });
  }
});

// Typed.js
new Typed(".typing-text", {
  strings: [
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
    "Web Development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// Fetching and showing data
async function fetchData(type = "skills") {
  const response = await fetch(
    type === "skills" ? "/src/data/skills.json" : "/projects/projects.json"
  );
  return await response.json();
}

function showSkills(skills) {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = skills
    .map(
      (skill) => `
      <div class="bar" style="width: 9.5rem;">
        <div class="info">
          <img src="${skill.icon}" alt="skill" />
          <span>${skill.name}</span>
        </div>
      </div>`
    )
    .join("");
}

function showProjects(projects) {
  const container = document.querySelector("#work .box-container");
  container.innerHTML = projects
    .filter((p) => p.category !== "android")
    .slice(0, 4)
    .map(
      (p) => `
      <div class="box tilt">
        <img draggable="false" src="/public/images/projects/${p.image}.png" alt="project" />
        <div class="content">
          <div class="tag"><h3>${p.name}</h3></div>
          <div class="desc">
            <p>${p.desc}</p>
            <div class="btns">
              <a href="${p.links.view}" class="mm-btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="${p.links.code}" class="mm-btn" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");

  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });

  ScrollReveal().reveal(".work .box", { interval: 200 });
}

fetchData().then(showSkills);
fetchData("projects").then(showProjects);

// Pre-loader (optional)
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.querySelector(".loader-container").classList.add("fade-out");
//   }, 500);
// });

// Disable developer tools
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    return false;
  }
};

// Tawk.to live chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// ScrollReveal animations
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content h3, .home .content p, .home .content .mm-btn", {
  delay: 200,
});
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .hackerrank", { interval: 1000 });
srtop.reveal(".home .telegram, .home .whatsapp, .home .dev", {
  interval: 600,
});
srtop.reveal(
  ".about .content h3, .about .content .tag, .about .content p, .about .content .box-container, .about .content .resumebtn",
  { delay: 200 }
);
srtop.reveal(".skills .mm-container", { interval: 200 });
srtop.reveal(".skills .mm-container .bar", { delay: 400 });
srtop.reveal(".experience .box", { interval: 200 });
srtop.reveal(".education .timeline", { delay: 400 });
srtop.reveal(".education .timeline .mm-container", { interval: 400 });
srtop.reveal(".contact .container, .contact .container #contact-form", {
  delay: 400,
});
