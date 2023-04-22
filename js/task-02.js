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
  //console.log(item);
  itemElements.push(item);
});

listOfIngredients.append(...itemElements);
//console.log(listOfIngredients);
