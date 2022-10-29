var userName = NaN;
var passWord = NaN;


function submit() {
    var username = document.getElementById("usernameX");
    var usernameValue = username.value;
    
    var password = document.getElementById("passwordX");
    var passwordValue = password.value;
    
 userName = usernameValue;
 passWord = passwordValue

 
 switch(userName){
    case usersArr[0].usname:
        msg = `Welcome ${usersArr[0].fname} :)` 
        break;

        case usersArr[1].usname:
            msg = `Welcome ${usersArr[1].fname} :)`
        break;
        case usersArr[2].usname:
            msg = `Welcome ${usersArr[2].fname} :)`
        break;
        case usersArr[3].usname:
            msg = `Welcome ${usersArr[3].fname} :)`
        break;
        case usersArr[4].usname:
            msg = `Welcome ${usersArr[4].fname} :)`
        break;
        
        default: 
 msg = "<h3>something went wrong with the User Name. Make sure that you enter the correct characters.<h3>"
 }

 switch(passWord){
    case usersArr[0].pword:
        msgPass = `Very Good ${usersArr[0].fname} your Password is Corrent!`
        break;

        case usersArr[1].pword:
            msgPass = `Very Good ${usersArr[1].fname} your Password is Corrent!`
        break;
        case usersArr[2].pword:
            msgPass = `Very Good ${usersArr[2].fname} your Password is Corrent!`
        break;
        case usersArr[3].pword:
            msgPass = `Very Good ${usersArr[3].fname} your Password is Corrent!`
        break;
        case usersArr[4].pword:
            msgPass = `Very Good ${usersArr[4].fname} your Password is Corrent!`
        break;
        
        default: 
 msgPass = "<h3>something went wrong with the Password. Make sure that you enter the correct numbers.<h3>"
 }



 var sec = document.querySelector("section")
 sec.innerHTML = `<h1> ${msg} </h1> <h1> ${msgPass} </h1>`
 sec.style.fontSize = "30px"
 sec.style.flexDirection = "column"

}




const usersArr =[
    {fname: "Adir",  usname: "adir", pword: "111" },
    {fname: "Meir",  usname: "meir", pword: "222" } ,
    {fname: "Elli",  usname: "elli", pword: "333" }, 
    {fname: "Chana",  usname: "chana", pword: "444" } ,
    {fname: "Dani",  usname: "dani", pword: "555" } 

];


var sec = document.querySelector("section")
sec.style.display = "flex"



var body = document.getElementsByTagName("body") [0];
body.style.backgroundImage ="url(https://lwfiles.mycourse.app/webschool-public/a5dd00177bff09550f83c13da701a042.png)" ;
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "200px 40px"

var div = document.querySelector("div");
div.style.fontSize = "150%"
 div.style.backgroundImage = "url(https://media.istockphoto.com/vectors/abstract-simple-geometric-vector-seamless-pattern-with-gold-line-on-vector-id1160720443?k=20&m=1160720443&s=612x612&w=0&h=tkTnYVL5jBOVK_wFgrixKsYzWVN7-x4AoEbg9ky7hoE=)"
 div.style.backgroundPosition = "center"
div.style.position = "relative"
 div.style.top = "10vh"
div.style.left = "35vw"
div.style.height = "80vh"
div.style.backgroundAttachment = "fixed"



var hOneUse = document.querySelector(`div :nth-child(1)`);
hOneUse.style.position = "relative"
hOneUse.style.left = "5vw"
hOneUse.style.top = "2vh" 

var hOneUseInput = document.querySelector(`div :nth-child(2)`);
hOneUseInput.style.position = "relative"
hOneUseInput.style.left = "2vw"
hOneUseInput.style.top = "2vh"
hOneUseInput.style.fontSize = "120%"


var hOnePass = document.querySelector(`div :nth-child(3)`);
hOnePass.style.position = "relative"
hOnePass.style.left = "5vw"
hOnePass.style.top = "2vh" 

var hOnePassInput = document.querySelector(`div :nth-child(4)`);
hOnePassInput.style.position = "relative"
hOnePassInput.style.left = "2vw"
hOnePassInput.style.top = "2vh"
hOnePassInput.style.fontSize = "120%"


var btn = document.querySelector(`div :nth-child(5)`);
btn.style.position = "relative"
btn.style.left = "-11vw"
btn.style.top = "10vh"
btn.style.fontSize = "30px"

var usersAre = document.querySelector(`div :nth-child(6)`);
usersAre.style.position = "relative"
usersAre.style.left = "7vw"
usersAre.style.top = "9vh" 

var usersNote = document.querySelector(`div :nth-child(7)`);
usersNote.style.position = "relative"
usersNote.style.left = "2vw"
usersNote.style.top = "9vh"
usersNote.style.backgroundColor = "aqua"
usersNote.style.width = "90%"
usersNote.style.fontSize = "90%"



// if the pword are the same the ${usersArr[X].fname} location stay in 0
