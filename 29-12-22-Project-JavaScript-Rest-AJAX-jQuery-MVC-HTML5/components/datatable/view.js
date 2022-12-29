
var roleNum = 0
var roleRemove = 0
var userRemove = null
var firstnameUser = null
var baduser = document.getElementById('baduser');
var pass = document.getElementById('pass');
var enternum = document.getElementById('enternum');

let refreshGrid = function () {
  window.location.reload();
}


export function GiveAccses(x) {
  if (x.role == `1:1`) {
    roleNum = 1
    firstnameUser = x.first_name
    enternum.play();
    alert(`Hi Admin ${x.first_name}`)
  } else if (x.role == `2:2`) {
    roleNum = 2
    firstnameUser = x.first_name
    enternum.play();
    alert(`Hi Manager ${x.first_name}`)
  } else if (x.role == `3:3`) {
    firstnameUser = x.first_name
    roleNum = 3
    enternum.play();
    alert(`Hi Salesman ${x.first_name}`)
  }
}
export function init() {
  $(document).ready(function () {
    fetch('https://salesman-organizatio-1b4bb8.appdrag.site/api/reg')
      .then(response => response.json())
      .then(data => {
        var data = data.Table
        const zgRef = document.querySelector('zing-grid');
        zgRef.setData(data);

        $('#re-button').click(function () { refreshGrid() })
        $('#save-button').click(function () {
          var dataNew = zgRef.getData();
          if (roleNum == 2) {
            var dataUserTow = dataNew.find(item => item.username === dataNew[1].username)
            if (data[1].username != dataNew[1].username || data[1].first_name != dataNew[1].first_name || data[1].last_name != dataNew[1].last_name || data[1].pin != dataNew[1].pin || data[1].role != dataNew[1].role) {
              updateData(dataUserTow)
            } else {
              baduser.play();
              alert("Manager can edit only his own details")
            }
          } else if (roleNum == 3) {
            var dataUserTree = dataNew.find(item => item.username === dataNew[2].username)
            if (data[2].username != dataNew[2].username || data[2].first_name != dataNew[2].first_name || data[2].last_name != dataNew[2].last_name || data[2].pin != dataNew[2].pin || data[2].role != dataNew[2].role) {

              updateData(dataUserTree)
            } else {
              baduser.play();
              alert("Salesman can edit only his own details")
            }
          } if (roleNum == 1) {
            var dataUserOne = dataNew.find(item => item.username === dataNew[0].username)
            var dataUserTow = dataNew.find(item => item.username === dataNew[1].username)
            var dataUserTree = dataNew.find(item => item.username === dataNew[2].username)

            if (data[0].username != dataNew[0].username || data[0].first_name != dataNew[0].first_name || data[0].last_name != dataNew[0].last_name || data[0].pin != dataNew[0].pin || data[0].role != dataNew[0].role) {
              updateData(dataUserOne)
            } else if (data[1].username != dataNew[1].username || data[1].first_name != dataNew[1].first_name || data[1].last_name != dataNew[1].last_name || data[1].pin != dataNew[1].pin || data[1].role != dataNew[1].role) {
              updateData(dataUserTow)

            } else if (data[2].username != dataNew[2].username || data[2].first_name != dataNew[2].first_name || data[2].last_name != dataNew[2].last_name || data[2].pin != dataNew[2].pin || data[2].role != dataNew[2].role) {
              updateData(dataUserTree)
            } else {
              baduser.play();
              alert("Something went wrong and cannot be updated please try again")
              refreshGrid(zgRef)
            }
          }



          function updateData(x) {
            var form = new FormData();
            form.append("first-name", `${x.first_name}`);
            form.append("last-name", `${x.last_name}`);
            form.append("username", `${x.username}`);
            form.append("pin", `${x.pin}`);
            form.append("role", `${x.role}`);

            var settings = {
              "url": "https://salesman-organizatio-1b4bb8.appdrag.site/api/update3",
              "method": "PUT",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };


            $.ajax(settings).done(function (response) {
              pass.play();
              console.log(response);
              alert("The dashboard is updated successfully")
              refreshGrid()
            });


          }





        }

        )
        $('#delete-button').click(function () {
          userRemove = prompt("Enter User Name to Delete:")
          roleRemove = prompt("Enter Role Of The User to Delete:")
          if (roleNum == 2 && roleRemove == 1) {
            baduser.play();
            alert("Manager cannot remove an admin")
          } else {
            delRow()

          }

          function delRow() {
            var form = new FormData();
            form.append("username", userRemove);
            form.append("role", roleRemove);

            var settings = {
              "url": "https://salesman-organizatio-1b4bb8.appdrag.site/api/del",
              "method": "DELETE",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };

            $.ajax(settings).done(function (response) {
              console.log(response);
              pass.play();
              alert("The user has been deleted")
              refreshGrid()
            });


          }

        })

      }
      )



    var usernameAdd = null
    var firstNameAdd = null
    var lastNameAdd = null
    var pinAdd = 0
    var roleAdd = 0
    $('#add-button').click(function () {
      usernameAdd = prompt("Enter New User Name:")
      firstNameAdd = prompt("Enter New First Name:")
      lastNameAdd = prompt("Enter New Last Name:")
      pinAdd = prompt("Enter New Pin:")
      roleAdd = prompt("Enter New Role:")
      if (roleNum == 2) {
        if (roleAdd == 1) {
          baduser.play();
          alert("Cannot add an admin to the system tell the admin to do so")
        } else {
          addRow()
        }
      } else if (roleNum == 3) {
        if (roleAdd == 1 || 2) {
          baduser.play();
          alert("Cannot add an admin or maneger to the system tell the admin to do so")
        } else {
          addRow()
        }
      } else {
        addRow()
      }


      function addRow() {
        var form = new FormData();
        form.append("username", usernameAdd);
        form.append("first-name", firstNameAdd);
        form.append("last-name", lastNameAdd);
        form.append("pin", pinAdd);
        form.append("role", roleAdd);

        var settings = {
          "url": "https://salesman-organizatio-1b4bb8.appdrag.site/api/add",
          "method": "POST",
          "timeout": 0,
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };

        $.ajax(settings).done(function (response) {
          console.log(response);
          pass.play();
          alert("New row has been added")
          refreshGrid()
        });
      }

    })





  });

}



