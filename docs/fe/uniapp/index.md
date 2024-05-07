# uniapp

## 1、简介

`uniapp` 分**编译器**和**运行时(runtime)**

+ 编译器将开发者的代码进行编译，编译的结果由各个平台（Web、Android App、iOS App、各家小程序）的`runtime` 进行解析。

+ 编译器的条件编译

```javascript
#ifdef App
...
#endif
```


`uniapp` 开发规范：

+ 页面文件遵循`Vue 单文件(SFC) 规范`，即每个页面都是一个`.vue` 文件

+ 组件标签靠近小程序规范

+ 接口能力(JS API) 靠近小程序规范

+ 数据绑定、事件处理遵循`Vue` 规范，同时补充了`App` 和页面的生命周期