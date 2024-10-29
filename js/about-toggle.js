document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-btn");
  const moreInfo = document.getElementById("more-info");

  // Başlangıçta gizle
  moreInfo.style.display = "none";

  // Buton tıklandığında görünürlüğü kontrol et
  toggleButton.addEventListener("click", () => {
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
      toggleButton.innerText = "See Less";
    } else {
      moreInfo.style.display = "none";
      toggleButton.innerText = "See More";
    }
  });
});
