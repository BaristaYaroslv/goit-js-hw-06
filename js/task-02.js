const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let basket = document.getElementById("ingredients");
const liArray = [];
const foodIngredients = ingredients.forEach(ingredient => {
  let items =  document.createElement("li");
  items.className = 'item';
  items.textContent=ingredient;
  liArray.push(items);
})
basket.append(...liArray)