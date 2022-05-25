<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-25 14:28:16
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-25 14:46:52
 * @FilePath: /admin/src/components/uniapp/src/nav/nav3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav3" :id="id">
    <span
      v-for="(item, index) in 4"
      :class="{ active: current === index }"
      :key="index"
      @click="handleClick(index)"
      >导航{{ index }}</span
    >
    <span class="border"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";

export default defineComponent({
  setup() {
    const current = ref(0);
    const id = `tab${new Date().getTime()}`;
    const handleClick = (index: number) => {
      current.value = index;
      nextTick(() => {
        getLeft();
      });
    };
    //下方border位置计算
    const getLeft = () => {
      let activeChild = document.querySelector(
        `#${id} .active`
      ) as HTMLSpanElement;
      let border = document.querySelector(`#${id} .border`) as HTMLSpanElement;
      border.setAttribute(
        "style",
        `left:${activeChild.offsetLeft}px;transform:translateX(${
          (activeChild.clientWidth - border.clientWidth) / 2
        }px)`
      );
    };
    nextTick(() => {
      getLeft();
    });
    return {
      current,
      handleClick,
      id
    };
  }
});
</script>

<style scoped lang="scss">
.nav3 {
  display: flex;
  position: relative;
  span {
    flex: 1;
    height: 41px;
    line-height: 41px;
    text-align: center;
    cursor: pointer;
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
