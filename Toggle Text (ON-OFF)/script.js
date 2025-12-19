const displayText = document.getElementById("displayText");
const button = document.getElementById("button");
let currentState = "OFF";

button.addEventListener("click", () => {
  if (currentState === "OFF") {
    currentState = "ON";
  } else {
    currentState = "OFF";
  }
  displayText.textContent = currentState;
});
