function updateTime() {
  const timeElement = document.getElementById("utcTime");
  if (timeElement) {
    timeElement.textContent = "UTC Time: " + new Date().toUTCString();
  }
}

// Update time immediately and refresh every 60 seconds (60000 ms)
updateTime();
setInterval(updateTime, 60000);

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card-container");
  if (card) {
    card.classList.add("show"); // Ensure the class exists before adding animation
  }
});
