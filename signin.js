let signInEmail = document.getElementById("signinemail");
let signInPwd = document.getElementById("signinpwd");
let signInSubmit = document.getElementById("signinsub");

function login(e) {
    e.preventDefault();
    let emailVal = signInEmail.value;
    let pwdVal = signInPwd.value;
    let usersInformation = JSON.parse(localStorage.getItem("usersInfo"));
    console.log(emailVal)

    for(let i = 0; i < usersInformation.length; i++) {
        const users = usersInformation[i]
        if(emailVal === users.signupemail) {
            if(pwdVal === users.signuppassword) {
                alert("Sucessfully Logged In");
                localStorage.setItem("verifiedmail", JSON.stringify(emailVal));
                console.log("yes");
                window.location.href = "https://velware.vercel.app/";
            }else {
                alert("Incorrect Email / Password");
                console.log("no")
            }
        }
    }
}

signInSubmit.addEventListener("click", login);


var signinInput = document.querySelector(".emailsignuppassword");
var passwordToggle = document.getElementById("eye");
let slash = document.getElementById("slash");

function passwordVisible() {
  if (signinInput.type === "password") {
    signinInput.type = "text";
    slash.style.display = "none";
  } else {
    signinInput.type = "password";
    slash.style.display = "block";
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