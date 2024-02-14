function myFunction(x) {
  x.classList.toggle("change");
}

let respNavbar = document.getElementById("resp");
let menu = document.getElementById("hamburgercon");

function navBar() {
  if (respNavbar.style.height === "250px") {
    respNavbar.style.height = "0px";
    respNavbar.style.padding = "0px";
  } else {
    respNavbar.style.height = "250px";
    respNavbar.style.padding = "20px";
  }
}

menu.addEventListener("click", navBar);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

}

window.addEventListener("scroll", reveal);
