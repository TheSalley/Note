import { head } from "./config/head";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";

export default {
  title: "学习",
  lang: "en-US",
  description: "学习笔记",
  cacheDir: "../node_modules",
  outDir: "../build",
  head,
  themeConfig: {
    nav,
    sidebar,
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "注意",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
};
