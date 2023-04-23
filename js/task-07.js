const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

//console.log(span);
//console.log(span.style.fontSize);

input.addEventListener("input", (event) => {
  console.log(input.value);
  span.style.fontSize = `${input.value}px`;
});
