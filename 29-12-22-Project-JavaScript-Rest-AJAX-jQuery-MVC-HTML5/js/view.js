
export function init(x) {
    window.onload = function () {
        $(document).ready(function () {
            $('input').keyup(function () {
                if ($(this).val().length) {
                    $(x).show();
                } else {
                    $(x).hide();
                }
            });
        });
    }
    var baduser = document.getElementById('baduser');
    $("#btn").click(function () {
        if ($("section").length) {
            $("section").fadeToggle(1000)
        } else {
            baduser.play()
            alert("The User Name is not in the system")
        }

    });
}