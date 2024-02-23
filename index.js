// for toggling of the hamburger
function myFunction(x) {
  x.classList.toggle("change");
}

//for menu display
let respNavbar = document.getElementById("resp");
let menu = document.getElementById("hamburgercon");

function navBar() {
  if (respNavbar.style.height === "85vh") {
    respNavbar.style.height = "0px";
    respNavbar.style.padding = "0px";
  } else {
    respNavbar.style.height = "85vh";
    respNavbar.style.padding = "20px";
  }
}

menu.addEventListener("click", navBar);


// for reveal text

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



// for rotating the arrow and displaying features menu

let featuresMenu = document.getElementById("features-arrow");
let arrow = document.getElementById("jsarrow");
let featureContent = document.getElementById("drop");

function rotateArrow() {
  if(arrow.style.transform === "rotate(180deg)") {
      arrow.style.transform = "rotate(0deg)"
      featureContent.style.display = "none";
  }else {
    arrow.style.transform = "rotate(180deg)"
      featureContent.style.display = "block";
  }
}

function arrrowReturn() {
  if(arrow.style.transform === "rotate(180deg)") {
    arrow.style.transform = "rotate(0deg)";
    featureContent.style.display = "none";
  }
}


featuresMenu.addEventListener("mouseover", rotateArrow);
featuresMenu.addEventListener("mouseout", arrrowReturn);
featureContent.addEventListener("mouseout", rotateArrow);

let responsiveFeatures = document.getElementById("responsivefeatures");
let responsiveContent = document.getElementById("responsive-content");

function responfea() {
  if(responsiveContent.style.display === "none") {
    responsiveContent.style.display = "block";
  }else{
    responsiveContent.style.display = "none";
  }
}

responsiveFeatures,addEventListener("click", responfea)
