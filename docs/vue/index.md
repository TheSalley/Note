# Vue 

## 1、生命周期

| Vue2 | Vue3 | 描述 |
| --- | :---: | --- |
| beforeCreate | - |  实例创建前 |
| created | - | 实例创建后 |
| beforeMount | onBeforeMount | DOM  挂载前调用 |
| mounted | onMounted | DOM挂载完成调用 |
| beforeUpdate | onBeforeUpdate | 数据更新之前调用 |
| updated | onUpdated | 数据更新后调用 |
| beforeDestroy | onBeforeUnmount | 组件销毁前调用 |
| destroted | onUnmounted | 组件销毁完成调用 |

> 流程图
    
![](../imgs/vue/lifecycle.png)

## 2、语法

+ 插值表达式

+ 指令

    + `v-text`
    + `v-html`
    + `v-on` 支持修饰符
    + `v-bind`
    
+ computed 和 watch
    
    + `computed` 是计算属性，用于当一个元素受到多个元素影响的情况。
    + `watch` 是侦听器，用于对某个属性变化需要做出一些处理的时候使用。
    + `computed` 有缓存。
    + `watch` 在页面首次加载时不执行，需要设置立即监听才会执行。设置深度监听才会监听多层级属性变化。

+ class 和 style 绑定

+ 条件渲染（`v-if`）、列表渲染（`v-for`）  

    1. `v-show` 和 `v-if` 的区别

        + `v-show` 通过控制DOM 元素的display 属性，而`v-if` 则是DOM 元素是否创建。
        + 频繁切换状态的地方使用`v-show` 较好。
    2. `v-if` 和 `v-for` 的优先级

        + Vue2 中`v-for` 的优先级更高，同时使用的话会先循环、再判断，导致无论是否需要展示某元素，都会先遍历整个数组。
        + Vue3 中`v-if` 的优先级会更高，同时使用的话会报错。因为`v-if` 先执行的时候还没有拿到这个数组。

+ 表单输入绑定

    + `v-model`

## 3、概念

+ 组件

+ 插槽

+ 插件

+ mixin

+ 深入响应式原理

+ 不同构建版本的Vue

## 4、Vue2 和 Vue3 的区别

+ 写法上：

    + Vue2 采用 `options Api`，Vue3 则是 `composition Api`。

    `options Api` 中`methods`、`data`等都是分散的。而 `composition Api`中根据逻辑功能来组织，我们可以将一个功能所定义的`methods`、`data`等会放在一起。

    + Vue2 中响应式数据放在 `data` 函数里,Vue3 使用`ref`和 `reactive` 将数据声明为响应式。

+ 响应式原理：

    + Vue2 是通过`Object.defineProperty` 对数据进行劫持实现。而Vue3 是通过使用`Proxy` 对数据代理实现的。

+ 生命周期：

    + Vue3 将`beforeCreate` 和 `created` 合并到了`setup` 函数里。

+ 根节点：

    + Vue2 只允许有一个根节点,Vue3 不做要求。

+ 内置组件

    + Vue3 新增了传送组件`Teleport` 和异步依赖处理组件`Supense`


## 5、组件通信

| 方式 | Vue2 | Vue3 |
| --- | --- | --- |
| 父传子 | props | props |
| 子传父 | $emit | emits |
| 父传子 | $attr | attrs |
| 子传父 | $listeners | -（合并到attr） |
| 祖先传子孙 | provide/inject | provide/inject |
| 子组件访问父组件 | $parent | - |
| 父组件访问子组件 | $children | - |
| 访问组件 | $ref | ref |
| 跨组件 | EventBus | mitt |

## 6、插槽

## 7、自定义指令

## 8、nextTick

+ Vue 官方解释：

    在下次DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。

+ 理解：

    Vue 修改`data` 并不会立即触发DOM 更新，而是把需要更新的`watcher` 加入到队列中，然后在合适的时机在`nextTick`中调用这些`watcher` 的更新函数进行DOM 更新。所以在`data` 刚被修改的时候，用户是获取不到更新后的DOM 的，这时候便需要调用`nextTick` 函数获取更新后的DOM。

## 9、Vue 原理

当一个Vue 实例被创建时，Vue 会遍历`data` 中的属性，用`Object.defineProperty`(Vue3 采用 `Proxy`)将它们转为`getter/setter`，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。

每个组件实例都有相应的`Watcher`，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的`setter` 被调用时，会通知`Watcher` 重新计算，从而导致使它关联的组件的已更新。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10631e82411948759e96d3c408409a89~tplv-k3u1fbpfcp-watermark.image?)

::: tip Vue 双向绑定数据原理
采用**数据劫持** 结合**发布-订阅**模式，通过`Object.defineProperty` 来劫持各个属性的`getter/setter`，在数组变动时发布消息给订阅者，触发相应的监听回调。
:::

1. 对需要`observe` 的数据对象递归遍历，包括子对象的属性，都加上`getter/setter` 。

2. `compile` 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并给每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一但数据变更，收到通知，更新视图。

3. `Watcher` 订阅者是`Observer` 和 `Compile` 之间的桥梁。它主要做：

+ 在自身实例化时往属性订阅器(`Dep`)中添加自己

+ 自身有一个`update` 方法

+ 属性变更时，`Dep.notice` 通知并调自身的`update`，触发`Compile`中绑定的回调

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32c3c03d10b2469aab200a188d5d3153~tplv-k3u1fbpfcp-watermark.image?)