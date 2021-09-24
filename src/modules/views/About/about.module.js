import template from "./about.template.js";
import setup from "./about.setup.js";
import { SetStyle } from "../../../shared/set-style.js";

import styles from "./about.style.css" assert { type: "css" };
SetStyle(styles);

export default {
  name: "About",
  path: "/about",
  component: {
    template,
    setup,
  },
};
