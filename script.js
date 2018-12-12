var first=document.getElementById("first");
var second=document.getElementById("second");
var third=document.getElementsByTagName("span")
var main=document.getElementById("bodyname");

function colorChange(){
  main.style.background="linear-gradient(to right, "+first.value + ", " + second.value+ ")";
  third[0].textContent=main.style.background+";";
}

first.addEventListener("input",colorChange);
second.addEventListener("input",colorChange);
