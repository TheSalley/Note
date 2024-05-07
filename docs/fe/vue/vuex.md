# Vuex

## 1、Vuex 的原理

专门为 Vue 设计的状态管理库。Vuex 的核心是`store`，即仓库，它包含着 Vue 应用的状态`state`。

- Vuex 中的状态存储是响应式的。当 Vue 组件从`store` 中读取状态时，若`store` 中的`state`发生改变，那么相应的组件也会更新。

- 改变`store` 中的`state` 的唯一方法就是显式地提交(`commit`) 给`mutations`。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edaa07ce4b9a41ee975fd81ee8c3268f~tplv-k3u1fbpfcp-watermark.image?)

## 2、Vuex 有哪几种属性？

1. `state` => 数据源

2. `getters` => 从数据源派生的数据

3. `mutations` => 提交更改数据的方法，同步

4. `actions` => 像一个装饰器，包裹`mutations`,使之可以异步

5. `modules` => 模块化 Vuex

## 3、Vuex 和 localStorage 的区别？

1. 存储地点不同

   - Vuex 存储在内存中

   - localStorage 则以文件的形式存储在本地

2. 永久性

刷新页面时 Vuex 存储的值会丢失，而 localStorage 不会

3. 应用场景

- Vuex 集中式存储组件的状态，用于组件之间传值。

- localStorage 是本地存储，可用于同一浏览器相同协议、域名、端口下跨页面传递数据。一般前端使用存储一些不经常变的信息。

## 代码实现

```javascript
// Vuex
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    dbCount(state, getters) {
        return state.count * 2
    }
  },
  mutations: {
    increment(state, payload = { num: 0 }) {
      state.count + payload.num;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", { num: 10 });
    },
  },
});
// 页面使用
this.$store.state.count;
this.$store.getters.dbCount;
this.$store.commit("increment");
this.$store.dispatch("increment");
// map辅助函数
computed: {
  ...mapState(["count"]);
  ...mapState({ countAlias: "count" });
  ...mapGetters(["dbCount"]);
  ...mapGetters({ dbCountAlias: "dbCount" });
},
methods: {
    ...mapMutations(["increment"]);
    ...mapMutations({ add: "increment" });
    ...mapActions(["increment"]);
    ...mapActions({add: "increment"});
}

// 模块化
const moduleA = {
    namespaced: true,
    state:() => ({})
    ...
}
const moduleB = {
    state:() => ({})
    ...
}
const store = createStore({
    modules: {
        a: moduleA,
        b: moduleB,
    }
})
```
