import DefaultTheme from "vitepress/theme";
import Talk from "./components/Talk.vue";
import "./style/custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Talk", Talk);
  },
};
