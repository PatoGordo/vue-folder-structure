import template from "./app.template.js";
import setup from "./app.setup.js";
import components from "./components/app.components.js";
import { SetStyle } from "../../shared/set-style.js";

import styles from "./app.style.css" assert { type: "css" };

SetStyle(styles);

export default {
  name: "App",
  template,
  setup,
  components,
};
