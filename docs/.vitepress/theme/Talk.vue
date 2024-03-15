<template>
  <div :class="['flex-box', name == 's' ? 'put-right' : '']">
    <div :class="['avator', name == 's' ? 'put-right' : '']">
      <img :src="avator" alt="头像" />
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps(["name"]);

const avator = computed(() => {
  if (props.name == "t") {
    return "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e7ea34421224ad3a9bca8dad800ba06~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=199&h=196&s=70485&e=png&b=ec7989";
  } else if (props.name == "s") {
    return "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/094b36e5cd14473483869d98f2ae02c4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=217&h=183&s=59498&e=png&b=fbfb32";
  }
});

// export default {
//   props: ["name"],
//   data() {

//   }
// };
</script>

<style>
.flex-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.put-right {
  flex-direction: row-reverse;
}

.avator {
  display: flex;
  align-items: center;
}

.avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 5px;
}

.deactive {
  visibility: hidden;
}
</style>
