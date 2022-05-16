<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 16:23:52
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 16:29:57
 * @FilePath: /admin/src/components/uniapp/src/form/form3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="form3">
    <span class="label">选项</span>
    <span class="content">内容</span>
    <el-icon><ArrowRightBold /></el-icon>
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
.form3 {
  display: flex;
  align-items: center;
  padding: $default 0;
  margin: 0 $default;
  border-bottom: 1px solid $color-border;
  .label {
    flex-shrink: 0;
    width: 100px;
  }
  .content {
    flex: 1;
    text-align: right;
    color: $color-tip;
  }
  .el-icon {
    color: $color-tip;
  }
}
</style>
