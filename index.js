
// for toggling of the hamburger
function myFunction(x) {
  x.classList.toggle("change");
}

//for menu display
let respNavbar = document.getElementById("resp");
let menu = document.getElementById("hamburgercon");

function navBar() {
  if (respNavbar.style.height === "81vh") {
    respNavbar.style.height = "0px";
    respNavbar.style.padding = "0px";
  } else {
    respNavbar.style.height = "81vh";
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
  if (arrow.style.transform === "rotate(180deg)") {
    arrow.style.transform = "rotate(0deg)";
    featureContent.style.display = "none";
  } else {
    arrow.style.transform = "rotate(180deg)";
    featureContent.style.display = "block";
  }
}

function arrrowReturn() {
  if (arrow.style.transform === "rotate(180deg)") {
    arrow.style.transform = "rotate(0deg)";
    featureContent.style.display = "none";
  }
}

featuresMenu.addEventListener("mouseover", rotateArrow);
featuresMenu.addEventListener("mouseout", arrrowReturn);
featureContent.addEventListener("mouseout", rotateArrow);

var myVar;

function loader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let profiileName = document.getElementById("username");

function usernameDisplay() {
  const verifiedMails = JSON.parse(localStorage.getItem("verifiedmail"));
  const usersInformation = JSON.parse(localStorage.getItem("usersInfo"));

  for (let i = 0; i < usersInformation.length; i++) {
    let users = usersInformation[i];
    if (verifiedMails === users.signupemail) {
      profiileName.innerHTML =
        users.signupfirstName + " " + users.signuplastName;
      document.getElementById("profile-cardname").innerHTML =
        users.signupfirstName + " " + users.signuplastName;
      document.getElementById("profilecard-email").innerHTML =
        users.signupemail;
      document.getElementById("signupbtn").style.display = "none";
      document.getElementById("signout").textContent = "Sign Out";
    }
  }
}

usernameDisplay();

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtns");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
