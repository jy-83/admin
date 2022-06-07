<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-07 09:47:10
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-07 10:32:39
 * @FilePath: /admin/src/components/uniapp/src/button/button3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="button6">
    <button class="btnStyle1">固定在底部</button>
    <button class="btnStyle2">固定在底部</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.button6 {
  padding: $distance-medium $distance;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $color-white;
  z-index: 111;
  button {
    height: 40px;
    outline: none;
    border: none;
    width: calc(50% - 8px);
    border-radius: 20px;
  }
  .btnStyle1 {
    border: 1px solid $color;
    color: $color;
    background-color: transparent;
  }
  .btnStyle2 {
    background-color: $color;
    color: $color-white;
  }
}
</style>
