import * as V from "./view.js"
import css from './style.css' assert {type: "css"};
document.adoptedStyleSheets.push(css);

function init() {
    V.init()
}
export { init }