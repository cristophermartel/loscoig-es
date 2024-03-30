let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const dotsContainer = document.getElementById("dots-container");

// Crear los puntos de navegación
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("data-index", i);
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
}

// Actualizar el slider cuando se haga clic en un punto de navegación
function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 5000); // Cambia la imagen cada 5 segundos
