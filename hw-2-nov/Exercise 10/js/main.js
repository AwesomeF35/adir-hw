
//  const Cars = [
//      {category: ["sport", "luxury"] ,
//      make: "bmw",
//     model: "bmw one",
//  price:"$400,000",
//  year: 2022,
//  available : true
//  },{
//      category: ["SUV", "luxury"] ,
//      make: "lAND roVER",
//      model: "goodone",
//  price:"$230,000",
//  year: 2021,
//  available : true
//  },{
//      category: ["SUV", "luxury"] ,
//     make: " roVER",
//   price:"$230,000",
// year: 2021,
// available : true
//  }
//  ];

//  const mainDiv = document.querySelector("main");
//  Cars.forEach(createHTML)

//  function createHTML(car, i) {
//     if (car.available) {
//       const div = document.createElement("div");
//       div.id = "car-" + i;
//       div.className = "each-car";
//        div.style.backgroundImage = `url(./assets/images/${car.image})`;
//        const btn = document.createElement("button");
//       btn.innerText = "X";
//       btn.title = "Click to remove";
//       const h1 = document.createElement("h1");
//        h1.innerText = car.make;
//        const h2 = document.createElement("h2");
//        h2.innerText = car.model;
//       const p = document.createElement("p");
//        p.innerText = car.price;
//       div.append(btn, h1, h2, p);
//        car.DOM = div;
//        mainDiv.appendChild(div);
//      }
//  }


  

    function textShow() {
      
      document.getElementById("intextCategory").type = "text";
      document.getElementById("intextMake").type = "text";
      document.getElementById("intextModel").type = "text";
       document.getElementById("intextPrice").type = "text";
         document.getElementById("intextYear").type = "text";
        
         subAndHide()

     
    }

     function subAndHide() {
     var x = document.querySelector("button");
     x.innerText = "subAndHide";
     x.addEventListener("click", end);
   
     }
     
 


     function end(){
      valueIn()
      document.getElementById("intextCategory").type = "hidden";
      document.getElementById("intextMake").type = "hidden";
      document.getElementById("intextModel").type = "hidden";
       document.getElementById("intextPrice").type = "hidden";
         document.getElementById("intextYear").type = "hidden";
         var x = document.querySelector("button");
         x.innerText = "Ty!!!";
     }

   function valueIn(){
   alert("Category: " + document.getElementById("intextCategory").value) 

   }