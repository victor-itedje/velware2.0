



function myFunction(x) {
  x.classList.toggle("change");
}

let respNavbar = document.getElementById("resp");
let menu = document.getElementById("hamburgercon")

function navBar() {
    if (respNavbar.style.height === "250px") {
      respNavbar.style.height = "0px";
      respNavbar.style.padding = "0px"
    } else {
      respNavbar.style.height = "250px";
      respNavbar.style.padding = "20px"
    }

}

menu.addEventListener("click", navBar)