const burger = document.querySelector(".burger");
const list = document.querySelector(".list");

hamburger.addEventListener("click", () => {
  burger.classList.toggle("activeburger");
  list.classList.toggle("activeburger");
});