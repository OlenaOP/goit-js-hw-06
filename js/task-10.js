const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

let amount = 0;

input.addEventListener("input", (event) => {
  amount = event.target.value;
});

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  divBoxes.insertAdjacentHTML("beforeend", markup);
}

buttonCreate.addEventListener("click", () => {
  if (input.value !== "") {
    createBoxes(amount);
  } else {
    alert("Enter your number");
  }
});
