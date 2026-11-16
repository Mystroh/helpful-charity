// Mobile navigation, contact demo feedback, and automatic footer year.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const note = document.querySelector("#formNote");
    note.textContent = `Thanks, ${name || "friend"}! This demo form is working visually, but needs a backend or form service to deliver messages.`;
    note.classList.add("success-note");
    contactForm.reset();
  });
}
