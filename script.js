/* ================= NAVBAR SCROLL EFFECT ================= */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


/* ================= STATS COUNTER ANIMATION ================= */
const stats = document.querySelectorAll(".stat h2");

const animateValue = (el, start, end, duration) => {
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const progress = Math.min((currentTime - startTime) / duration, 1);

    const value = Math.floor(progress * (end - start) + start);
    el.innerText = value + "+";

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};


// Trigger animation when stats section is visible
const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      animateValue(stats[0], 0, 5000, 1500);
      animateValue(stats[1], 0, 120, 1500);
      animateValue(stats[2], 0, 50, 1500);
      animateValue(stats[3], 0, 10, 1500);

      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

observer.observe(statsSection);