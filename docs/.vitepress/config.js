module.exports = {
  title: "Learn Note",
  lang: "en-US",
  description: "学习笔记",
  base: "/note",
  outDir: "../build",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/641ad29515da4786a74d943a931ef25c~tplv-k3u1fbpfcp-watermark.image",
      },
    ],
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer",
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
          { text: "ES6", link: "/advance/es6/" },
          { text: "数据结构与算法", link: "/advance/dataStructure_algorithm/" },
          { text: "webpack", link: "/webpack/index" },
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
            { text: "网络请求", link: "/base/b-request" },
            { text: "在浏览器中存储数据", link: "/base/b-store" },
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
            { text: "5. 元组", link: "/python/py_turple" },
            { text: "6. if 语句", link: "/python/py_if" },
            { text: "7. 字典", link: "/python/py_dic" },
            { text: "8. 用户输入和while 循环", link: "/python/py_while" },
            { text: "9. 函数", link: "/python/py_fun" },
            { text: "10. 类", link: "/python/py_class" },
            { text: "11. 文件和异常", link: "/python/py_file_exception" },
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
      "/advance/dataStructure_algorithm": [
        {
          text: "目录",
          items: [
            {
              text: "4. 栈",
              link: "/advance/dataStructure_algorithm/4",
            },
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
      "/interview/": [
        {
          text: "目录",
          items: [
            { text: "1.简介", link: "/interview/index" },
            { text: "2.HTML", link: "/interview/html" },
            { text: "3.CSS", link: "/interview/css" },
            { text: "4.JS", link: "/interview/js" },
          ],
        },
      ],
      "/ts/": [
        {
          text: "基础",
          items: [
            { text: "1. 简介", link: "/ts/index" },
            { text: "2. 类型声明", link: "/ts/type_declare" },
            { text: "3. 类型推论", link: "/ts/type_inference" },
            { text: "4. 联合类型", link: "/ts/type_union" },
            { text: "5. 接口", link: "/ts/interface" },
            { text: "6. 数组的类型", link: "/ts/type_array" },
            { text: "7. 函数的类型", link: "/ts/type_fun" },
            { text: "8. 类型断言", link: "/ts/type_assert" },
            { text: "9. 声明文件", link: "/ts/file_declare" },
            { text: "10. 内置对象", link: "/ts/obj_inner" },
          ],
        },
        {
          text: "进阶",
          items: [
            { text: "11. 类型别名", link: "/ts/type_alias" },
            { text: "12. 字符串字面量类型", link: "/ts/type_string" },
            { text: "13. 元组", link: "/ts/turple" },
            { text: "14. 枚举", link: "/ts/enum" },
            { text: "15. 类", link: "/ts/class" },
            { text: "16. 类与接口", link: "/ts/class_interface" },
            { text: "17. 泛型", link: "/ts/generics" },
            { text: "18. 声明合并", link: "/ts/merge_declare" },
          ],
        },
      ],
    },
  },
};
