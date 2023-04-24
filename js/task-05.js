const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (input.value != "") {
    span.textContent = input.value;
  } else {
    span.textContent = "Anonymous";
  }
});
