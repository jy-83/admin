<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-10 13:48:16
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-10 13:48:23
 * @FilePath: /admin/src/components/uniapp/src/search/search2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="search2">
    <el-icon><Search /></el-icon>
    <input type="text" placeholder="搜索" />
    <button>搜索</button>
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
.search2 {
  margin: $distance-medium $distance;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1px solid $color;
  box-sizing: border-box;
  .el-icon {
    margin: 0 $distance-medium;
  }
  input {
    flex: 1;
  }
  button {
    width: 75px;
    height: 30px;
    background-color: $color;
    color: $color-white;
    outline: none;
    border: none;
    border-radius: 15px;
  }
}
</style>
