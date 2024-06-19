# HTML

## 1、简介

超文本标记语言（HyperText Markup Language, 简称：HTML）是一种用来结构化Web 网页及其内容的标记语言。

是一种用于创建网页的标准标记语言

HTML 使用各种标签来描述网页的结构和内容，包括文字、图像、超链接等。通过将标记嵌入到文本中，网页开发者可以定义文本的格式、颜色、大小和其他样式，从而创建具有各种视觉和功能特性的网页。

:::tip
HTML 不是编程语言
:::

示例：
![grumpy-cat-small.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/811c739fc07e432596562cedec266fd9~tplv-k3u1fbpfcp-watermark.image?)

元素的构成有：
+ 开始标签
+ 结束标签
+ 内容
+ 元素
+ 属性

### HTML 文档

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

+ `<!DOCTYPE html>` ：声明文档类型
+ `<html></html>` : 根元素
+ `<head></head>` : 该元素的内容对用户不可见，其中包含`meta`、`style` 等 
+ `<body></body>` : 用户访问页面时看到的内容

## 2、前端需要注意的SEO

+ 合理的`title`、`description`、`keywords`

    搜索引擎对三者的权重逐次减小。

    `title` 要强调重点，`keywords` 关键词不要超过两次，要靠前；不同页面的`title` 要有所不同。

    `description` 把页面内容高度概括，长度合适，不可过分堆砌关键词；不同页面的`description` 有所不同。

    `keywords` 列举出重要关键词。

+ 2、语义化的`HTML` 代码，符合`W3C` 规范

    语义化代码能让搜索引擎更容易理解网页。

    常见的语义化标签：
    ```html
    <header></header>  头部
    <nav></nav>  导航栏
    <section></section>  区块（有语义化的div）
    <main></main>  主要区域
    <article></article>  主要内容
    <aside></aside>  侧边栏
    <footer></footer>  底部
    ```

+ 3、重要内容`HTML` 代码放在前面

    搜索引擎抓取`HTML` 的顺序是从上到下的，有的搜索引擎对抓取长度有限制，这样做能保证重要内容被抓取。

+ 4、重要内容不要用`JavaScript` 输出

    爬虫不会执行`JS` 去获取内容。

+ 5、少用`iframe`

    搜索引擎不会抓取`iframe` 中的的内容

+ 6、非装饰性的图片必须加`alt`。

+ 7、提高网站速度

    网站速度是搜索引擎排序的一个重要指标。

## 3、`<img>` 的`title` 和`alt` 的作用

+ `title` 鼠标悬浮在元素上显示
+ `alt` 是图片内容的等价描述，用于图片无法加载时显示。除了纯装饰性图片外都必须设置有意义的值，搜索引擎会重点分析。

## 4、`src` 和`href` 的区别

`src` 和 `href` 都是用来引用外部的资源。它们的区别如下：

+ `src`

表示对资源的引用。

它指向的内容会嵌入到当前标签所在的位置。`src` 会将其指向的资源下载并应用到文档内，如请求`js` 脚本。

当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到该资源加载、编译、执行完毕。所以一般`js` 脚本会放在页面底部。

+ `href`

表示对超文本的引用。

它指向一些网络资源。

当浏览器识别到它指向的文件时，就会并行下载资源，不会停止对当前文档的处理。常会用在`a`、`link`等 标签上。

## 5、`script` 标签中`defer` 和`async` 的区别

`defer` 和`async` 属性都是去异步加载外部的JS 脚本文件，它们都不会阻塞页面的解析。

+ 执行顺序

多个带`async` 属性的标签，不能保证加载的顺序。而多个带`defer` 属性的标签，按照加载顺序执行。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e4bb7a9e77f45a1a9d387a66c3ecbd8~tplv-k3u1fbpfcp-watermark.image?)

## 6、常用的`meta` 标签

`meta` 标签由`name` 和 `content` 属性定义，用来描述网页文档的属性。

```html
    <meta charset="UTF-8"/>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
```