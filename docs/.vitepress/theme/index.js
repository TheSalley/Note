import DefaultTheme from "vitepress/theme";
import Talk from "./Talk.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Talk", Talk);
  },
};
