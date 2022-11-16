//HTML
var bod = document.querySelector("body");
var sec = document.createElement("section");
sec.className = "mainSec";
var mainDiv = document.createElement("div")
mainDiv.className = "form"
mainDiv.id = "login-form"
var h1 = document.createElement("h1");
h1.className = "user-name"
var h3 = document.createElement("h3");
h3.innerHTML = "PLEASE LOGIN";
var inputE = document.createElement("input");
inputE.className = "email";
var inputP = document.createElement("input");
inputP.className = "password";
var labelE = document.createElement("label");
labelE.innerHTML = "Email:";
var labelP = document.createElement("label");
labelP.innerHTML = "Password:";
var btnLoginTag = document.createElement("button");
btnLoginTag.innerText = "Login"
btnLoginTag.className = "btn-login"
var btnAnyAccount = document.createElement("button")
btnAnyAccount.id = "create-account-toggle"
btnAnyAccount.innerText = "Don't have an Account?"
var secDiv = document.createElement("div")
secDiv.className = "form"
secDiv.id = "register-form"
secDiv.style.display = "none"
var h3Reg = document.createElement("h3");
h3.innerHTML = "Welcome, create an account";
var inputNreg = document.createElement("input");
inputNreg.className = "name-reg";
var inputEreg = document.createElement("input");
inputEreg.className = "email-reg";
var inputPreg = document.createElement("input");
inputPreg.className = "password-reg";
var labelNreg = document.createElement("label");
labelNreg.innerHTML = "Name:";
var labelEreg = document.createElement("label");
labelEreg.innerHTML = "Email:";
var labelPreg = document.createElement("label");
labelPreg.innerHTML = "Password:";
var btnCreateAccount = document.createElement("button");
btnCreateAccount.innerText = "Create Account"
 btnCreateAccount.className = "btn-login";
btnCreateAccount.id = "newUser";
var btnHaveAccount = document.createElement("button");
btnHaveAccount.innerText = "Already have an Account?"
btnHaveAccount.id = "login-toggle";


bod.append(h1)
bod.append(sec)
sec.appendChild(mainDiv)
sec.append(mainDiv)
mainDiv.append(h3)
mainDiv.append(labelE)
mainDiv.append(inputE)
mainDiv.append(labelP)
mainDiv.append(inputP)
mainDiv.append(btnLoginTag)
mainDiv.append(btnAnyAccount)
sec.append(secDiv)
secDiv.append(h3Reg)
secDiv.append(labelNreg)
secDiv.append(inputNreg)
secDiv.append(labelEreg)
secDiv.append(inputEreg)
secDiv.append(labelPreg)
secDiv.append(inputPreg)
secDiv.append(btnCreateAccount)
secDiv.append(btnHaveAccount)
//HTML

const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".btn-login");

function uniqueToken() {
    const timeStamp = new Date().getTime().toString(36);
    const tokenUpCase = `${Math.random().toString(36).toUpperCase().substr(2)}`;
    const tokeLowwerCase = `${Math.random()
      .toString(36)
      .toLowerCase()
      .substr(2)}`;
    const token = tokeLowwerCase + tokenUpCase + timeStamp;
    return token;
  }

  let users = [
    { name: "Meir", email: "meir@email.com", token: "", password: "123" },
    { name: "Adir", email: "adir@email.com", token: "", password: "123" },
    { name: "Niran", email: "niran@email.com", token: "", password: "123" },
    { name: "Chana", email: "chana@email.com", token: "", password: "123" },
    { name: "Ellie", email: "ellie@email.com", token: "", password: "123" },
  ];

  let usersJsonIn = localStorage.usersInfo;

if (usersJsonIn) {
  users = JSON.parse(usersJsonIn);
} else {
  localStorage.usersInfo = JSON.stringify(users);
  loginEmail()
}

let userObject = null;

let user = {};
let userJsonC = localStorage.user;
if (userJsonC) {
  user = JSON.parse(userJsonC);
  tokenLogin();
} else {
  loginEmail()
}


function tokenLogin() {
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      if (u.email == user.email) {
        if (u.token == user.token) {
          user.token = uniqueToken(); 
          u.token = user.token; 
          updateLS(); 
          welcomwUser();
  
          return;
        }
      }
    }
    loginEmail();
  }
  
  function loginEmail() {
    console.log("login please");
    btnLogin.addEventListener("click", function () {
      for (let i = 0; i < users.length; i++) {
        const u = users[i];
        if (email.value == u.email) {
          if (password.value == u.password) {
            user.token = uniqueToken(); 
            user.email = u.email
            user.name = u.name
            u.token = user.token;
            updateLS();
            welcomwUser();
            return;
          }
        }
      }
      alert("wrong info");
    });
  }
  
  function welcomwUser() {
    userName.innerHTML = `Welcome ${user.name}`;
  }
  
  function updateLS(){
    localStorage.user = JSON.stringify(user); 
    localStorage.usersInfo = JSON.stringify(users); 
  }


  const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");


document.getElementById("create-account-toggle").addEventListener("click", function() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";

})

document
  .getElementById("login-toggle")
  .addEventListener("click", function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  

  class User {
    constructor(_name, _email,_password){
    this.name = _name
    this.email = _email
    this.password = _password
    this.token = uniqueToken()
}
  }

 var oneUser = document.getElementById("newUser")

 oneUser.addEventListener("click", function (){
    var name = document.querySelector(".name-reg")
    var email = document.querySelector(".email-reg")
    var password = document.querySelector(".password-reg")
var newUser = new User(name.value , email.value, password.value)
user = newUser
users.push(user)
updateLS()
welcomwUser();
     })
