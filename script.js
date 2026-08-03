const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const glow = document.querySelector(".cursor-glow");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});

document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);

window.addEventListener(
  "pointermove",
  (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  },
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          ),
        );
      }
    });
  },
  { rootMargin: "-35% 0px -55%" },
);
document
  .querySelectorAll("section[id]")
  .forEach((section) => sectionObserver.observe(section));

const projectDetails = {
  fleet: {
    title: "FleetPulse AI",
    text: "Designed and developed a full-stack fleet management platform to solve operational challenges for drivers, dispatchers, and administrators. AI-assisted driver ranking and workflow automation improve trip assignment, safety reviews, delivery processing, and overall operational efficiency.",
    tags: [
      "Full-stack platform",
      "AI ranking",
      "Workflow automation",
      "Fleet operations",
    ],
  },
  trust: {
    title: "TrustSeal",
    text: "Designed an AI-powered document verification platform that streamlines identity verification. The system combines OCR, image analysis, fraud detection, and rule-based validation to identify inconsistencies and improve review efficiency.",
    tags: ["OCR", "Image analysis", "Fraud detection", "2nd Place"],
  },
  globe: {
    title: "GlobeWIAL",
    text: "Co-developed a multilingual global collaboration platform for coach discovery and chapter management. AI-powered search, interactive world maps, and role-based dashboards improve accessibility, decision-making, and collaboration across international chapters.",
    tags: ["AI search", "Interactive maps", "Role-based UX", "Co-Winner"],
  },
  chatbot: {
    title: "AI Chatbot Capstone",
    text: "Designed and developed a Python-based AI chatbot to automate customer interactions and backend workflows. Streamlined conversational flows reduce manual intervention while improving real-time response handling, application efficiency, and reliability.",
    tags: ["Python", "Conversational AI", "Automation", "Backend workflows"],
  },
};
const modal = document.querySelector(".project-modal");
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const detail = projectDetails[button.dataset.project];
    document.querySelector("#modal-title").textContent = detail.title;
    document.querySelector("#modal-text").textContent = detail.text;
    document.querySelector("#modal-tags").innerHTML = detail.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");
    modal.showModal();
  }),
);
document
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const bounds = modal.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    modal.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();
