const tags = [
  // FRONTEND
  "HTML", "CSS", "ReactJS", "Redux", "Bootstrap", "TailwindCSS", "Sass",

  // BACKEND
  "NodeJS", "ExpressJS", "MongoDB", "Mongoose", "Firebase", "Postman",

  // FULLSTACK
  "JavaScript", "TypeScript", "Next.js", "Git VCS", "GitHub",

  // TOOLS & TECHNOLOGIES
  "VS Code", "Compass", "Office", "Photoshop", "Windows", "Linux",
  "Atlas", "Cloudflare", "Netlify", "Render", "AWS", "Vercel", "Railway"
];

TagCloud("#tagcloud", tags, {
  radius: 200,
  maxSpeed: "fast",
  initSpeed: "normal",
  direction: 135,
  keep: true
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function applyRandomColors() {
  const spans = document.querySelectorAll("#tagcloud span");
  spans.forEach(span => {
    span.style.color = getRandomColor();
    span.style.fontWeight = "bold";
  });
}

setTimeout(() => {
  applyRandomColors();
  setInterval(applyRandomColors, 1500);
}, 100);
