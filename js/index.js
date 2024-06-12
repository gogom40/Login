var signinemail = document.getElementById("signInEmail");
var signinpassword = document.getElementById("signInPassword");
var signupname = document.getElementById("signUpName");
var signupemail = document.getElementById("signUpEmail");
var signuppassword = document.getElementById("signUpPassword");
var passed = document.querySelector(".passed");
var wrongLogin = document.querySelector(".wrongLogin");
var wrong = document.querySelector(".wrong");
var exist = document.querySelector(".exist");
var logForm = document.getElementById("logForm");
allUsrers = [];

var allUsrers = [];
if (localStorage.getItem("allUsrers") != null) {
  allUsrers = JSON.parse(localStorage.getItem("allUsrers"));
}
console.log(allUsrers);
logForm.addEventListener("submit", function (e) {
  console.log("hello");
  e.preventDefault();
  login();
});

function login() {
  var userData = {
    email: signinemail.value,
    password: signinpassword.value,
  };
  if (isLoginvalid(userData) == true) {
    console.log("you logged in");
    passed.classList.replace("d-none", "d-block");
    wrongLogin.classList.replace("d-block", "d-none");
    logout()
  }else {
    console.log("User Not Found");
    passed.classList.replace("d-block", "d-none");
    wrongLogin.classList.replace("d-none", "d-block");
  }
}
function isLoginvalid(userData) {
  for (var i = 0; i < allUsrers.length; i++) {
    if (
      allUsrers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsrers[i].password == userData.password
    ) {
      console.log("user found");
      localStorage.setItem("userName", allUsrers[i].name);
      return true;
    }
  }
}
function logout(){
    window.location.href='home.html';
}

