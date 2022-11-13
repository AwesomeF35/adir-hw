

const CodeProject = {
    code: "4567",
    tries: 0,
    codeEntered: "",
  };
  
  var main = document.querySelector("main");
  var keypadSection = document.createElement("section");
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
  
  function setClicksBTNS(btn, val) {
    btn.addEventListener("click", function () {
      CodeProject.codeEntered += val;  
      checkValue();
      btn.style.backgroundColor = "red"
      const myTimeout = setTimeout(color, 3000);
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
    alert("Success");
    
  }
  
  function reset() {
      alert("Wrong Code")
      CodeProject.codeEntered = "";
  }
  
  function callPolice() {
    alert("Calling police");
  }

  function color(){
   let colors = document.querySelectorAll(".key")
   colors.forEach(keypad =>{
    keypad.style.backgroundColor = "white"
    CodeProject.codeEntered = "";
   }); 
  
  }
  
