function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector('body');

const buttonColor = document.querySelector('.change-color');
console.log(buttonColor);
buttonColor.addEventListener('click', changecolor);

let spanColor = document.querySelector('.color');
console.log(spanColor);

function changecolor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyElem.style.backgroundColor = color;
}