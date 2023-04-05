# Webpack

## 1、学习目标

1. `Webpack` 基础，都含有哪些内容。

2. `Webpack` 高级优化设置，提升项目打包和运行时性能。

3. 能从零开始搭建一个项目脚手架，并进行优化。

4. `Loader`、`Plugin` 原理。

## 2、前言

- 为什么需要打包工具

  在开发过程中，我们会使用框架(`React`、`Vue`)、`ES6` 语法、`CSS` 预处理器进行开发。

  这就需要打包工具将它们编译为浏览器能识别的`JS`、`CSS`。此外，打包工具也能压缩代码、做兼容性处理、提升代码性能。

- 常见的打包工具

  `Webpack`、`Vite`、`Rollup`、`Parcel`、`Grunt`、...

## 3、`Webpack` 介绍

`Webpack` 是一个**静态资源打包工具**。

它会以一个或多个文件作为打包入口，将整个项目所有文件编译组合成一个或多个文件进行输出。

输出的文件叫做`bundle`。

> 功能介绍

- 开发模式

  仅能编译`JS` 中的`ES Module` 语法。

- 生产模式

  能编译`JS` 中的`ES Module` 语法，还能压缩`JS` 代码。

## 4、五大核心概念

- `entry`：入口

- `output`：输出

- `loader`：加载器

- `plugins`：扩展插件

- `mode`：模式

## 5、处理`CSS` 资源

```shell
npm i css-loader style-loader  -D
```

```javascript
rules: [
  {
    test: /\.css$/,
    use: [
      "style-loader", // 将js 中的css 通过创建style 标签的方式添加到html 中
      "css-loader" // 将css 编译成commonjs 的模块到js中
    ], // 执行顺序: 从后往前
  },
],
```

## 6、处理`less` 资源

```shell
npm i less less-loader -D
```

```javascript
{
  test: /\.less$/,
  // loader: "xxx" 只能使用一个
  use: ["style-loader", "css-loader", "less-loader"],
},
```

## 7、处理图片资源

`webpack4` 使用`file-loader`、`url-loader` 处理图片资源。

`webpack5` 内置了这两个`loader`。

```javascript
{
  test: /\.(png|jpe?g|gif|webp|svg)/,
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: 100 * 1024, // 100kb
    },
  },
  generator: {
    filename: "static/images/[hash:10][ext][query]"
  }
},
```

## 8、自动清空上次打包结果

```javascript
output: {
  path: path.resolve(__dirname, "dist"), // 绝对路径
  filename: "static/js/build.js",
  clean: true,
},
```

## 9、处理字体图标资源

```javascript
{
  test: /.(ttf|woff2?)$/,
  type: "asset/resource", // 不会转base64
  generator: {
    filename: "static/media/[hash:10][ext][query]",
  },
},
```

## 10、处理其他资源

处理音视频等资源。

```javascript
{
  test: /\.(mp3|mp4|avi)$/,
  type: "asset/resource",
  generator: {
    filename: "static/media/[hash:10][ext][query]",
  },
},
```

## 11、处理`js` 资源

`Webpack` 只能编译`ES` 模块化语法。

- 针对代码格式，使用`Eslint`。
- 针对`js` 兼容性处理，使用`babel`。

### `Eslint`

可组装的`js` 和`jsx` 检查工具。

```shell
npm i eslint-webpack-plugin eslint -D
```

`.eslintrc.js` 文件

```javascript
module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node 中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "no-var": 2, // 不能使用var 定义变量
  },
};
```

### `Babel`

将`js` 高级语法转换为向后兼容的语法。

```shell
npm i babel-loader @babel/core @babel/preset-env -D
```

```javascript
{
  test: /.js$/,
  exclude: /node_modules/,
  // use: {
  loader: "babel-loader",
  // options: {
  //   preset: ["@babel/preset-env"]
  // }
  // }
},
```

`.babel.config.js` 文件。

```javascript
module.exports = {
  presets: ["@babel/preset-env"],
};
```

## 12、处理`html` 资源

```shell
npm i html-webpack-plugin -D
```

```javascript
new HtmlWebpackplugin({
  template: path.resolve(__dirname, "public/index.html"),
});
```

## 13、搭建开发服务器

开发服务器不会有输出，因为是在内存中编译打包。

```shell
npm i webpack-dev-server -D
```

```javascript
devServer: {
  host: "127.0.0.1",
  port: "8888",
  open: true,
},
```

```shell
npx webpack server
```
