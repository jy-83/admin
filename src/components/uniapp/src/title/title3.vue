<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-06 11:06:44
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-06 11:14:09
 * @FilePath: /admin/src/components/uniapp/src/title/title3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title3">
    <span class="text">我是标题</span>
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
.title3 {
  padding: $distance;
  display: flex;
  align-items: center;
  .text {
    font-size: $font-lg;
    color: $color-title;
    font-weight: 500;
    position: relative;
    padding-left: $distance-medium;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background-color: $color;
    }
  }
}
</style>
