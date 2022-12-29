

export function init() {
    var main = document.createElement("main")
    if ($("#username").val() == "") {
        $("main").remove();
    } else if ($("#main").length > 0) {
        $("main").remove();
    } else if ($("#main").length < 1) {
        $("main").remove();
        document.body.appendChild(main)
    }


}


