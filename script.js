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
    text: "Built FleetPulse AI with React, Node.js, and Express.js to organize fleet operations across drivers, dispatchers, and administrators. Role-based workflows address the different responsibilities involved in managing trips and deliveries, while AI-assisted driver ranking supports assignment decisions. Developed workflow automation for trip assignments, safety reviews, and delivery document processing, bringing these operational tasks into a full-stack application. The project combines user-facing workflows with backend application development to address coordination needs across fleet roles and reduce repetitive operational work.",
    tags: [
      "Full-stack platform",
      "AI ranking",
      "Workflow automation",
      "Fleet operations",
    ],
  },
  trust: {
    title: "TrustSeal",
    text: "Designed an AI-powered document verification platform that streamlines identity verification. Built with Python and FastAPI, the system combines OCR, image analysis, fraud detection, and rule-based validation to identify expired IDs, mismatched information, glare, blur, and screen recaptures, and generate match verification results. Awarded 2nd place in the Notary Everyday Inc. track at Village Hacks.",
    tags: ["OCR", "Image analysis", "Fraud detection", "2nd Place"],
  },
  globe: {
    title: "GlobeWIAL",
    text: "Co-developed GlobeWIAL using HTML, CSS, and JavaScript to support collaboration across international coaching chapters. The multilingual platform brings together global coach discovery, chapter management, and role-based user experiences. Built AI-powered search, interactive maps, and dashboards to help users find information and navigate the platform according to their roles. The work focused on making a global collaboration platform more accessible while supporting chapter coordination and discovery. The project was a co-winner at the WiCS \u00d7 Opportunity Hack event.",
    tags: ["AI search", "Interactive maps", "Role-based UX", "Co-Winner"],
  },
  vehicle: {
    title: "Autonomous Vehicle Modeling and Control",
    text: "A MATLAB simulation project focused on autonomous vehicle motion and control. The model brings together longitudinal and two-dimensional vehicle dynamics, steering behavior, actuator modeling, and reference path generation, connecting vehicle motion with the paths it is intended to follow. The analysis uses state-space and Lyapunov methods to examine stability, controllability, and observability. The project combines vehicle modeling with control-system analysis to explore how steering, actuator behavior, and system dynamics relate to the control properties needed for autonomous movement.",
    tags: ["MATLAB", "Vehicle dynamics"],
  },
  robots: {
    title: "Decentralized Multi-Robot Exploration and Coverage",
    text: "A decentralized exploration and coverage project focused on coordinating multiple robots through potential-field control and local interactions. The work examines how repulsion-based control strategies and obstacle avoidance can support autonomous coverage while addressing potential collisions between robots and their surroundings. Coverage and collision avoidance are central evaluation objectives. The project connects multi-robot coordination, local control behavior, and autonomous navigation, with particular attention to how individual robot interactions contribute to group movement and how robots respond to nearby obstacles.",
    tags: ["Robotics", "Potential-field control"],
  },
};
Object.assign(projectDetails, {
  "chatbot": {
    "title": "AI Chatbot Capstone Project",
    "text": "Developed a Python customer support chatbot with an interactive avatar interface to provide real-time assistance and reduce repetitive service tasks. The application combines predefined answers with AI-generated responses, supported by backend processing and automated conversational workflows. Designed responses to be updated as support requirements change, keeping the system maintainable alongside its accessible user interface. Tested and refined the application throughout the academic capstone, applying software development, backend processing, conversational interface design, and testing skills to a customer support problem.",
    "tags": [
      "Python",
      "AI Chatbot Development"
    ]
  },
  "movies": {
    "title": "Movie Recommendation System — Edureka",
    "text": "Developed a movie recommendation system through Edureka using Python and R, exploring how different recommendation approaches support relevant movie discovery. Implemented popularity-based suggestions, content-based similarity, and collaborative filtering based on patterns in user preferences. Used Python libraries for data preprocessing, analysis, and model training, with Matplotlib and Seaborn visualizations to explore dataset characteristics and communicate results. The project brought together recommendation algorithms, data processing, model development, and visualization to examine movie suggestions informed by available movie information and user preferences.",
    "tags": [
      "Python",
      "R",
      "Matplotlib",
      "Seaborn"
    ]
  },
  "login": {
    "title": "Software Engineering Project — Secure Web Login Application",
    "text": "Developed a Java web login application focused on user authentication, session management, and controlled access to application functionality. Applied security-focused design considerations to user access and application data while building support for reliable login sessions. Requirements analysis, user expectations, and effort logging guided development and project organization. Worked through application design, implementation, and testing to connect software engineering practices with an authentication use case, demonstrating Java programming, session management, application security considerations, and requirements-driven development.",
    "tags": [
      "Java"
    ]
  },
  "gate": {
    "title": "Security Gate Control Project",
    "text": "Developed a prototype security gate controller using microcontroller technology to explore automated physical access control and security monitoring. Integrated user authentication into the gate access process, motor control for gate movement, and intrusion detection sensors for monitoring potential unauthorized access. Combined hardware inputs and control functionality within a single security-oriented prototype. The project provided experience with embedded-system design, hardware integration, sensor inputs, motor control, and prototyping while investigating how these components can work together to manage physical access.",
    "tags": [
      "Microcontroller Technology"
    ]
  },
  "maze": {
    "title": "Assembly Line Project — Autonomous Maze Navigation",
    "text": "Developed an autonomous vehicle navigation project in MATLAB, focusing on movement through a maze and obstacle avoidance. Programmed navigation behavior intended to guide the vehicle through constrained environments while considering safe, reliable movement and collision avoidance as design objectives. The work explored an assistive transportation concept intended to help elderly individuals navigate more independently. Applied MATLAB programming to a robotics engineering problem, bringing together autonomous navigation, obstacle avoidance, control systems, and engineering problem-solving within an assistive mobility context.",
    "tags": [
      "MATLAB"
    ]
  },
  "contrib": {
    "title": "ContribAI — AI-Assisted Open-Source Contribution Platform",
    "text": "Worked on ContribAI, an AI-assisted developer tool focused on making open-source contribution opportunities easier to discover and understand. Explored ways to help developers identify GitHub issues suited to their interests and experience, with attention to onboarding into unfamiliar repositories. Considered how AI-assisted guidance could reduce the initial complexity of deciding where to contribute. The project centered on developer productivity, accessibility, and open-source participation, applying software engineering and developer-tool design to the challenge of getting started with contributions.",
    "tags": [
      "Artificial Intelligence",
      "Developer tools",
      "Open source"
    ]
  }
});

function renderProjectTags(container, tags) {
  container.replaceChildren(...tags.map((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    return span;
  }));
  container.hidden = !tags.length;
}

Object.entries(projectDetails).forEach(([key, detail]) => {
  renderProjectTags(
    document.querySelector(`[data-project-tags="${key}"]`),
    detail.tags,
  );
});

const modal = document.querySelector(".project-modal");
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const detail = projectDetails[button.dataset.project];
    document.querySelector("#modal-title").textContent = detail.title;
    document.querySelector("#modal-text").textContent = detail.text;
    renderProjectTags(document.querySelector("#modal-tags"), detail.tags);
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
