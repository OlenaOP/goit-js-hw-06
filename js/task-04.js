let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const span = document.querySelector("#value");
//console.log(span);

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  span.innerHTML = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  span.innerHTML = counterValue;
});
