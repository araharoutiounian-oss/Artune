const siteHeader = document.querySelector("[data-site-header]");
const menuToggle = siteHeader?.querySelector(".menu-toggle");
const primaryNavigation = siteHeader?.querySelector("#primary-navigation");

const closeMenu = () => {
  siteHeader?.classList.remove("is-menu-open");
  document.body.classList.remove("is-menu-locked");
  menuToggle?.setAttribute("aria-expanded", "false");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("is-menu-open");
  document.body.classList.toggle("is-menu-locked", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNavigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
