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
