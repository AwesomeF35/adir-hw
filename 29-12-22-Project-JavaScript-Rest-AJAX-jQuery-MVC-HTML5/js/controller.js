import * as K from "../components/keypad/controller.js"
import * as V from "./view.js"
import * as X from "./ajax.js"
import css from '../css/style.css' assert {type: "css"};
document.adoptedStyleSheets.push(css);
function init() {
   V.init(K.init)
   X.init()
}

export { init }