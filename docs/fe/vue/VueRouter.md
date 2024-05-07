# VueRouter

[[toc]]

## 1、简介

功能：

+ 嵌套路由映射
+ 动态路由选择
+ 模块化、基于组件的路由配置
+ 路由参数、查询、通配符
+ 过渡效果
+ 自动激活CSS 类的链接
+ HTML5 history 模式或hash 模式
+ 可定制的滚动行为

## 2、简单使用

```html
<!-- 使用router-link 组件进行导航 -->
<!-- 通过to 来指定地址 -->
<router-link to="/">Go to Home</router-link>
<router-link to="/about">Go to About</router-link>
<!-- 路由出口，匹配到的组件将渲染到这里-->
<router-view></router-view>
```

```javascript
// 1. 定义路由组件
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
```

## 1、为什么在Vue 实例注册 router 

这样做会为Vue 实例注入`$route`、`$router`

## 2、动态路由

```javascript
    const routes = [
        {
            path: '/user/:id',
            component: User,
            // 布尔模式 当props 为true 时，route.params 将被设置为组建的props
            props: true
        }
    ]
```

获取动态路由信息：

```javascript
    {{ $route.params.id }}
    // 在组件里请确保添加一个与路由参数完全相同的 prop 名
    {{ id }}
```

## 3、嵌套路由

```javascript
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        // Index 将被渲染到 Layout 的 <router-view> 内部
        path: '',
        component: Index,
      },
      {
        // Detail 将被渲染到 Layout 的 <router-view> 内部
        path: 'detail/:id',
        component: Detail,
      },
    ],
  },
]
```

## 4、编程式导航

```javascript
    // path 和params 不能同时用
    this.$router.push() 
    // 无记录
    this.$router.replace()
    // 横跨历史
    this.$router.go()
```

## 5、hash 和 history 的区别

1. hash 带# 号，基于onhashchange 事件
2. history  基于HTML5 的history API实现
    + history.pushState()
    + history.replaceState()
3. history 需要服务端支持
    + 如express 需要引入connect-history-api-fallback
    + nginx
    ```shell
    # 启动
    start nginx.exe
    # 重启
    nginx.exe -s reload
    # 停止
    nginx.exe -s stop
    # 设置history 模式
    location / {
        root html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    ```
## 6、VueRouter实现原理

> Hash 模式

+ URL 中 # 后面的内容作为路径地址
+ 监听 hashchange 事件
+ 根据当前路由地址找到对应组件重新渲染

> History 模式

+ 通过history.pushState()放啊改变地址栏
+ 监听 popstate 事件
+ 根据当前路由地址找到对应组件重新渲染