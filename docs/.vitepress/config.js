module.exports = {
  title: "Learn Note",
  lang: "en-US",
  description: "Now",
  outDir: "../build",
  base: '/note',
  themeConfig: {
    nav: [
      {
        text: "前端基础",
        link: "../base/b-html",
      },
      {
        text: "前端进阶",
        items: [
          { text: "JavaScript", link: "../advance/index" },
          { text: "TypeScript", link: "../ts/index" },
          { text: "杂谈", link: "../advance/advance" },
        ],
      },
      {
        text: "Vue",
        items: [
          { text: "Vue 基础", link: "../vue/index" },
          { text: "VueRouter", link: "../vue/VueRouter" },
          { text: "Vuex", link: "../vue/vuex" },
          { text: "Vue3+Ts+setup", link: "../vue/3-ts" },
        ],
      },
      {
        text: "React",
        items: [{ text: "React 基础", link: "../react/index" }],
      },
      {
        text: "NodeJs",
        items: [
          { text: "Node", link: "../node/index" },
          { text: "Koa", link: "/vue/VueRouter" },
          { text: "Nest", link: "../nest/index" },
        ],
      },
      { text: "测试", link: "../database/mysql" },
      { text: "跨端跨平台", link: "/react-native/index" },
      {
        text: "Python",
        items: [
          {text: "Python基础", link: "../python/py_base.md"},
          {text: "Flask", link: "../flask/index"},
          {text: "Django", link: "../django/index"},
        ]
      }
    ],
    sidebar: {
      "/base/": [
        {
          text: "目录",
          items: [
            { text: "HTML", link: "../base/b-html" },
            { text: "CSS", link: "../base/b-css" },
            { text: "JS", link: "../base/b-js" },
            { text: "HTTP", link: "../base/b-http" },
            { text: "性能优化", link: "../base/b-performance" },
            { text: "浏览器", link: "../base/b-browser" },
            { text: "Git", link: "../base/b-git" },
            { text: "正则", link: "../base/b-reg" },
          ],
        },
      ],
    },
  },
};
