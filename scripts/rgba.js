const btn = document.querySelector(".btn");
const main = document.getElementById("main");
const output = document.getElementById("clr");
btn.addEventListener("click", function () {
  let txt = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${getrandomAlpha()})`;
  main.style.backgroundColor = txt;
  output.innerHTML = txt;
});

function randomNumber() {
  return Math.floor(Math.random() * 256);
}
function getrandomAlpha() {
  return Math.random().toFixed(1);
}
