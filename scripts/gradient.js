const output = document.getElementById("clr");
const color1 = document.querySelector(".grad1");
const color2 = document.querySelector(".grad2");
const colors = document.querySelectorAll(".grad");
const main = document.getElementById("main");
let currentColor = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

main.style.background = currentColor;
output.textContent = currentColor;
colors.forEach((clr) => clr.addEventListener("input", setGradient));

function setGradient() {
  currentColor = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  main.style.background = currentColor;
  output.textContent = currentColor;
}
