const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const main = document.getElementById("main");
const output = document.getElementById("clr");
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  main.style.backgroundColor = hexColor;
  output.innerHTML = hexColor;
});

function getRandomNumber() {
  const l = hex.length;
  return Math.floor(Math.random() * l);
}
