let clickCount = 0;

const messageEl = document.getElementById("message");
const buttonEl = document.getElementById("click-btn");

buttonEl.addEventListener("click", function () {
  clickCount += 1;
  messageEl.textContent = "You clicked " + clickCount + " time(s).";
});
