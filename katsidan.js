const hamburguer = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
    navbar.classList.toggle("active");
});