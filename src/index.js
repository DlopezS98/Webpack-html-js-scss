import { ShowAlert } from "./app";
// add this import to use the css styles
// webpack by default read this import and attach them into the html file
import "../public/style.css"

let button = document.getElementById('btn-alert');
button.addEventListener("click", ShowAlert);