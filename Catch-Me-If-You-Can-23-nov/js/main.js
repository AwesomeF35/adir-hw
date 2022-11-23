
// HTML
var main = document.createElement("main")
var sec = document.createElement("section");
var headDiv = document.createElement("div");
headDiv.innerText = "Catch Me If You Can";
var btnStart = document.createElement("button");
btnStart.id = "btnStart";
btnStart.innerText = "Start";
var btnStop = document.createElement("button");
btnStop.id = "btnStop";
btnStop.innerText = "Restart";
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
timerh3.innerText = "60";
timerh3.id = "timerView";
var leaderBoard = document.createElement("div");
leaderBoard.id = "leader-board";
var BoardOne = document.createElement("div");
BoardOne.innerText = "0";
BoardOne.title = "11/11/11"
BoardOne.id = "one-l"
var BoardTow = document.createElement("div");
BoardTow.title = "11/11/11"
BoardTow.id = "tow-l"
var BoardTree = document.createElement("div");
BoardTree.innerText = "0";
BoardTree.id = "tree-l"
BoardTree.title = "11/11/11"
var BoardFour = document.createElement("div");
BoardFour.innerText = "0";
BoardFour.title = "11/11/11"
BoardFour.id = "four-l"
var BoardFive = document.createElement("div");
BoardFive.innerText = "0";
BoardFive.id = "five-l"
BoardFive.title = "11/11/11"


document.body.appendChild(sec).appendChild(headDiv).appendChild(btnStart);
document.body.appendChild(main).appendChild(bordSec).appendChild(gameBord).appendChild(target);
document.body.appendChild(main).appendChild(formSec);
headDiv.append(btnStop);
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
highScoresDiv.append(leaderBoard);
leaderBoard.append(BoardOne);
leaderBoard.append(BoardTow);
leaderBoard.append(BoardTree);
leaderBoard.append(BoardFour);
leaderBoard.append(BoardFive);
// HTML


// CSS


main.style.display = "flex"

headDiv.style.width = "100wv"
headDiv.style.height = "10vh"
headDiv.style.backgroundImage = "linear-gradient( yellow ,gold )"
headDiv.style.textAlign = "center"
headDiv.style.fontSize = "40px"
headDiv.style.fontFamily = "sans-serif"
headDiv.style.paddingTop = "3vh"


bordSec.style.margin = "10px"

gameBord.style.width = "1300px"
gameBord.style.height = "790px"
gameBord.style.backgroundImage = "radial-gradient(goldenrod, coral, red)"


var moveTop = 0
var moveLeft = 0
target.style.width = "200px"
target.style.height = "5vh"
target.style.backgroundImage = "linear-gradient(to bottom right, aqua, blue)"
target.style.position = "relative"
target.style.top = moveTop + "px"
target.style.left = moveLeft + "px"
target.style.textAlign = "center"
target.style.paddingTop = "15px"
target.innerHTML = "Catch Me"


formSec.style.display = "flex"
formSec.style.flexDirection = "column"
formSec.style.justifyContent = "center"
formSec.style.paddingLeft = "30px"
formSec.style.paddingTop = "30px"
formSec.style.paddingBottom = "30px"
formSec.style.height = "730px"
formSec.style.width = "300px"
formSec.style.backgroundImage = "linear-gradient(to bottom right, green, black)"
formSec.style.margin = "10px"
formSec.style.fontFamily = "sans-serif"

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
highScoresDiv.style.fontSize = "20px"
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

leaderBoard.style.position = "relative"
leaderBoard.style.top = "2px"
leaderBoard.style.left = "15px"

btnStart.style.width = "150px"
btnStart.style.height = "50px"
btnStart.style.position = "relative"
btnStart.style.right = "650px"
btnStart.style.bottom = "5px"
btnStart.style.display = ""


btnStop.style.width = "150px"
btnStop.style.height = "50px"
btnStop.style.position = "relative"
btnStop.style.right = "650px"
btnStop.style.bottom = "5px"
btnStop.style.display = "none"

leaderBoard.style.display = "flex"
leaderBoard.style.flexDirection = "column"

// CSS



var scoreValue = 1;
var score = document.getElementById("scoreView");

var pointsValue = 0;
var points = document.getElementById("pointsView");

var levelValue = 0;
var level = document.getElementById("levelView");

let levelByClick = 0;

var miss = document.getElementById("missView");
var missClicks = 0;

var timerValue = 0;
var timer = document.getElementById("timerView");


var target = document.getElementById("target");


var gameBordEffect = document.getElementById("gameBord");


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

};



function scoreAddtarget(e) {

    if (levelValue <= 1) {
        scoreValue += 11
        pointsValue -= 10
    } else if (levelValue <= 2) {
        scoreValue += 22
        pointsValue -= 20
    } else if (levelValue <= 3) {
        scoreValue += 33
        pointsValue -= 30
    } else if (levelValue <= 4) {
        scoreValue += 44
        pointsValue -= 40
    } else if (levelValue <= 5) {
        scoreValue += 55
        pointsValue -= 50
    }

    score.innerHTML = scoreValue
    points.innerHTML = pointsValue
    missClicks--
    e.stopPropogation();

};


function lvlByClick() {
    levelByClick++
    lvls(levelByClick)
    setNextPoints(levelByClick)
    scoreAddtarget()
};





function missClicksCall() {
    missClicks++
    miss.innerHTML = missClicks
};


function lvls(x) {

    if (x <= 10) {
        levelValue = 1
        level.innerText = "1"
    } else if (x <= 20) {
        levelValue = 2
        level.innerText = "2"
    } else if (x <= 30) {
        levelValue = 3
        level.innerText = "3"
    } else if (x <= 40) {
        levelValue = 4
        level.innerText = "4"
    } else if (x <= 50) {
        levelValue = 5
        level.innerText = "5"
    }
};


let usersHighJsonIn = localStorage.usersHigh;
let usersHigh = [
    { name: "Meir", scoreNum: "1000", theDate: "11.12.2018" },
    { name: "Adir", scoreNum: "500", theDate: "12.13.2014" },
    { name: "Niran", scoreNum: "300", theDate: "13.14.2012" },
    { name: "Chana", scoreNum: "200", theDate: "15.14.2014" },
    { name: "Ellie", scoreNum: "100", theDate: "16.16.2013" },
];

if (usersHighJsonIn) {
    usersHigh = JSON.parse(usersHighJsonIn);
} else {
    localStorage.usersHigh = JSON.stringify(usersHigh);

};

var highPlayerOne = document.getElementById("one-l")
highPlayerOne.innerHTML = `1. ${usersHigh[0].name} - ${usersHigh[0].scoreNum}`;
highPlayerOne.title = `${usersHigh[0].theDate}`
var highPlayerTow = document.getElementById("tow-l")
highPlayerTow.innerHTML = `2. ${usersHigh[1].name} - ${usersHigh[1].scoreNum}`;
highPlayerTow.title = `${usersHigh[1].theDate}`
var highPlayerTree = document.getElementById("tree-l")
highPlayerTree.innerHTML = `3. ${usersHigh[2].name} - ${usersHigh[2].scoreNum}`;
highPlayerTree.title = `${usersHigh[2].theDate}`
var highPlayerFour = document.getElementById("four-l")
highPlayerFour.innerHTML = `4. ${usersHigh[3].name} - ${usersHigh[3].scoreNum}`;
highPlayerFour.title = `${usersHigh[3].theDate}`
var highPlayerFive = document.getElementById("five-l")
highPlayerFive.innerHTML = `5. ${usersHigh[4].name} - ${usersHigh[4].scoreNum}`;
highPlayerFive.title = `${usersHigh[4].theDate}`




function timerSet() {
    timerValue = 60
    var Set = setInterval(function () {
        timerValue -= 1
        timer.innerHTML = timerValue
        if (timerValue <= 0) {
            clearInterval(Set);
            endGame()

        }
    }, 1000);

}



btnStart.addEventListener("click", startGame)

btnStop.addEventListener("click", reStart)

function reStart() {
    window.location.reload();
}

function startGame() {
    timerSet()
    startStop()
    btnStop.style.display = ""
    btnStart.style.display = "none"
    target.addEventListener("mouseover", moveIt)
}

function setNextPoints(x) {

    if (x == 1) {
        pointsValue += 100
        speedDiv5()
    } else if (x == 11) {
        pointsValue += 200
        timerValue += 10
        speedDiv5()
    } else if (x == 21) {
        pointsValue += 300
        timerValue += 10
        speedDiv5()
    } else if (x == 31) {
        pointsValue += 400
        timerValue += 10
        speedDiv5()
    } else if (x == 41) {
        pointsValue += 500
        timerValue += 10
        speedDiv5()
    } else if (x == 51) {
        pointsValue += 9999999
        timerValue += 10
        speedDiv5()
    }
}

var move;
var moveSpeed = 1200

function moveIt() {
    move = setInterval(function () {
        moveTop = Math.floor(Math.random() * 726);
        moveLeft = Math.floor(Math.random() * 1101);
        target.style.top = moveTop + "px"
        target.style.left = moveLeft + "px"
    }, moveSpeed)
    target.removeEventListener("mouseover", moveIt)
    gameBordEffect.addEventListener("click", scoreRemgameBord)
    target.addEventListener("click", lvlByClick)
}

var rotate = false;
var runner;
var degrees = 0;
var speedDiv = 10;

function start() {
    runner = setInterval(function () {
        degrees++;
        target.style.transform = 'rotate(' + degrees + 'deg)';
    }, speedDiv)
}

function stop() {
    clearInterval(runner);
}

function startStop() {
    if (!rotate) {
        rotate = true;
        start();
    } else {
        rotate = false;
        stop();
    }
}

function speedDiv5() {
    speedDiv -= 2;
    stop();
    start();
    moveSpeed -= 200
}

var nameU = null;
let user = {};
class User {
    constructor(_nameU, _scoreValue, _theDate) {
        this.name = _nameU
        this.scoreNum = _scoreValue
        this.theDate = _theDate
    }
}

function endGame() {
    alert("GameOver")
    var nameU = prompt("Enter your name:")
    var OneDate = `${(new Date()).toLocaleDateString('he-IL')}`
    alert(`Hi ${nameU} 
   Over View of your game in ${OneDate} 
    Your score is - ${scoreValue}
    Your missed clicks - ${missClicks}
    Your level - ${levelValue}
    `)
    var newUser = new User(nameU, scoreValue, OneDate)
    user = newUser
    usersHigh.push(user)
    addPlay(user)
    updateLS()
    reStart()
}


function updateLS() {
    localStorage.user = JSON.stringify(user);
    localStorage.usersHigh = JSON.stringify(usersHigh);
}




function addPlay(x) {
    if (x.scoreNum >= usersHigh[0].scoreNum) {
        usersHigh.splice(0, 0, x);
        alert("Congratulations!, You've got the first place in the leaderboard")
    } else if (x.scoreNum >= usersHigh[1].scoreNum) {
        usersHigh.splice(1, 0, x);
        alert("Congratulations!, You've got the second place in the leaderboard")
    } else if (x.scoreNum >= usersHigh[2].scoreNum) {
        usersHigh.splice(2, 0, x);
        alert("Congratulations!, You've got the third place in the leaderboard")
    } else if (x.scoreNum >= usersHigh[3].scoreNum) {
        usersHigh.splice(3, 0, x);
        alert("Congratulations!, You've got the fourth place in the leaderboard")
    } else if (x.scoreNum >= usersHigh[4].scoreNum) {
        usersHigh.splice(4, 0, x);
        alert("Congratulations!, You've got the fifth place in the leaderboard")
    }
}
