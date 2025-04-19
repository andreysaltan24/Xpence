export function initScrollToSection() {
  const links = document.querySelectorAll(".menu__link");
  const iconMenu = document.querySelector(".icon-menu");
  const menuBody = document.querySelector(".header__body");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    });
  });
}
