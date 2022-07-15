const hamburger = document.querySelector(".navbar-toggler");
const respLogo = document.querySelector(".respLogo");
const changeLogoSize = () => {
  respLogo.classList.toggle("respLogo-click");
};
hamburger.addEventListener("click", changeLogoSize);
