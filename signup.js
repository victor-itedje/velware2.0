var signinInput = document.getElementById("emailsignuppassword");
var passwordToggle = document.getElementById("eye");

function passwordVisible() {
  if (signinInput.type === "password") {
    signinInput.type = "text";
  } else {
    signinInput.type = "password";
  }
}

passwordToggle.addEventListener("click", passwordVisible);

var userDate = new Date();
var currentHour = userDate.getHours();

function callDate() {
  if (currentHour >= 0 && currentHour <= 12) {
    document.getElementById("hour").innerHTML =
      "Bonjour!, Good Morning, Ready to start your day with us?";
  } else if (currentHour >= 12 && currentHour < 17) {
    document.getElementById("hour").innerHTML =
      "Bon Apres-Midi!, Good Afternoon, Refresh your day with us?";
  } else {
    document.getElementById("hour").innerHTML =
      "Bon soiree!, Good Evening, Unwind your day with us?";
  }
}

callDate();
