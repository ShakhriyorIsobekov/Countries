const darkMode = document.querySelector(".header__content-btn");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark__mode");
  localStorage.setItem("theme", "dark__mode");
});

if (localStorage.getItem("theme") === "dark__mode") {
  document.body.classList.add("dark__mode");
}

if (localStorage.getItem("theme") !== "dark__mode") {
  document.body.classList.remove("dark__mode");
}
