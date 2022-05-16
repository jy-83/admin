<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 17:18:29
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 17:23:59
 * @FilePath: /admin/src/components/uniapp/src/title/title2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title2">
    <span class="text">我是标题</span>
    <div class="more">
      <span class="tip">更多</span>
      <el-icon><ArrowRightBold /></el-icon>
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
.title2 {
  display: flex;
  align-items: center;
  padding: $default;
  justify-content: space-between;
  .text {
    font-size: $font-lg;
    color: $color-title;
    font-weight: 500;
  }
  .more {
    display: flex;
    align-items: center;
    .tip {
      color: $color-tip;
    }
    .el-icon {
      color: $color-tip;
    }
  }
}
</style>
