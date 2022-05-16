<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 17:00:02
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 17:18:14
 * @FilePath: /admin/src/components/uniapp/src/title/title1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title1">
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
.title1 {
  display: flex;
  align-items: center;
  padding: $default;
  .text {
    font-size: $font-lg;
    color: $color-title;
    font-weight: 500;
  }
}
</style>
