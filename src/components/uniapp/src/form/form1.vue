<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 14:27:46
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 16:14:17
 * @FilePath: /admin/src/components/uniapp/src/form/form1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="form1">
    <span class="label">姓名</span>
    <input type="text" placeholder="请输入内容" />
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
.form1 {
  margin: 0 $distance;
  padding: $distance 0;
  .label {
    flex-shrink: 0;
    width: 100px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    text-align: right;
  }
  border-bottom: 1px solid $color-border;
}
</style>
