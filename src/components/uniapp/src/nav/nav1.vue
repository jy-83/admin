<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-17 10:25:10
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-17 10:50:02
 * @FilePath: /admin/src/components/uniapp/src/nav/nav1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav1">
    <div class="item">
      <el-icon class="leftIcon"><Stamp /></el-icon>
      <span class="label">健康档案</span>
      <el-icon class="rightIcon"><ArrowRightBold /></el-icon>
    </div>
    <div class="item">
      <el-icon><InfoFilled /></el-icon>
      <span class="label">我的发帖</span>
      <el-icon class="rightIcon"><ArrowRightBold /></el-icon>
    </div>
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
.nav1 {
  background-color: $color-white;
  border-radius: $radius-medium;
  margin: $distance-medium $distance;
  padding: 0 $distance-medium;
  .item {
    display: flex;
    align-items: center;
    padding: $distance 0;
    .label {
      margin-left: $distance-sm;
      margin-right: auto;
    }
    .rightIcon {
      color: $color-tip;
    }
    & + .item {
      border-top: 1px solid $color-border;
    }
  }
}
</style>
