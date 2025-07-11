document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".mm-navbar");
  const scrollTopBtn = document.getElementById("scroll-top");

  // Toggle menu
  menu.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });

  // Scroll behavior
  function handleScroll() {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");

    if (window.scrollY > 60) {
      scrollTopBtn.classList.add("mm-active");
    } else {
      scrollTopBtn.classList.remove("mm-active");
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
});

// Fetch projects
function getProjects() {
  return fetch("projects.json")
    .then((response) => response.json())
    .then((data) => data);
}

function showProjects(projects) {
  const container = document.querySelector("#fullWork .box-container");
  let html = "";

  projects.forEach((project) => {
    html += `
      <div class="grid-item ${project.category}">
        <div class="box tilt">
        <img draggable="false" src="/public/images/projects/${project.image}.png" alt="project" />
        <div class="content">
          <div class="tag">
            <h3>${project.name}</h3>
          </div>
          <div class="desc">
            <p>${project.desc}</p>
            <div class="btns">
              <a href="${project.links.view}" class="mm-btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="${project.links.code}" class="mm-btn" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  });

  container.innerHTML = html;

  // Filtering without Isotope
  const buttonGroup = document.querySelector(".button-group");
  const allItems = container.querySelectorAll(".grid-item");

  if (buttonGroup) {
    buttonGroup.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") {
        const current = buttonGroup.querySelector(".is-checked");
        if (current) current.classList.remove("is-checked");
        e.target.classList.add("is-checked");

        const filter = e.target.getAttribute("data-filter"); // e.g. ".web" or "*"

        allItems.forEach((item) => {
          const matches = filter === "*" || item.classList.contains(filter.slice(1));
          item.style.display = matches ? "block" : "none";
        });
      }
    });
  }

  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
}


getProjects().then(showProjects);

// Tawk.to Live Chat
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

// Disable developer mode
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    return false;
  }
};
