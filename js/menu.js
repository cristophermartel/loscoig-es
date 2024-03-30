const toggleMenuElement = document.getElementById("toggle-menu");
const inicioMenuElement = document.getElementById("inicioMenu");
const descripcionMenuElement = document.getElementById("descripcionMenu");
const galeriaMenuElement = document.getElementById("galeriaMenu");
const ubicacionMenuElement = document.getElementById("ubicacionMenu");
const contactoMenuElement = document.getElementById("contactoMenu");
const navbarElement = document.getElementById("navbar");

toggleMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});

inicioMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});

descripcionMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});

galeriaMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});

ubicacionMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});

contactoMenuElement.addEventListener("click", () => {
  navbarElement.classList.toggle("navbar-show");
});
