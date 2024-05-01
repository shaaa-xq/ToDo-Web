const darkToggle = document.getElementById("toggle");

darkToggle.addEventListener("click", function () {
  const body = document.getElementsByClassName("container")[0];
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  body.classList.toggle("light-welcome");
  body.classList.toggle("light-datetime");
  body.classList.toggle("dark-welcome");
  body.classList.toggle("dark-datetime");
  darkToggle.classList.toggle("light-toggle");
});
