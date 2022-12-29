import * as D from "../datatable/controller.js"
export function init(x) {
  const CodeProject = {
    code: `${x.pin}`,
    tries: 0,
    codeEntered: "",
  };

  var main = document.querySelector("main");
  var keypadSection = document.createElement("section");
  keypadSection.style.display = "none"

  keypadSection.className = "keypad-section";
  var keypad = document.createElement("div");
  keypad.className = "keypad";
  for (let i = 0; i < 10; i++) {
    var btn = document.createElement("div");
    btn.className = "key";
    var btnSpan = document.createElement("span");
    var val = i == 9 ? "0" : (i + 1).toString();
    btnSpan.innerText = val;
    btn.append(btnSpan);
    keypad.append(btn);
    setClicksBTNS(btn, val);

  }
  keypadSection.append(keypad);
  main.append(keypadSection);
  setNumsBTNS()

  var enternum = document.getElementById('enternum');
  var pass = document.getElementById('pass');
  var restart = document.getElementById('restart');
  var alarm = document.getElementById('alarm');



  function setNumsBTNS() {
    $("#btn").keyup(function (event) {
      if (event.which == 48) {
        event.preventDefault();
        CodeProject.codeEntered += 0
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 49) {
        event.preventDefault();
        CodeProject.codeEntered += 1
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 50) {
        event.preventDefault();
        CodeProject.codeEntered += 2
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 51) {
        event.preventDefault();
        CodeProject.codeEntered += 3
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 52) {
        event.preventDefault();
        CodeProject.codeEntered += 4
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 53) {
        event.preventDefault();
        CodeProject.codeEntered += 5
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 54) {
        event.preventDefault();
        CodeProject.codeEntered += 6
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 55) {
        event.preventDefault();
        CodeProject.codeEntered += 7
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 56) {
        event.preventDefault();
        CodeProject.codeEntered += 8
        checkValue();
        enternum.play();
        return false
      } else if (event.which == 57) {
        event.preventDefault();
        enternum.play();
        CodeProject.codeEntered += 9
        checkValue();
        return false
      }
    })

  }

  function setClicksBTNS(btn, val) {
    btn.addEventListener("click", function () {
      CodeProject.codeEntered += val;
      checkValue();
      btn.style.backgroundColor = "red"
      const myTimeout = setTimeout(color, 3000);
      enternum.play();
    });
  }

  function checkValue() {
    if (CodeProject.codeEntered.length == 4) {
      if (CodeProject.codeEntered === CodeProject.code) {
        success();
      } else if (CodeProject.tries < 3) {
        CodeProject.tries++;
        reset();
      } else {
        callPolice();
      }
    }
  }

  function success() {
    alert("Your login been successful");
    document.body.removeChild(main)
    D.init()
    adminCheck()
    pass.play();
  }

  function reset() {
    alert(`${x.first_name} Wrong Code`)
    restart.play()
    CodeProject.codeEntered = "";
  }

  function callPolice() {
    alarm.play()
    alert("@@@Calling Police@@@");
  }

  function color() {
    if (CodeProject.codeEntered.length < 4){
    let colors = document.querySelectorAll(".key")
    colors.forEach(keypad => {
      restart.play()
      keypad.style.backgroundColor = "white"
      CodeProject.codeEntered = "";
        });

  }}

  function adminCheck() {
    if (x.role == "1:1") {
      $("zing-grid").attr("editor", true);
    } else if (x.role == "2:2") {
      $("zing-grid").attr("editor", true);
    } else if (x.role == "3:3") {
      $("zing-grid").attr("editor", true)
      $("#add-button").hide()
      $("#delete-button").hide()
    }


  }

}

