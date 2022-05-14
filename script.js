var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      acc[i].classList.add("active");

    } else {
      panel.style.display = "block";
      acc[i].classList.remove("active");

    }
  })
}


function myFunction(x) {
  x.classList.toggle("fa-xmark");
}