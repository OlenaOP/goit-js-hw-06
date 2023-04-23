const input = document.querySelector("#validation-input");
const dataLength = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
