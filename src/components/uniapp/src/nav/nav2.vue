<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-17 11:10:29
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-17 15:10:30
 * @FilePath: /admin/src/components/uniapp/src/nav/nav2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav2">
    <span
      class="item"
      v-for="(item, index) in 10"
      :class="{ active: current == index }"
      :key="index"
      >导航{{ index }}</span
    >
    <span class="border"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const current = ref(0);
    return {
      current
    };
  }
});
</script>

<style scoped lang="scss">
.nav2 {
  display: flex;
  align-items: center;
  height: 41px;
  overflow-x: auto;
  position: relative;
  .item {
    padding: 0 15px;
    white-space: nowrap;
    &.active {
      color: $color;
    }
  }
  .border {
    position: absolute;
    width: 20px;
    transition-duration: 300ms;
    height: 3px;
    background-color: rgb(60, 156, 255);
    bottom: 3px;
    left: 0;
    border-radius: 2px;
  }
}
</style>
