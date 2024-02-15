const noButton = document.querySelector("#no-button");

function changeTextNo() {
  noButton.innerHTML = "INCORRECT ANSWER";
  noButton.style.backgroundColor = "#FF3B30";
}

noButton.addEventListener("click", changeTextNo);
