const menu = document.querySelector("#menu");
const list = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  list.classList.toggle("active");
});
