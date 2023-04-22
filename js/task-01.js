const listByCategories = document.querySelector("#categories");
console.log("Number of categories:", listByCategories.children.length);

const itemOfList = document.querySelectorAll(".item");

itemOfList.forEach((item) => {
  console.log("Category: ", item.firstElementChild.innerHTML);
  console.log("Elements: ", item.lastElementChild.children.length);
});
