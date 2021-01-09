var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("spin").style.display = "none";
  document.getElementById("main").style.display = "block";
}
