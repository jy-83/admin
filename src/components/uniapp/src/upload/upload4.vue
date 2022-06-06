<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-06 15:48:06
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-06 16:02:51
 * @FilePath: /admin/src/components/uniapp/src/upload/upload4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="upload4">
    <div class="imgBox" v-for="(item, index) in 2" :key="index">
      <img src="@/assets/img/logo.svg" alt="" />
      <el-icon><CloseBold /></el-icon>
    </div>
    <div class="add">
      <el-icon><Plus /></el-icon>
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
.upload4 {
  padding: 0 $distance;
  display: flex;
  flex-wrap: wrap;
  .imgBox {
    width: 80px;
    height: 80px;
    border-radius: $radius-sm;
    overflow: hidden;
    position: relative;
    margin: $distance-medium 0;
    margin-right: $distance-medium;
    img {
      width: 80px;
      height: 80px;
      background-color: $background;
    }
    .el-icon {
      position: absolute;
      right: 5px;
      top: 5px;
      color: $color-white;
    }
  }
  .add {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    background-color: $background;
    border-radius: $radius-sm;
    margin: $distance-medium 0;
    margin-right: $distance-medium;
  }
}
</style>
