# 面试

## 1、图片懒加载

懒加载：顾名思义，即在当前网页中，滑动页面到能看到图片的时候再加载图片。

> 问题拆分：

+ 如何判断图片出现在当前窗口处
+ 如何加载图片

> 解决方案

1. 位置计算 + 滚动事件 + dataset

使用clientTop、offsetTop、clientHeight、scrollTop

window.scroll

先用data-src存放真实地址，需要记载时付给图片的src

2. getBoundingClientRect + scroll + throttle + dataset

3. IntersectionObserver

能够监听元素是否到了当前视口的api

## 2、浏览器实现剪切板

clipboard-copy

