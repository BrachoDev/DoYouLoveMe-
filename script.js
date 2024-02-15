const noButton = document.querySelector("#no-button");
const yesButton = document.querySelector("#yes-button");

function changeText() {
  noButton.innerHTML = "INCORRECT ANSWER";
  noButton.style.backgroundColor = "red";
  noButton.style.color = "white";
  noButton.style.border = "none";

  yesButton.innerHTML = '"ONLY" CORRECT ANSWER';
  yesButton.style.backgroundColor = "green";
  yesButton.style.color = "white";
  yesButton.style.border = "none";
  yesButton.style.padding = "20px";
}

noButton.addEventListener("click", changeText);
