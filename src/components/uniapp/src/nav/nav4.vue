<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-25 14:49:36
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-25 15:38:14
 * @FilePath: /admin/src/components/uniapp/src/nav/nav4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav4 scrollY scroll" :id="id">
    <span class="border"></span>
    <span
      v-for="(item, index) in 10"
      :class="{ active: current == index }"
      :key="index"
      @click="handleClick($event, index)"
      >导航{{ index }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";

export default defineComponent({
  setup() {
    const current = ref(0);
    const id = `tab${new Date().getTime()}`;
    const handleClick = (e: any, index: number) => {
      current.value = index;
      e.target.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
      nextTick(() => {
        getTop();
      });
    };
    const getTop = () => {
      let activeChild = document.querySelector(
        `#${id} .active`
      ) as HTMLSpanElement;
      let border = document.querySelector(`#${id} .border`) as HTMLSpanElement;
      border.setAttribute(
        "style",
        `top:${activeChild.offsetTop}px;transform:translateY(${
          (activeChild.clientHeight - border.clientHeight) / 2
        }px)`
      );
    };
    nextTick(() => {
      getTop();
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
.nav4 {
  width: 85px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  position: relative;
  span {
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    &.active {
      color: $color;
    }
  }
  .border {
    position: absolute;
    width: 4px;
    height: 25px;
    background-color: $color;
    left: 0;
    border-radius: 2px;
    transition-duration: 300ms;
  }
}
</style>
