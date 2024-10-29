document.addEventListener("DOMContentLoaded", function () {
  function updateClock() {
    const clockElement = document.getElementById("dynamic-clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = formattedTime;
  }

  // Saatin her saniye güncellenmesi
  setInterval(updateClock, 1000);
  updateClock();
});
