const Dogs = [
    {
        type: ["aaa","bbb"],
        name: "aaa",
        age: 3,
        image: "aa.jpg",
        color: "b"
    },
    {
        type: ["aaa","bbb"],
        name: "aaa",
        age: 3,
        image: "aa.jpg",
        color: "b"
    },
    {
        type: ["aaa","bbb"],
        name: "aaa",
        age: 3,
        image: "aa.jpg",
        color: "b"
    }
    
];

const mainDiv = document.querySelector("main");
const showHide = document.getElementById("show-hide");

const FormDOM = {
    theForm: document.getElementById("the-form"),
    type: document.getElementById("input-dog-type"),
    name: document.getElementById("input-name"),
    age: document.getElementById("input-age"),
    image: "aa.jpg",
    color: document.getElementById("input-color"),
    submit: document.getElementById("add-dog")
  
};
showHide.addEventListener("click", toggleForm);
function toggleForm() {
  if (FormDOM.theForm.style.display == "block") {
    FormDOM.theForm.style.display = "none";
    this.innerHTML = "Show Form";
  } else {
    FormDOM.theForm.style.display = "block";
    this.innerHTML = "Hide Form";
  }
};

FormDOM.submit.addEventListener("click", addDog);
function addDog() {
  var newDog = new Dog(
    FormDOM.type.value,
    FormDOM.name.value,
    FormDOM.color.value,
    FormDOM.age.value,
  );
  Dogs.push(newDog);
createHTML(newDog, Dogs.length - 1)
}
class Dog {
    constructor(_type, _name, _color, _age) {
      this.type = [_type];
      this.name = _name;
      this.color = _color;
      this.age = _age;
    }
  };



Dogs.forEach(createHTML);

function createHTML (dog,i){
    if(dog.name){
        const div = document.createElement("div");
    div.id = "dog-" + i;
    div.className = "each-dog";
     const img = document.createElement("img");
    img.src = `./assets/images/${dog.image}`;
    const btn = document.createElement("button");
    btn.innerText = "Del";
    btn.title = "Click to remove";
    btn.id = "button";
    const h1 = document.createElement("h1");
    h1.innerText = `My Name is: ${dog.name}`;
    const h2 = document.createElement("h2");
    h2.innerText =  `My Dog Type is: ${dog.type}`;
    const p = document.createElement("p");
    p.innerText = `I'm  ${dog.age} years old`;
    div.append(btn, h1, h2, p, img);
    dog.DOM = div;
    mainDiv.appendChild(div);
    btn.addEventListener("click", function(){
      div.remove()
      Dogs.splice([i],1)
    });
    }
};


