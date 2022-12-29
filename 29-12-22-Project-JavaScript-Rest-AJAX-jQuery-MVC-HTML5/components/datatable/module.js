
export function init() {
  var HTML = `<zing-grid id="grid" caption="Salesman-Organization(Double click to edit)"   data="https://salesman-organizatio-1b4bb8.appdrag.site/api/reg" 
  fetch
  ajax="true">
  <zg-colgroup>
  <zg-column index="username" editor-control="input"></zg-column>
  <zg-column index="first_name" editor-control="input"></zg-column>
  <zg-column  index="last_name" editor-control="input"></zg-column>
    <zg-column index="role" editor-control="input"></zg-column>
    <zg-column index="pin" editor-control="input"></zg-column>
  </zg-colgroup>
  </zing-grid>
  <button id="save-button">Update(one row at a time)</button>
  <button id="add-button">AddRow</button>
  <button id="delete-button">DeleteRow</button>
  <button id="re-button">RefreshDashbord</button>
 
  `

  var main = document.createElement("main")
  document.body.appendChild(main)
  var sec = document.createElement("section")
  $(sec).fadeToggle(0.1).fadeToggle(1000)
  main.append(sec);
  sec.innerHTML = HTML




}

