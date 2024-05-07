# 微信小程序

## 1、小程序与网页开发的区别

+ 小程序中不能用HTML
+ 小程序中可以用CSS
+ 小程序的主要开发语言是JavaScript，但DOM 和BOM 在小程序中不可用
+ 小程序的运行环境与网页开发不同，网页开发的运行环境是浏览器，但微信小程序的运行环境是微信客户端

## 2、小程序的运行环境

> ios

渲染层：WKWebView

逻辑层： JSCore

> Android

渲染层： Chromium

逻辑层： V8

## 3、生命周期

> 小程序的生命周期

+ onLaunch

小程序启动（全局只调用一次）

+ onShow

初始化完成，从后台切换到前台

+ onHide

从前台切换到后台

> 页面的生命周期

+ onLoad

页面加载（一次）

+ onShow

页面显示（切前台）

+ onReady

页面就绪（一次）

+ onHide

页面隐藏（切后台）

+ onUnload

页面卸载（一次）

## 4、WXML 模板

```javascript
    // 声明模板
    <template name="test"></template>

    // 调用模板
    <import src="./xxx.wxml"></import>
    <template is="test" data="{{mydata}}">
```

## 5、常用api

+ `wx.setTabBarBadge` 设置tabbar 右上角文本

+ `wx.removeTabBarBadge` 移除tabbar 右上角文本

```javascript
    // 父
    <view slot="test"></view>

    // 子
    <slot name="test"></slot>

    多插槽需配置

    observers 监听器

    //    1.触发事件 2. 直接调用引用该 WXS 的页面或者组件的方法。
    ownerInstance.callMethod('handleTouchMove', { direction: direction })
