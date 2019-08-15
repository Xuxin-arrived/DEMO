var btn = document.getElementById("out-btn");
var displayPart = document.getElementById("info");
var btn2 = document.getElementById("inner-btn");

btn.addEventListener("click", onclick);
function onclick() {
  displayPart.style.display = "block";
}
btn2.addEventListener("click", click2close);
function click2close() {
  displayPart.style.display = "none";
}