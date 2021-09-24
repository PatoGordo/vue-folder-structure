import template from "./navbar.template.js";
import setup from "./navbar.setup.js";
import { SetStyle } from "../../../../shared/set-style.js";

import styles from "./navbar.style.css" assert { type: "css" };
SetStyle(styles);

export default {
  name: "Navbar",
  template,
  setup,
};
