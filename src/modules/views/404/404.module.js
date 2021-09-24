import template from "./404.template.js";
import setup from "./404.setup.js";
import { SetStyle } from "../../../shared/set-style.js";

import styles from "./404.style.css" assert { type: "css" };
SetStyle(styles);

export default {
  name: "Page 404",
  path: "/:pathMatch(.*)*",
  component: {
    template,
    setup,
  },
};
