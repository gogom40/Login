var signUpForm = document.getElementById("regForm");
var signinemail = document.getElementById("signInEmail");
var signinpassword = document.getElementById("signInPassword");
var signupname = document.getElementById("signUpName");
var signupemail = document.getElementById("signUpEmail");
var signuppassword = document.getElementById("signUpPassword");
var passed = document.querySelector(".passed");
var wrongLogin = document.querySelector(".wrongLogin");
var wrong=document.querySelector(".wrong");
var exist =document.querySelector(".exist")
allUsrers = [];

if (localStorage.getItem("allUsrers") != null) {
  allUsrers = JSON.parse(localStorage.getItem("allUsrers"));
}

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (check()) {
    addUser();
  }
});

function addUser() {
  var newUser = {
    name: signupname.value,
    email: signupemail.value,
    password: signuppassword.value,
  };
  if (isAlreadyExist(newUser) == true) {
    console.log("already exist");
    exist.classList.replace('d-none','d-block');
    passed.classList.replace('d-block','d-none');
    wrongLogin.classList.replace("d-block", "d-none");
  } else {
    allUsrers.push(newUser);
    passed.classList.replace('d-none','d-block');
    exist.classList.replace('d-block','d-none');
    wrongLogin.classList.replace("d-block", "d-none");
    setTimeout( function(){
      Window.location.href="../index.html"
    }, 3000);
    console.log(newUser);
    localStorage.setItem("allUsrers", JSON.stringify(allUsrers));
  }
}
function isAlreadyExist(newUser) {
  for (var i = 0; i < allUsrers.length; i++) {
    if( allUsrers[i].email.toLowerCase() == newUser.email.toLowerCase()){
      console.log("email is alredy exist");
      return true;
    };
  }
  console.log(newUser);
}

function validInput(Regex, element, passed, wrongLogin) {
  var pattern = Regex;
  if (pattern.test(element.value)) {
    console.log("valid");
    passed.classList.replace("d-none", "d-block");
    wrongLogin.classList.replace("d-block", "d-none");
    exist.classList.replace('d-block','d-none');
    return true;
  } else {
    console.log("invalid");
    wrongLogin.classList.replace("d-none", "d-block");
    passed.classList.replace('d-block','d-none');
    exist.classList.replace('d-block','d-none');
    return false;
  }
}
function check() {
  if (
    validInput(/^[a-zA-Z0-9]{2,}$/, signupname, passed, wrongLogin) == true &&
    validInput(
      /^[a-zA-Z0-9]{4,16}@[a-z]{1,5}\.[a-z]{2,3}$/,
      signupemail,
      passed,
      wrongLogin
    ) == true &&
    validInput(
      /[A-Z]+[a-z]+[0-9]+[~!@#$%^&*_\\\-*\/]+/,
      signuppassword,
      passed,
      wrongLogin
    ) == true
  ) {
    console.log("all valid");
    return true;
  } else {
    console.log("not valid");
    return false;
  }
}
