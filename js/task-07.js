const textEl = document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", () => {
  const size = inputEl.value;
  textEl.style.fontSize = size + "px";
});