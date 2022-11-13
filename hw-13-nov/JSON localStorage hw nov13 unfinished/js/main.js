
const tokenArr =  ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];

function getToken() {
   Date.now()
   return tokenArr[Math.floor(Math.random()*tokenArr.length)] +
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] + 
    tokenArr[Math.floor(Math.random()*tokenArr.length)] 
  };

 alert("newToken: " + getToken())

const usersArr = [
     { userName: "adir", email: "adir@email.com", token: "xxx", passWord: "123"},
     { userName: "meir", email: "meir@email.com", token: "xxx", passWord: "123"},
     { userName: "chana", email: "chana@email.com", token: "xxx", passWord: "123"},
     { userName: "ellie", email: "ellie@email.com", token: "xxx", passWord: "123"},
     { userName: "dani", email: "dani@email.com", token: "xxx", passWord: "123"}

];

var usersJSON = localStorage.usersArr;
if (usersJSON){
    try{
    let users = JSON.parse(usersJSON)
    usersArr = users;
} catch (e){
    console.log(e)
    console.log("problem");
}
}else{
    defaultusersArr()
}

function defaultusersArr(){
    localStorage.usersArr = JSON.stringify(usersArr)
}


const newUser = {email: prompt("hi new user enter your Email:"), token: getToken()}

var newUserJSON = localStorage.newUser;
if (newUserJSON){
    try{
    let newUser = JSON.parse(newUserJSON)
    newUserJSON = newUser;
} catch (e){
    console.log(e)
    console.log("problem");
}
}else{
    defaultNewUserArr()
}

function defaultNewUserArr(){
    localStorage.newUser = JSON.stringify(newUser)
}


function tokenLogin(){
    if(newUser.email == usersArr[0].email){
        adirCheck()
    } else if(newUser.email == usersArr[1].email){
        meirCheck()
    } else if(newUser.email == usersArr[2].email){
        chanaCheck()
    }else if(newUser.email == usersArr[3].email){
        ellieCheck()
    }else if(newUser.email == usersArr[4].email){
        daniCheck()
    }else {
        alert("your not in the system plz try again")
    }
};

let btn = document.querySelector("main")
btn.innerHTML = "click here to log in"
btn.addEventListener("click", tokenLogin)
btn.style.backgroundColor = "aqua"
btn.style.fontSize = "100px"
btn.style.width = "40%"
btn.style.height = "30%"

function adirCheck(){
    if(newUser.token == usersArr[0].token){
        alert("Wellcome to The system Adir!")
    } else {
        let pass = prompt("enter your password to login:")
        if(pass == usersArr[0].passWord){
            alert("Wellcome to The system Adir!")
        }else {
            alert("Adir Wrong password plz try again")
        }
    }
}


function meirCheck(){
    if(newUser.token == usersArr[1].token){
        alert("Wellcome to The system Meir!")
    } else {
        let pass = prompt("enter your password to login:")
        if(pass == usersArr[1].passWord){
            alert("Wellcome to The system Meir!")
        }else {
            alert("Meir Wrong password plz try again")
        }
    }
};

function chanaCheck(){
    if(newUser.token == usersArr[2].token){
        alert("Wellcome to The system Chana!")
    } else {
        let pass = prompt("enter your password to login:")
        if(pass == usersArr[2].passWord){
            alert("Wellcome to The system Chana!")
        }else {
            alert("Chana Wrong password plz try again")
        }
    }
};

function ellieCheck(){
    if(newUser.token == usersArr[3].token){
        alert("Wellcome to The system Ellie!")
    } else {
        let pass = prompt("enter your password to login:")
        if(pass == usersArr[3].passWord){
            alert("Wellcome to The system Ellie!")
        }else {
            alert("Ellie Wrong password plz try again")
        }
    }
};

function daniCheck(){
    if(newUser.token == usersArr[4].token){
        alert("Wellcome to The system Dani!")
    } else {
        let pass = prompt("enter your password to login:")
        if(pass == usersArr[4].passWord){
            alert("Wellcome to The system Dani!")
        }else {
            alert("Dani Wrong password plz try again")
        }
    }
};