import {navbar,gohome} from "./navbar.js";
import {footer} from "./footer.js";

let navBar = document.getElementById("navbar");
navBar.innerHTML=navbar();
gohome();
 let footerEl = document.getElementById("footer");
 footerEl.innerHTML=footer();