<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 16:10:11
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 16:17:37
 * @FilePath: /admin/src/components/uniapp/src/form/form2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="form2">
    <span class="label">内容</span>
    <textarea placeholder="请输入内容"></textarea>
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
.form2 {
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid $color-border;
  padding: $distance 0;
  margin: 0 $distance;
  .label {
    width: 100px;
  }
  textarea {
    background-color: $background;
    height: 75px;
  }
}
</style>
