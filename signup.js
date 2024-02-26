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
var i = 0;
var txt1 = "Bonjour!, Good Morning, Ready to start your day with us?😃";
var txt2 = "Bon Apres-Midi!, Good Afternoon, Refresh your day with us?😃";
var txt3 = "Bon soiree!, Good Evening, Unwind your day with us?😃";
var speed = 70;

function callDate() {
  if (currentHour >= 0 && currentHour <= 12 && i < txt1.length) {
    document.getElementById("hour").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(callDate, speed);
  } else if (currentHour >= 12 && currentHour < 17 && txt2.length) {
    document.getElementById("hour").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(callDate, speed);
  } else {
    document.getElementById("hour").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(callDate, speed);
  }
}

callDate();

