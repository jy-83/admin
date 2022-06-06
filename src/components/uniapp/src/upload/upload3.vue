<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-06 14:42:08
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-06 14:47:58
 * @FilePath: /admin/src/components/uniapp/src/upload/upload3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="upload3">
    <div class="title">
      <span class="text">上传附件</span>
    </div>
    <div class="bottom">
      <div class="imgBox">
        <img src="@/assets/img/shan1.png" alt="" />
      </div>
      <div class="tip">附件</div>
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
.upload3 {
  margin: $distance-medium $distance;
  background-color: $color-white;
  padding: $distance $distance-medium;
  border-radius: $radius-sm;
  .title {
    padding-bottom: $distance;
    color: $color-title;
    .text {
      font-size: $font-lg;
      font-weight: 500;
    }
  }
  .bottom {
    .imgBox {
      border: 1px dashed $color-border;
      border-radius: $radius-sm;
      img {
        width: 100%;
      }
    }
    .tip {
      text-align: center;
      color: $color-title;
      padding-top: $distance-medium;
    }
  }
}
</style>
