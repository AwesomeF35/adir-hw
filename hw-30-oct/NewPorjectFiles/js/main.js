
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
 
    var body = document.querySelector("body");
    body.style.background = "green";
    var hOne = document.querySelector("h1");
    hOne.style.color = "blue"
    hOne.innerText = "Save index.html & style.css & main.js files"
  }
  downloadURI("data:text/html,NewIndexHtml", "index.html");
  
 
 

 downloadURIc("data:text/html,NewStyleCss", "style.css");
 
 function downloadURIc(uri, name) {
   var link = document.createElement("a");
   link.download = name;
   link.href = uri;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   delete link;


 }



 
 
 function downloadURIj(uri, name) {
   var link = document.createElement("a");
   link.download = name;
   link.href = uri;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   delete link;
 }
 downloadURIj("data:text/html,NewJS", "main.js");
 
