<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-07 09:30:24
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-07 09:56:39
 * @FilePath: /admin/src/components/uniapp/src/button/button1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="button2">
    <button>按钮</button>
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
.button2 {
  padding: $distance-medium $distance;
  button {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: transparent;
    outline: none;
    border: 1px solid $color;
    color: $color;
  }
}
</style>
