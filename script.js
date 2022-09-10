const burger = document.querySelector(".burger");
const list = document.querySelector(".list");

burger.addEventListener("click", () => {
  // burger.classList.toggle("active");
  list.classList.toggle("active");
});

function submitmessage() {
  alert("Your message was sent successfully!");
}

function registerlogin() {
  alert("Registration was completed successfully!")
}