document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".nav-icon")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("nav-links").classList.toggle("responsive");
    });
});
