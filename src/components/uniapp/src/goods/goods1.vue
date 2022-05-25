<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-17 11:02:09
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-25 16:18:20
 * @FilePath: /admin/src/components/uniapp/src/goods/goods1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="goods">
    <div class="goodsItem" v-for="(item, index) in 4" :key="index">
      <div class="goodsImg">
        <img src="@/assets/img/logo.svg" alt="" />
      </div>
      <div class="goodsInfo">
        <div class="goodsName">
          我是名称啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </div>
        <div class="goodsBottom">
          <span class="goodsTip">¥</span>
          <span class="goodsPrice">79.64</span>
          <span class="goodsOldPrice">¥ 80.00</span>
          <span class="goodsSale">已售25</span>
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
.goods {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 $distance;
  .goodsItem {
    overflow: hidden;
    width: calc(50% - 7px);
    box-sizing: border-box;
    background-color: $background;
    margin-top: 10px;
    .goodsImg {
      img {
        width: 100%;
        height: 141px;
      }
    }

    .goodsInfo {
      height: 77px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;

      .goodsName {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;
      }

      .goodsBottom {
        display: flex;
        align-items: baseline;

        .goodsTip {
          font-size: 10px;
          color: $color;
        }

        .goodsPrice {
          font-size: 17px;
          color: $color;
        }

        .goodsOldPrice {
          font-size: 10px;
          color: $color-tip;
          text-decoration: line-through;
          margin-left: 5px;
        }

        .goodsSale {
          font-size: 11px;
          color: $color-tip;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
