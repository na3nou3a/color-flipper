const btn = document.querySelector(".btn");
const main = document.getElementById("main");
const output = document.getElementById("clr");
btn.addEventListener("click", function () {
  let txt = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  main.style.backgroundColor = txt;
  output.innerHTML = txt;
});

function randomNumber() {
  return Math.floor(Math.random() * 256);
}
