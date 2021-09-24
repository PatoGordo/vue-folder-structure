import template from "./home.template.js";
import setup from "./home.setup.js";
import { SetStyle } from "../../../shared/set-style.js";

import styles from "./home.style.css" assert { type: "css" };
SetStyle(styles);

export default {
  name: "Home",
  path: "/",
  component: {
    template,
    setup,
  },
};
