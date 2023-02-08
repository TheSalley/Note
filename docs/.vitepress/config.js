module.exports = {
  title: "Learn Note",
  lang: "en-US",
  description: "Now",
  base: "/note",
  outDir: "../build",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/641ad29515da4786a74d943a931ef25c~tplv-k3u1fbpfcp-watermark.image?",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "前端基础",
        link: "/base/b-html",
      },
      {
        text: "前端进阶",
        items: [
          { text: "JavaScript", link: "/advance/index" },
          { text: "TypeScript", link: "/ts/index" },
          { text: "杂谈", link: "/advance/advance" },
        ],
      },
      {
        text: "Vue",
        items: [
          { text: "Vue 基础", link: "/vue/index" },
          { text: "VueRouter", link: "/vue/VueRouter" },
          { text: "Vuex", link: "/vue/vuex" },
          { text: "Vue3+Ts+setup", link: "/vue/3-ts" },
        ],
      },
      {
        text: "React",
        items: [{ text: "React 基础", link: "/react/index" }],
      },
      {
        text: "NodeJs",
        items: [
          { text: "Node", link: "/node/index" },
          { text: "Koa", link: "/vue/VueRouter" },
          { text: "Nest", link: "/nest/index" },
        ],
      },
      {
        text: "跨端跨平台",
        items: [{ text: "uniapp", link: "/uniapp/index" }],
      },
      {
        text: "Python",
        items: [
          { text: "Python基础", link: "../python/py_base.md" },
          { text: "Flask", link: "../flask/index" },
          { text: "Django", link: "../django/index" },
        ],
      },
    ],
    sidebar: {
      "/base/": [
        {
          text: "目录",
          collapsed: false,
          items: [
            { text: "HTML", link: "/base/b-html" },
            { text: "CSS", link: "/base/b-css" },
            { text: "JS - 基础知识", link: "/base/b-js" },
            { text: "JS - 数据类型", link: "/base/b-js_dataType" },
            { text: "JS - 对象", link: "/base/b-js_object" },
            { text: "JS - 函数进阶", link: "/base/b-js_fun_advance" },
            { text: "JS - 原型、继承", link: "/base/b-js_proto" },
            { text: "JS - 类", link: "/base/b-js_class" },
            { text: "JS - Promise", link: "/base/b-js_promise" },
            { text: "DOM", link: "/base/b-dom" },
            { text: "BOM", link: "/base/b-bom" },
          ],
        },
        {
          text: "扩展",
          collapsed: false,
          items: [
            { text: "正则", link: "/base/b-reg" },
            { text: "HTTP", link: "/base/b-http" },
            { text: "Git", link: "/base/b-git" },
            { text: "性能优化", link: "/base/b-performance" },
            { text: "浏览器相关", link: "/base/b-browser" },
            { text: "JS 垃圾回收", link: "/base/b-js_recycle_rubbish" },
          ],
        },
      ],
      "/python/": [
        {
          text: "目录",
          items: [
            { text: "1. Python 简介", link: "/python/py_base" },
            { text: "2. 变量和简单数据类型", link: "/python/py_variable" },
            { text: "3. 列表", link: "/python/py_list" },
            { text: "4. 操作列表", link: "/python/py_list_handle" },
            { text: "5. if 语句", link: "/python/py_if" },
            { text: "6. 字典", link: "/python/py_dic" },
            { text: "7. 用户输入和while 循环", link: "/python/py_while" },
            { text: "8. 函数", link: "/python/py_fun" },
            { text: "9. 类", link: "/python/py_class" },
            { text: "10. 文件和异常", link: "/python/py_file_exception" },
          ],
        },
      ],
      "/advance/es6": [
        {
          text: "目录",
          items: [
            { text: "1. ES6 简介", link: "/advance/es6/index" },
            { text: "2. let 和const", link: "/advance/es6/2" },
            { text: "3. 解构赋值", link: "/advance/es6/3" },
            { text: "4. 字符串的扩展", link: "/advance/es6/4" },
            { text: "5. 字符串的新增方法", link: "/advance/es6/5" },
            { text: "14. Set 和Map 数据结构", link: "/advance/es6/14" },
            { text: "15. Proxy", link: "/advance/es6/15" },
            { text: "16. Reflect", link: "/advance/es6/16" },
          ],
        },
      ],
      "/uniapp/": [
        {
          text: "目录",
          items: [
            { text: "1. 简介", link: "/uniapp/index" },
            { text: "2. 生命周期", link: "/uniapp/lifetime" },
          ],
        },
      ],
    },
  },
};
