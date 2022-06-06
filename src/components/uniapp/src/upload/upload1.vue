<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-06 11:34:20
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-06 14:44:20
 * @FilePath: /admin/src/components/uniapp/src/upload/upload1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="upload1">
    <div class="title">
      <span class="text">上传行驶证</span>
    </div>
    <div class="bottom">
      <div class="item">
        <div class="imgBox">
          <img src="@/assets/img/shan1.png" alt="" />
        </div>
        <div class="tip">行驶证正面</div>
      </div>
      <div class="item">
        <div class="imgBox">
          <img src="@/assets/img/shan1.png" alt="" />
        </div>
        <div class="tip">行驶证副本</div>
      </div>
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
.upload1 {
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
    display: flex;
    justify-content: space-between;
    .item {
      width: calc(50% - 5px);
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
}
</style>
