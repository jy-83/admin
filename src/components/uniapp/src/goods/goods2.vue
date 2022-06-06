<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-06 10:28:01
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-06 11:01:57
 * @FilePath: /admin/src/components/uniapp/src/goods/goods2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="goods2">
    <div class="item" v-for="(item, index) in 4" :key="index">
      <div class="imgBox">
        <img src="@/assets/img/logo.svg" alt="" />
      </div>
      <div class="info">
        <div class="name">
          泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g
        </div>
        <div class="spec">
          <span>500g/盒</span>
        </div>
        <div class="priceBox">
          <span class="tip">¥</span>
          <span class="price">3.9</span>
        </div>
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
.goods2 {
  padding: 0 $distance;
  .item {
    display: flex;
    padding: $distance-medium 0;
    & + .item {
      border-top: 1px solid $color-border;
    }
    .imgBox {
      flex-shrink: 0;
      img {
        width: 86px;
        height: 86px;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 86px;
      justify-content: space-between;
      padding-left: $distance-medium;
      .spec {
        span {
          background-color: $background;
          font-size: $font-sm;
          color: $color-tip;
          padding: $distance-sm;
          border-radius: $radius-sm;
        }
      }
      .name {
        @include line(2);
      }
      .priceBox {
        color: $color;
        .tip {
          font-size: $font-sm;
          margin-right: $distance-sm;
        }
        .price {
          font-size: $font-lg;
        }
      }
    }
  }
}
</style>
