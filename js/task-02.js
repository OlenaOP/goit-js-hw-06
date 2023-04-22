const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const itemElements = [];
ingredients.forEach((ing) => {
  const item = document.createElement("li");
  item.textContent = ing;
  item.className = "item";
  console.log(item);
  itemElements.push(item);
});

listOfIngredients.append(...itemElements);
console.log(listOfIngredients);

// Створити кілька кнопок на основі масива з обєктами використовуючи createElement
// const colors = [
//     {
//         label: "red",
//         color: "#FF0000",
//     },
//     {
//         label: "green",
//         color: "#00FF00",
//     },
//     {
//         label: "blue",
//         color: "#0000FF",
//     },
//     {
//         label: "yellow",
//         color: "#FFFF00",
//     },
// ];
//
// const buttonArea = document.querySelector('.markup')
//
// const buttonElements = [];
// colors.forEach(buttonData => {
//     const button = document.createElement('button');
//     button.textContent = buttonData.label;
//     button.style.backgroundColor = buttonData.color;
//     buttonElements.push(button);
// })
//
// buttonArea.append(...buttonElements);
