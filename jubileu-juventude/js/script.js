const pageHeader = document.querySelector("body > header");

const updateHeader = () => {
  pageHeader?.classList.toggle("scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });


const heroImage = document.querySelector(".hero img");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (heroImage && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  const hero = document.querySelector(".hero");

  hero?.addEventListener("mousemove", (event) => {
    const bounds = hero.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    heroImage.style.transform =
      `translate(${x * 8}px, ${y * 8}px) rotate(${x * 0.6}deg)`;
  });

  hero?.addEventListener("mouseleave", () => {
    heroImage.style.transform = "";
  });
}

const regulation = document.querySelector(".regulation");

if (regulation) {
  const progress = document.createElement("div");
  progress.className = "reading-progress";
  document.body.appendChild(progress);

  const updateReadingProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progressValue =
      scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    progress.style.width = `${Math.min(progressValue, 100)}%`;
  };

  updateReadingProgress();

  window.addEventListener("scroll", updateReadingProgress, {
    passive: true,
  });
}
