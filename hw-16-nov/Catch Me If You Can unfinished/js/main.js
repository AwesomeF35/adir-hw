
// HTML
var main = document.createElement("main")
var sec = document.createElement("section");
var headDiv = document.createElement("div");
headDiv.innerText = "Catch Me If You Can";
var btnStartStop = document.createElement("button");
btnStartStop.id = "btnStartStop";
btnStartStop.innerText = "Start";
var bordSec = document.createElement("section");
var gameBord = document.createElement("div");
gameBord.id = "gameBord";
var target = document.createElement("div");
target.id = "target";
var formSec = document.createElement("section");
var scoreDiv = document.createElement("div");
var pointsDiv = document.createElement("div");
var levelDiv = document.createElement("div");
var missDiv = document.createElement("div");
var timerDiv = document.createElement("div");
var highScoresDiv = document.createElement("div");
var scorelabel = document.createElement("label");
scorelabel.innerText = "Score:";
var pointslabel = document.createElement("label");
pointslabel.innerText = "Points to Next Level:";
var levellabel = document.createElement("label");
levellabel.innerText = "Level:";
var misslabel = document.createElement("label");
misslabel.innerText = "Missed Clicks:";
var timerlabel = document.createElement("label");
timerlabel.innerText = "Timer:";
var highScoreslabel = document.createElement("label");
highScoreslabel.innerText = "High Scores:";

var scoreh3 = document.createElement("h3");
scoreh3.innerText = "0";
scoreh3.id = "scoreView";
var pointsh3 = document.createElement("h3");
pointsh3.innerText = "0";
pointsh3.id = "pointsView";
var levelh3 = document.createElement("h3");
levelh3.innerText = "0";
levelh3.id = "levelView";
var missh3 = document.createElement("h3");
missh3.innerText = "0";
missh3.id = "missView";
var timerh3 = document.createElement("h3");
timerh3.innerText = "0";
timerh3.id = "timerView";
var highScoresh3 = document.createElement("h3");
highScoresh3.innerText = "0";
highScoresh3.id = "highScoresView";

document.body.appendChild(sec).appendChild(headDiv).appendChild(btnStartStop);

document.body.appendChild(main).appendChild(bordSec).appendChild(gameBord).appendChild(target);

document.body.appendChild(main).appendChild(formSec);

formSec.append(scoreDiv);
formSec.append(pointsDiv);
formSec.append(levelDiv);
formSec.append(missDiv);
formSec.append(timerDiv);
formSec.append(highScoresDiv);

scoreDiv.append(scorelabel);
scoreDiv.append(scoreh3);

pointsDiv.append(pointslabel);
pointsDiv.append(pointsh3);

levelDiv.append(levellabel);
levelDiv.append(levelh3);

missDiv.append(misslabel);
missDiv.append(missh3);

timerDiv.append(timerlabel);
timerDiv.append(timerh3);

highScoresDiv.append(highScoreslabel);
highScoresDiv.append(highScoresh3);
// HTML


// CSS
main.style.display = "flex"

headDiv.style.width = "100wv"
headDiv.style.height = "10vh"
headDiv.style.backgroundColor = "aqua"
headDiv.style.textAlign = "center"
headDiv.style.fontSize = "40px"
headDiv.style.paddingTop = "3vh"

bordSec.style.margin = "10px"

gameBord.style.width = "1300px"
gameBord.style.height = "790px"
gameBord.style.backgroundColor = "red"
gameBord.style.zIndex = "1"

target.style.width = "200px"
target.style.height = "8vh"
target.style.backgroundColor = "black"


formSec.style.display = "flex"
formSec.style.flexDirection = "column"
formSec.style.justifyContent = "center"
formSec.style.paddingLeft = "30px"
formSec.style.paddingTop = "30px"
formSec.style.paddingBottom = "30px"
formSec.style.height = "730px"
formSec.style.width = "300px"
formSec.style.backgroundColor = "red"
formSec.style.margin = "10px"

scoreDiv.style.height = "100px"
scoreDiv.style.width = "80%"
scoreDiv.style.backgroundColor = "yellow"
scoreDiv.style.margin = "10px"
scoreDiv.style.fontSize = "30px"
scorelabel.style.paddingLeft = "20px"


pointsDiv.style.height = "100px"
pointsDiv.style.width = "80%"
pointsDiv.style.backgroundColor = "yellow"
pointsDiv.style.margin = "10px"
pointsDiv.style.fontSize = "20px"
pointslabel.style.paddingLeft = "20px"

levelDiv.style.height = "100px"
levelDiv.style.width = "80%"
levelDiv.style.backgroundColor = "yellow"
levelDiv.style.margin = "10px"
levelDiv.style.fontSize = "30px"
levellabel.style.paddingLeft = "20px"

missDiv.style.height = "100px"
missDiv.style.width = "80%"
missDiv.style.backgroundColor = "yellow"
missDiv.style.margin = "10px"
missDiv.style.fontSize = "30px"
misslabel.style.paddingLeft = "20px"

timerDiv.style.height = "100px"
timerDiv.style.width = "80%"
timerDiv.style.backgroundColor = "yellow"
timerDiv.style.margin = "10px"
timerDiv.style.fontSize = "30px"
timerlabel.style.paddingLeft = "20px"

highScoresDiv.style.height = "150px"
highScoresDiv.style.width = "80%"
highScoresDiv.style.backgroundColor = "yellow"
highScoresDiv.style.margin = "10px"
highScoresDiv.style.fontSize = "17px"
highScoreslabel.style.paddingLeft = "20px"

scoreh3.style.position = "relative"
scoreh3.style.top = "-15px"
scoreh3.style.left = "15px"

pointsh3.style.position = "relative"
pointsh3.style.top = "-15px"
pointsh3.style.left = "15px"

levelh3.style.position = "relative"
levelh3.style.top = "-15px"
levelh3.style.left = "15px"

missh3.style.position = "relative"
missh3.style.top = "-15px"
missh3.style.left = "15px"

timerh3.style.position = "relative"
timerh3.style.top = "-15px"
timerh3.style.left = "15px"

highScoresh3.style.position = "relative"
highScoresh3.style.top = "-15px"
highScoresh3.style.left = "15px"

btnStartStop.style.width = "150px"
btnStartStop.style.height = "50px"
btnStartStop.style.position = "relative"
btnStartStop.style.right = "650px"
btnStartStop.style.bottom = "5px"


// CSS



var scoreValue = 1;
var score = document.getElementById("scoreView");

var levelValue = 1;
var level = document.getElementById("levelView");

let levelByClick = 0;

var miss = document.getElementById("missView");
var missClicks = 0;

var target = document.getElementById("target");
target.addEventListener("click", lvlByClick)


var gameBordEffect = document.getElementById("gameBord");
gameBordEffect.addEventListener("click", scoreRemgameBord)

function scoreRemgameBord() {
  
    
    if (levelValue <= 1) {
        scoreValue -= 1
    
    } else if (levelValue <= 2) {
        scoreValue -= 2
       
    } else if (levelValue <= 3) {
        scoreValue -= 3
       
    } else if (levelValue <= 4) {
        scoreValue -= 4
       
    } else if (levelValue <= 5) {
        scoreValue -= 5
    }
    score.innerHTML = scoreValue - 1
    missClicksCall()

   

}



function scoreAddtarget() {
    if (levelValue <= 1) {
        scoreValue += 10
    } else if (levelValue < 2) {
        scoreValue += 20
    } else if (levelValue <= 3) {
        scoreValue += 30
    } else if (levelValue <= 4) {
        scoreValue += 40
    } else if (levelValue <= 5) {
        scoreValue += 50
    }
    score.innerHTML = scoreValue
    missClicks--
    
   
};


function lvlByClick() {
    levelByClick++
    scoreAddtarget()
    lvls(levelByClick)
    
    
 // try to ignore bordgame click by using -  gameBordEffect.removeEventListener("click", scoreRemgameBord)

};



function missClicksCall() {
    missClicks++
    miss.innerHTML = missClicks
};


function lvls(x) {

    if (x <= 10) {
        levelValue = 1
        headDiv.innerText ="your in lvl 1" //lvl check
    } else if (x <= 20) {
        levelValue = 2

        headDiv.innerText ="your in lvl 2"//lvl check

    } else if (x <= 30) {
        levelValue = 3
        headDiv.innerText ="your in lvl 3"//lvl check

    } else if (x <= 40) {
        levelValue = 4
        headDiv.innerText ="your in lvl 4"//lvl check

    } else if (x <= 50) {
        levelValue = 5
        headDiv.innerText ="your in lvl 5"//lvl check

    }
};


let usersHighJsonIn = localStorage.usersHighInfo;
let usersHigh = [
    { name: "Meir", scoreNum: "123" },
    { name: "Adir",  scoreNum: "123" },
    { name: "Niran",  scoreNum: "123" },
    { name: "Chana", scoreNum: "123" },
    { name: "Ellie",  scoreNum: "123" },
  ];

  if (usersHighJsonIn) {
    usersHigh = JSON.parse(usersHighJsonIn);
  } else {
    localStorage.usersHighInfo = JSON.stringify(usersHigh);
  
  };
  
  var highPlayer = document.getElementById("highScoresView")
  highPlayer.innerHTML = `1. ${usersHigh[0].name} - ${usersHigh[0].scoreNum} <br>
  2.${usersHigh[1].name} - ${usersHigh[1].scoreNum}<br>
  3.${usersHigh[2].name} - ${usersHigh[2].scoreNum}<br>
  4.${usersHigh[3].name} - ${usersHigh[3].scoreNum}<br>
  5. ${usersHigh[4].name} - ${usersHigh[4].scoreNum}`