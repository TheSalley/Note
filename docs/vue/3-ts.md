# Vue3 + Ts + setup

## 1、`ref` 和`reactive`

+ `ref` 用来给基本数据类型绑定响应式数据，访问时需要通过`.value` 的形式。`template` 会自动解析，不需要加`.value`。

+ `reactive` 用来给复杂数据类型绑定响应式数据，直接访问即可。

```javascript
<template>
    <div>
        <p>{{title}}</p>
        <h4>{{userInfo}}</h4>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
type Person = {
    name: string;
    age: number;
    gender?: string;
};
const title = ref<string>("你好，世界");
const userInfo = reactive<Person>({
  name: 'Alan',
  age: 18
})
</script>
```

## 2、`toRef`、`toRefs`、`toRaw`

+ `toRef` 

如果原始对象是非响应式的，那么数据会变，但不会更新视图。

响应式数据经过toRef返回的值仍具有响应性，非响应式数据经过toRef返回的值仍没有响应性。

```javascript
<template>
  <div>
    <button @click="change">按钮</button>
    {{state}}
  </div>
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue'

const obj = reactive({
  name: 'Alan',
  age: 18
})

const obj1 = reactive({
  name: 'Alan1',
  age: 19
})

const state = toRef(obj, 'age')
const state1 = toRef(obj1, 'age')

const change = () => {
  state.value++
  state1.value++
  console.log('state:', state, 'state1:', state1); // 19 20
}
</script>
```

+ `toRefs`

相当于对对象内每个属性调用`toRef`，`toRefs` 返回的对象内的属性使用时需要加`.value`。

```javascript
<template>
  <div>
    <button @click="change">按钮</button>
    name--{{name}}---age{{age}}
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const obj = reactive({
  name: 'Alan',
  age: 18
})

let { name, age } = toRefs(obj)

const change = () => {
  age.value++
  name.value = 'Turing'
}
</script>
```

+ `toRaw`

将响应式对象修改为普通对象。

数据能变化，视图不变化(失去响应式)。

```javascript
<template>
  <div>
    <button @click="change">按钮</button>
    {{data}}
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue'

const obj = reactive({
  name: 'Alan',
  age: 18
})

const data = toRaw(obj)

const change = () => {
  data.age = 19
}
</script>
```

## 3、`computed`、`watch`、`watchEffect`

+ `computed`

```javascript
<template>
  <div>
    <p>{{title}}</p>
    <h4>{{userInfo}}</h4>
    <h1>{{add}}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,computed } from "vue";
const count = ref(0)

// 推导得到的类型：ComputedRef<number>
const add = computed(() => count.value +1)

</script>
```

+ `watch`

当 watch 监听的是一个响应式对象（`reactive`）时，默认开启 deep：true。

监听reactive定义的 引用数据，需要自己开启`deep: true`深度监听。

```javascript
<script setup lang="ts">
import { ref, reactive, watch } from "vue";

const str = ref('你好')
let name = ref('Alan')
let age = ref(18)
let info = reactive({
  name: 'Alan',
  age: 18
})

// 3s后改变str的值
setTimeout(() => { str.value = '大家好' }, 3000)

watch(str, (newV, oldV) => {
  console.log(newV, oldV) // 大家好 你好
})

// 3s后改变值
setTimeout(() => {
  name.value = '我叫Alan'
  age.value = 19
}, 3000)

watch([name, age], (newV, oldV) => {
  console.log(newV, oldV) // ['我叫Alan', 19]  ['Alan', 18]
})

//3s后改变值
setTimeout(() => {
  info.age = 19
}, 3000)

watch(info, (newV, oldV) => {
  console.log(newV, oldV) // { name: 'Alan', age: 19 } { name: 'Alan', age: 18 }
})
// 监听某一属性
watch(()=>info.age, (newV, oldV) => {
  console.log(newV, oldV) // 19 18
})
</script>
```

+ `watchEffect`

会立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。

当 `watchEffect` 在组件的 `setup()` 函数或生命周期钩子被调用时，侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。

```javascript
<script setup lang="ts">
import { ref, watchEffect } from "vue";

let num = ref(0)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect(() => {
  console.log('num 值改变：', num.value) // 第一次打印num 值改变：0 再次打印num 值改变：1
})

</script>
```

`watchEffect` 的第一个参数——`effect`函数——可以接收一个参数：叫`onInvalidate`，也是一个函数，用于清除 `effect` 产生的副作用。第二个参数，用来定义副作用刷新时机。

`flush`（更新时机）：

1. pre：组件更新前执行
2. sync：强制效果始终同步触发
3. post：组件更新后执行

```javascript
<script setup lang="ts">
import { ref, watchEffect } from "vue";

let num = ref(0)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect((onInvalidate) => {
  console.log(num.value)
  onInvalidate(() => {
    console.log('执行');
  });
}, {
  flush: "post", // 此时这个函数会在组件更新之后去执行
  onTrigger(e) { // 作为一个调试工具，可在开发中方便调试
    console.log('触发', e);
  },
})
</script>
```

## 4、生命周期

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5c4d9c9bba54528a478a894f2cb2111~tplv-k3u1fbpfcp-watermark.image?)

## 5、父子组件传参

+ `defineProps`

父组件传参

```javascript
<template>
  <Children :msg="msg" :list="list"></Children>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Children from './Children.vue'

const msg = ref('hello')
const list = reactive<number[]>([1, 2, 3])
</script>
```
子组件接收

```javascript
<template>
  <div>
    <p>msg：{{msg}}</p>
    <p>list：{{list}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string,
  list: number[]
}>()
</script>
```
使用`withDefaults` 定义默认值

```javascript
<template>
  <div>
    <p>msg：{{msg}}</p>
    <p>list：{{list}}</p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  msg?: string,
  list?: number[]
}

// withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项
withDefaults(defineProps<Props>(), {
  msg: 'world',
  list: () => [4, 5, 6]
})
</script>
```

+ `defineEmits`

子组件派发事件

```javascript
<template>
  <div>
    <p>msg：{{msg}}</p>
    <p>list：{{list}}</p>
    <button @click="onChangeMsg">改变msg</button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  msg?: string,
  list?: number[]
}

withDefaults(defineProps<Props>(), {
  msg: 'Alan',
  list: () => [4, 5, 6]
})

const emits = defineEmits(['changeMsg'])
const onChangeMsg = () => {
emits('changeMsg','Jack')
}
</script>
```
子组件绑定了一个点击事件，然后通过`defineEmits` 注册了一个自定义事件。点击按钮时，触发`emit` 调用我们注册的事件，传递参数。

父组件接收

```javascript
<template>
  <Children :msg="msg" :list="list" @changeMsg="changeMsg"></Children>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Children from './Children.vue'

const msg = ref('hello')
const list = reactive<number[]>([1, 2, 3])

const changeMsg = (v: string) => {
  msg.value = v
}
</script>
```

+ `defineExpose`

子组件

```javascript
<template>
  <p>{{name}}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('张麻子')
const changeName = () => {
  name.value = '县长'
}
// 将方法、变量暴露给父组件使用，父组件才可通过 ref API拿到子组件暴露的数据
defineExpose({
  name,
  changeName
})
</script>
```

父组件

```javascript
<template>
  <div>
    <child ref='childRef' />
    <button @click="getName">获取子组件中的数据</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import child from './Child.vue'

// 子组件ref（TypeScript语法）
const childRef = ref<InstanceType<typeof child>>()

const getName = () => {
  // 获取子组件name
  console.log(childRef.value!.name)
  // 执行子组件方法
  childRef.value?.changeName()
  // 获取修改后的name
  console.log(childRef.value!.name)
}
</script>
```

## 6、插槽

```javascript
<template>
  <div>
    <p style="color:red">父组件</p>
    <Child>
      <template  #content="{ msg }">
        <div>{{ msg }}</div>
      </template>
    </Child>
  </div>
</template>

<script lang="ts" setup>
import Child from './Child.vue'
</script>
```

## 7、异步组件

```javascript
<template>
  <Children :msg="msg" :list="list" @changeMsg="changeMsg"></Children>
</template>

<script setup lang="ts">
import { ref, reactive,defineAsyncComponent } from 'vue'
// import Children from './Children.vue'
const Children = defineAsyncComponent(() => import('./Children.vue'))
</script>
```

## 8、Suspense

`Suspense` 允许应用程序在等待异步组件时渲染一些其他内容。

它是一个带插槽的组件，只是它的插槽指定了`default` 和`fallback` 两种状态。 

```javascript
<template>
  <Suspense>
    <template #default>
      <!-- 异步组件-默认渲染的页面 -->
      <Children :msg="msg" :list="list" @changeMsg="changeMsg"></Children>
    </template>
    <template #fallback>
      <!-- 页面还没加载出来展示的页面 -->
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
const Children = defineAsyncComponent(() => import('./Children.vue'))
</script>
```

## 9、Teleport

`Teleport` 是一种能够将模板渲染到指定的DOM 节点，不受父级`style`、`v-show` 等属性影响，但`data`、`props` 数据依旧能够共用的技术。

```javascript
<template>
  <!-- 插入至 body -->
  <Teleport to="body">
    <Children></Children>
  </Teleport>
  <!-- 默认 #app 下 -->
  <Children></Children>
</template>
<script lang="ts" setup>
import Children from './Children.vue'
</script>
```