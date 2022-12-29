import * as KM from "../components/keypad/module.js"
import * as TV from "../components/datatable/view.js"
export function init() {

  document.getElementById("username").addEventListener("input", function () {
    console.log(this.value);


    fetch('https://salesman-organizatio-1b4bb8.appdrag.site/api/username', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: `username=${this.value}`
    })
      .then(response => response.json())
      .then(res => {
        if (res.Table.length) {
          KM.init(res.Table[0]);
          TV.GiveAccses(res.Table[0]);
          return res.Table[0];
        }

      });

  })

}

